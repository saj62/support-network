import { Link } from "react-router-dom";
import articlePosts from "../../data/articlePosts";

export default function Articles() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {articlePosts.map((post) => (
          <article
            key={post.id}
            className="h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-[#1F4E4A]/25 shadow-sm"
          >
            <div className="h-56">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col flex-1 p-6 sm:p-8 text-center">
              <div className="text-[#1F4E4A]/80 mb-4">{post.date}</div>

              <div className="font-serif text-lg font-bold text-teal lg:min-h-[5.5rem] flex items-start justify-center">
                {post.title}
              </div>

              <p className="text-[#1F4E4A] text-md leading-relaxed mt-4">
                {post.blurb}
              </p>

              <div className="mt-auto pt-6">
                <Link
                  to={`/articles/${post.id}`}
                  className="inline-flex items-center justify-center gap-2 px-10 py-3 rounded-full bg-[#1F4E4A] text-white text-lg hover:opacity-90 transition"
                >
                  More <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}