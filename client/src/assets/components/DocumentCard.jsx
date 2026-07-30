import PdfFirstPagePreview from "./PdfFirstPagePreview";

function PdfIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-12 w-12 text-[#1F4E4A]/50"
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

function DocumentPreview({ document: doc }) {
  if (doc.previewImage) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-[#eef4f2] p-5">
        <img
          src={doc.previewImage}
          alt=""
          className="h-full w-full object-contain drop-shadow-sm"
        />
      </div>
    );
  }

  if (doc.filePath) {
    return (
      <PdfFirstPagePreview filePath={doc.filePath} title={doc.title} />
    );
  }

  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-[#eef4f2] p-5">
      <div className="flex flex-col items-center justify-center rounded-lg border border-[#1F4E4A]/10 bg-white px-8 py-10 shadow-sm">
        <PdfIcon />
        <span className="mt-3 text-sm font-semibold tracking-wide text-[#1F4E4A]/70">
          PDF
        </span>
      </div>
    </div>
  );
}

export default function DocumentCard({ document: doc }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#1F4E4A]/25 bg-white shadow-sm transition hover:border-[#1F4E4A]/40 hover:shadow-md">
      <DocumentPreview document={doc} />

      <div className="flex flex-1 flex-col p-5 text-left sm:p-6">
        <span className="inline-flex w-fit rounded-full border border-[#1F4E4A]/20 bg-[#eef4f2] px-2.5 py-0.5 text-xs font-semibold tracking-wide text-[#1F4E4A]">
          {doc.fileType || "PDF"}
        </span>

        <h2 className="mt-3 font-serif text-lg font-bold leading-snug text-teal">
          {doc.title}
        </h2>

        <a
          href={doc.filePath}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={doc.ariaLabel || `Open ${doc.title} PDF`}
          className="mt-auto inline-flex items-center gap-2 rounded-sm pt-5 font-semibold text-[#1F4E4A] transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Open Document <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
