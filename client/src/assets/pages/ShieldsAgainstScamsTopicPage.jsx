import { Link, useParams } from "react-router-dom";
import DocumentCard from "../components/DocumentCard";
import PageMeta from "../components/PageMeta";
import { getShieldsTopicBySlug } from "../../data/shieldsAgainstScamsTopics";

export default function ShieldsAgainstScamsTopicPage() {
  const { slug } = useParams();
  const topic = getShieldsTopicBySlug(slug);
  const documents = topic?.documents ?? [];

  if (!topic) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <PageMeta title="Section Not Found | Geriatrics Support Network" />
        <h1 className="mb-4 font-serif text-3xl font-semibold text-[#1F4E4A]">
          Section not found
        </h1>
        <Link
          to="/shields-against-scams"
          className="inline-flex items-center gap-2 rounded-full bg-[#1F4E4A] px-6 py-3 text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F1E6]"
        >
          ← Back to Shields Against Scams
        </Link>
      </section>
    );
  }

  return (
    <>
      <PageMeta
        title={`${topic.title} | Shields Against Scams`}
        description={`View and download resources for ${topic.title}.`}
        ogTitle={`${topic.title} | Shields Against Scams`}
        ogDescription={`View and download resources for ${topic.title}.`}
        ogUrl={`https://geriatricssupportnetwork.org${topic.path}`}
        twitterTitle={`${topic.title} | Shields Against Scams`}
        twitterDescription={`View and download resources for ${topic.title}.`}
        canonical={`https://geriatricssupportnetwork.org${topic.path}`}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <Link
          to="/shields-against-scams"
          className="mb-8 inline-flex items-center gap-2 rounded-sm text-[#1F4E4A] transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F1E6]"
        >
          ← Back to Shields Against Scams
        </Link>

        <h1 className="font-serif text-3xl text-teal sm:text-4xl">
          {topic.title}
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#1F4E4A]">
          View and download the resources available for this topic.
        </p>

        {documents.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-[#1F4E4A]/15 bg-white/70 px-6 py-12 text-center sm:mt-10 sm:px-10">
            <h2 className="font-serif text-2xl font-semibold text-[#1F4E4A]">
              Resources coming soon
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-[#1F4E4A]/80 sm:text-lg">
              Downloadable documents for this topic will be added here.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
