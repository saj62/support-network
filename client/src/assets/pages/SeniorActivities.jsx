import { useEffect, useMemo, useRef, useState } from "react";
import seniorActivities from "../../data/seniorActivities.json";

function RichParagraph({ block }) {
  if (block.parts?.length) {
    return (
      <p className="text-[#1F4E4A] leading-relaxed">
        {block.parts.map((part, index) => {
          if (part.type === "link") {
            return (
              <a
                key={`${part.text}-${index}`}
                href={part.url}
                target={part.external ? "_blank" : undefined}
                rel={part.external ? "noopener noreferrer" : undefined}
                className="underline underline-offset-4 font-medium hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 rounded-sm"
              >
                {part.text}
              </a>
            );
          }

          return <span key={`${part.text}-${index}`}>{part.text}</span>;
        })}
      </p>
    );
  }

  return <p className="text-[#1F4E4A] leading-relaxed">{block.text}</p>;
}

export default function SeniorActivities() {
  const [activeActivityId, setActiveActivityId] = useState(null);
  const cardRefs = useRef(new Map());
  const returnFocusIdRef = useRef(null);
  const activeActivity = useMemo(
    () => seniorActivities.find((activity) => activity.id === activeActivityId),
    [activeActivityId]
  );

  useEffect(() => {
    if (!activeActivity) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveActivityId(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeActivity]);

  useEffect(() => {
    if (activeActivity) return;
    if (!returnFocusIdRef.current) return;

    const trigger = cardRefs.current.get(returnFocusIdRef.current);
    trigger?.focus();
    returnFocusIdRef.current = null;
  }, [activeActivity, activeActivityId]);

  const closeModal = () => {
    returnFocusIdRef.current = activeActivityId;
    setActiveActivityId(null);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <div className="max-w-5xl">
        <p className="text-[#1F4E4A] text-base sm:text-lg leading-relaxed">
          Our activity pages discuss some of the activities that we have
          implemented into local elder communities. These pages talk about what
          we used to prepare the activities and what we learned from our
          experience.
        </p>
        <p className="mt-4 sm:mt-6 text-[#1F4E4A] text-base sm:text-lg leading-relaxed">
          The following activity pages not only provide ideas for activities to
          incorporate in senior living communities, but they also talk about my
          experiences implementing them: how I created them, how the residents
          reacted, and what I would do differently.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
        {seniorActivities.map((activity) => (
          <button
            key={activity.id}
            type="button"
            onClick={() => setActiveActivityId(activity.id)}
            ref={(node) => {
              if (node) {
                cardRefs.current.set(activity.id, node);
              } else {
                cardRefs.current.delete(activity.id);
              }
            }}
            className="h-full flex flex-col text-left bg-white rounded-3xl overflow-hidden border border-[#1F4E4A]/25 shadow-sm hover:shadow-md hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F6F1E6] transition"
            aria-label={`Open details for ${activity.title}`}
          >
            <div className="h-48 bg-[#EDE7D3] overflow-hidden">
              {activity.thumbnail ? (
                <img
                  src={activity.thumbnail}
                  alt={`${activity.title} activity`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center px-6 text-center text-[#1F4E4A]/70">
                  Activity image coming soon
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <h2 className="font-serif text-lg font-bold text-teal mb-3">
                {activity.title}
              </h2>

              <p className="text-[#1F4E4A] text-md leading-relaxed flex-1">
                {activity.shortDescription}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-[#1F4E4A] font-semibold">
                View activity <span aria-hidden>→</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeActivity ? (
        <div
          className="fixed inset-0 z-50 bg-black/50 p-3 sm:p-4 md:p-8 flex items-center justify-center overflow-y-auto"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`activity-title-${activeActivity.id}`}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F6F1E6] border border-[#1F4E4A]/25 rounded-3xl shadow-xl"
          >
            <div className="sticky top-0 bg-[#F6F1E6] border-b border-[#1F4E4A]/20 px-4 sm:px-6 md:px-8 py-4 flex items-start sm:items-center justify-between gap-3 sm:gap-4">
              <h3
                id={`activity-title-${activeActivity.id}`}
                className="font-serif text-xl sm:text-2xl text-teal break-words flex-1 min-w-0"
              >
                {activeActivity.title}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                autoFocus
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#1F4E4A]/30 px-4 py-2 text-[#1F4E4A] font-semibold hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2"
              >
                Close
              </button>
            </div>

            <div className="px-4 sm:px-6 md:px-8 py-6 space-y-8">
              {activeActivity.materials?.length ? (
                <section>
                  <h4 className="font-serif text-xl text-teal mb-3">Materials</h4>
                  <ul className="list-disc pl-6 space-y-2 text-[#1F4E4A]">
                    {activeActivity.materials.map((material) => (
                      <li key={material}>{material}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {activeActivity.content?.length ? (
                <section>
                  <h4 className="font-serif text-xl text-teal mb-3">Activity Details</h4>
                  <div className="space-y-4">
                    {activeActivity.content.map((block, index) => (
                      <RichParagraph key={`${activeActivity.id}-content-${index}`} block={block} />
                    ))}
                  </div>
                </section>
              ) : null}

              {activeActivity.images?.length ? (
                <section>
                  <h4 className="font-serif text-xl text-teal mb-3">Photos</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeActivity.images.map((image) => (
                      <figure key={image.src} className="bg-white rounded-2xl border border-[#1F4E4A]/20 overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt || `${activeActivity.title} activity photo`}
                          className="w-full aspect-[4/3] object-cover"
                        />
                        {image.caption ? (
                          <figcaption className="px-4 py-3 text-sm text-[#1F4E4A]">
                            {image.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                </section>
              ) : null}

              {(activeActivity.downloads?.length || activeActivity.links?.length) ? (
                <section className="border-t border-[#1F4E4A]/20 pt-6 space-y-6">
                  {activeActivity.downloads?.length ? (
                    <div>
                      <h4 className="font-serif text-xl text-teal mb-3">Downloads</h4>
                      <ul className="space-y-2">
                        {activeActivity.downloads.map((download) => (
                          <li key={download.label}>
                            <a
                              href={download.url}
                              download={download.download ? true : undefined}
                              target={download.external ? "_blank" : undefined}
                              rel={download.external ? "noopener noreferrer" : undefined}
                              className="underline underline-offset-4 font-medium text-[#1F4E4A] hover:opacity-80 wrap-break-word focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 rounded-sm"
                            >
                              {download.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {activeActivity.links?.length ? (
                    <div>
                      <h4 className="font-serif text-xl text-teal mb-3">Related Links</h4>
                      <ul className="space-y-2">
                        {activeActivity.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.url}
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noopener noreferrer" : undefined}
                              className="underline underline-offset-4 font-medium text-[#1F4E4A] hover:opacity-80 break-words focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 rounded-sm"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </section>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
