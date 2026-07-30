import { Link, useParams } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { getShieldsTopicBySlug } from "../../data/shieldsAgainstScamsTopics";

export default function ShieldsAgainstScamsTopicPage() {
  const { slug } = useParams();
  const topic = getShieldsTopicBySlug(slug);

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
        description={`Downloadable resources for ${topic.title} will be added soon.`}
        ogTitle={`${topic.title} | Shields Against Scams`}
        ogDescription={`Downloadable resources for ${topic.title} will be added soon.`}
        ogUrl={`https://geriatricssupportnetwork.org${topic.path}`}
        twitterTitle={`${topic.title} | Shields Against Scams`}
        twitterDescription={`Downloadable resources for ${topic.title} will be added soon.`}
        canonical={`https://geriatricssupportnetwork.org${topic.path}`}
      />

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
        <Link
          to="/shields-against-scams"
          className="mb-8 inline-flex items-center gap-2 text-[#1F4E4A] transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F1E6] rounded-sm"
        >
          ← Back to Shields Against Scams
        </Link>

        <h1 className="font-serif text-3xl text-teal sm:text-4xl">
          {topic.title}
        </h1>

        {/* Downloadable resources for this section will be added here later. */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1F4E4A]">
          Downloadable resources for this section will be added soon.
        </p>
      </section>
    </>
  );
}
