import { Link } from "react-router-dom";
import expertPosts from "../../data/expertPosts";

export default function ExpertSeries() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {expertPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#1F4E4A]/25 shadow-sm"
          >
            <div className="h-56">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-8 text-center">
              <div className="text-[#1F4E4A]/80 mb-3">{post.date}</div>

              <p className="text-[#1F4E4A] text-md leading-relaxed">
                {post.blurb}
              </p>

              <Link
                to={`/expert-series/${post.id}`}
                className="mt-6 inline-flex items-center justify-center gap-2 px-10 py-3 rounded-full bg-[#1F4E4A] text-white text-lg hover:opacity-90 transition"
              >
                More <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}