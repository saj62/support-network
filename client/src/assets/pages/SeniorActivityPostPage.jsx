import { Link, useParams } from "react-router-dom";
import seniorActivities from "../../data/seniorActivities.json";
import RichParagraph from "../components/RichParagraph";

export default function SeniorActivityPostPage() {
  const { id } = useParams();
  const activity = seniorActivities.find((item) => item.id === id);

  if (!activity) {
    return (
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <h1 className="text-3xl font-semibold text-[#1F4E4A] mb-4">
          Post not found
        </h1>
        <Link
          to="/senior-activities"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F4E4A] text-white hover:opacity-90 transition"
        >
          ← Back to Senior Activities
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <Link
        to="/senior-activities"
        className="inline-flex items-center gap-2 mb-8 text-[#1F4E4A] hover:underline"
      >
        ← Back to Senior Activities
      </Link>

      <article className="bg-white rounded-3xl border border-[#1F4E4A]/20 shadow-sm overflow-hidden">
        {activity.thumbnail ? (
          <div className="h-48 sm:h-64 md:h-80">
            <img
              src={activity.thumbnail}
              alt={`${activity.title} activity`}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}

        <div className="p-6 sm:p-8 md:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F4E4A] mb-4 sm:mb-6 break-words">
            {activity.title}
          </h1>

          {activity.shortDescription ? (
            <p className="text-lg sm:text-xl text-[#1F4E4A] leading-relaxed mb-6 sm:mb-8">
              {activity.shortDescription}
            </p>
          ) : null}

          {activity.materials?.length ? (
            <section className="mb-8 sm:mb-10">
              <h2 className="font-serif text-xl sm:text-2xl text-teal mb-3">
                Materials
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-[#1F4E4A]">
                {activity.materials.map((material) => (
                  <li key={material}>{material}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {activity.content?.length ? (
            <section className="mb-8 sm:mb-10">
              <h2 className="font-serif text-xl sm:text-2xl text-teal mb-3">
                Activity Details
              </h2>
              <div className="space-y-4 text-[#1F4E4A] leading-8 text-lg">
                {activity.content.map((block, index) => (
                  <RichParagraph
                    key={`${activity.id}-content-${index}`}
                    block={block}
                  />
                ))}
              </div>
            </section>
          ) : null}

          {activity.images?.length ? (
            <section className="mb-8 sm:mb-10">
              <h2 className="font-serif text-xl sm:text-2xl text-teal mb-3">
                Photos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activity.images.map((image) => (
                  <figure
                    key={image.src}
                    className="bg-[#F6F1E6] rounded-2xl border border-[#1F4E4A]/20 overflow-hidden"
                  >
                    <img
                      src={image.src}
                      alt={image.alt || `${activity.title} activity photo`}
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

          {(activity.downloads?.length || activity.links?.length) ? (
            <section className="border-t border-[#1F4E4A]/20 pt-6 sm:pt-8 space-y-6">
              {activity.downloads?.length ? (
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl text-teal mb-3">
                    Downloads
                  </h2>
                  <ul className="space-y-2">
                    {activity.downloads.map((download) => (
                      <li key={download.label}>
                        <a
                          href={download.url}
                          download={download.download ? true : undefined}
                          target={download.external ? "_blank" : undefined}
                          rel={
                            download.external ? "noopener noreferrer" : undefined
                          }
                          className="underline underline-offset-4 font-medium text-[#1F4E4A] hover:opacity-80 break-words focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 rounded-sm"
                        >
                          {download.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {activity.links?.length ? (
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl text-teal mb-3">
                    Related Links
                  </h2>
                  <ul className="space-y-2">
                    {activity.links.map((link) => (
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
      </article>
    </section>
  );
}
