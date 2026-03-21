import { Link, useParams } from "react-router-dom";
import expertPosts from "../../data/expertPosts";

export default function ExpertPostPage() {
  const { id } = useParams();
  const post = expertPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-semibold text-[#1F4E4A] mb-4">
          Post not found
        </h1>
        <Link
          to="/expert-series"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F4E4A] text-white hover:opacity-90 transition"
        >
          ← Back to Expert Series
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <Link
        to="/expert-series"
        className="inline-flex items-center gap-2 mb-8 text-[#1F4E4A] hover:underline"
      >
        ← Back
      </Link>

      <article className="bg-white rounded-3xl border border-[#1F4E4A]/20 shadow-sm overflow-hidden">
        <div className="h-80">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-8 md:p-10">
          <div className="text-[#1F4E4A]/75 mb-3">{post.date}</div>

          <h1 className="text-3xl md:text-4xl font-semibold text-[#1F4E4A] mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-[#1F4E4A] leading-relaxed mb-8">
            {post.blurb}
          </p>

          <div className="space-y-6 text-[#1F4E4A] leading-8 text-lg">
            {post.text.map((section, index) => {
              const isHeading =
                !section.includes(".") &&
                !section.includes(",") &&
                section.endsWith("?");

              if (isHeading) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-semibold mt-10 mb-2 text-[#1F4E4A]"
                  >
                    {section}
                  </h2>
                );
              }

              return <p key={index}>{section}</p>;
            })}
          </div>

          {post.references?.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-[#1F4E4A] mb-4">
                References
              </h2>

              <ul className="space-y-4 text-[#1F4E4A] leading-7">
                {post.references.map((ref, index) => {
                    // Regex to find URL in the string
                    const urlMatch = ref.match(/https?:\/\/[^\s]+/);

                    if (!urlMatch) {
                    return <li key={index}>{ref}</li>;
                    }

                    const url = urlMatch[0];

                    // Split into: before URL + after URL
                    const [before, after] = ref.split(url);

                    return (
                    <li key={index}>
                        {before}
                        <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#1F4E4A]/70 transition"
                        >
                        {url}
                        </a>
                        {after}
                    </li>
                    );
                })}
                </ul>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}