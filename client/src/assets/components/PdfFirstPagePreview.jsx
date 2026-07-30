import { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

GlobalWorkerOptions.workerSrc = pdfWorker;

function PdfIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-10 w-10 text-[#1F4E4A]/50"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}

function LoadingPreview() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        aria-hidden="true"
        className="h-28 w-20 animate-pulse rounded-sm border border-[#1F4E4A]/10 bg-[#f7f7f7] shadow-sm"
      />
      <span className="text-sm text-[#1F4E4A]/70">Loading preview…</span>
    </div>
  );
}

function ErrorPreview() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-[#1F4E4A]/10 bg-[#f7f7f7] px-8 py-10 shadow-sm">
      <PdfIcon />
      <span className="mt-1 text-sm font-semibold tracking-wide text-[#1F4E4A]/70">
        PDF
      </span>
      <span className="text-xs text-[#1F4E4A]/60">Preview unavailable</span>
    </div>
  );
}

/**
 * Renders page 1 of a PDF into a canvas sized to cover the preview container
 * (CSS object-cover behavior: fill area, crop overflow).
 */
export default function PdfFirstPagePreview({ filePath, title }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const renderWidthRef = useRef(0);
  const hasRenderedRef = useRef(false);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !filePath) {
      setStatus("error");
      return undefined;
    }

    let cancelled = false;
    let loadingTask = null;
    let pdfDocument = null;
    let renderTask = null;
    let debounceId = null;

    hasRenderedRef.current = false;
    renderWidthRef.current = 0;
    setStatus("loading");

    const renderPage = async () => {
      const containerWidth = Math.max(container.clientWidth, 1);
      const containerHeight = Math.max(container.clientHeight, 1);

      if (
        hasRenderedRef.current &&
        Math.abs(containerWidth - renderWidthRef.current) < 8
      ) {
        return;
      }

      if (!hasRenderedRef.current && !cancelled) {
        setStatus("loading");
      }

      try {
        if (!pdfDocument) {
          loadingTask = getDocument(filePath);
          pdfDocument = await loadingTask.promise;
          loadingTask = null;
        }

        if (cancelled) return;

        const page = await pdfDocument.getPage(1);
        if (cancelled) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const widthScale = containerWidth / baseViewport.width;
        const heightScale = containerHeight / baseViewport.height;
        const scale = Math.max(widthScale, heightScale);
        const viewport = page.getViewport({ scale });
        const outputScale = window.devicePixelRatio || 1;
        const canvas = canvasRef.current;

        if (!canvas || cancelled) return;

        const context = canvas.getContext("2d");
        if (!context) {
          throw new Error("Canvas 2D context unavailable");
        }

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        if (renderTask) {
          try {
            renderTask.cancel();
          } catch {
            // Ignore cancel errors from an already-finished task.
          }
        }

        renderTask = page.render({
          canvasContext: context,
          viewport,
          transform:
            outputScale !== 1
              ? [outputScale, 0, 0, outputScale, 0, 0]
              : undefined,
        });

        await renderTask.promise;
        renderTask = null;

        if (cancelled) return;

        renderWidthRef.current = containerWidth;
        hasRenderedRef.current = true;
        setStatus("ready");
      } catch (error) {
        if (cancelled || error?.name === "RenderingCancelledException") {
          return;
        }
        console.error("PDF preview failed:", filePath, error);
        if (!cancelled) {
          setStatus("error");
        }
      }
    };

    const scheduleRender = () => {
      if (debounceId != null) {
        window.clearTimeout(debounceId);
      }
      debounceId = window.setTimeout(() => {
        void renderPage();
      }, 100);
    };

    scheduleRender();

    const resizeObserver = new ResizeObserver(() => {
      scheduleRender();
    });
    resizeObserver.observe(container);

    return () => {
      cancelled = true;
      if (debounceId != null) {
        window.clearTimeout(debounceId);
      }
      resizeObserver.disconnect();

      if (renderTask) {
        try {
          renderTask.cancel();
        } catch {
          // Ignore cancel errors during unmount.
        }
      }

      if (pdfDocument) {
        void pdfDocument.destroy();
      } else if (loadingTask) {
        void loadingTask.destroy();
      }
    };
  }, [filePath]);

  return (
    <div
      ref={containerRef}
      className="relative flex aspect-[4/3] h-full w-full items-center justify-center overflow-hidden bg-white"
    >
      {status === "loading" ? <LoadingPreview /> : null}
      {status === "error" ? <ErrorPreview /> : null}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        aria-label={title ? `Preview of ${title}` : undefined}
        className={
          status === "ready"
            ? "absolute left-1/2 top-0 max-w-none -translate-x-1/2"
            : "hidden"
        }
      />
    </div>
  );
}
