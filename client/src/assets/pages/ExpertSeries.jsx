const posts = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  date: "January 25, 2026",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageUrl:
    "https://images.unsplash.com/photo-1558980664-10ea9b9b9f2d?auto=format&fit=crop&w=1200&q=80",
}));

export default function ExpertSeries() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {posts.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#1F4E4A]/25 shadow-sm"
          >
            <div className="h-56">
              <img
                src={p.imageUrl}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-8 text-center">
              <div className="text-[#1F4E4A]/80 mb-3">{p.date}</div>
              <p className="text-[#1F4E4A] text-lg leading-relaxed">
                {p.excerpt}
              </p>

              <button className="mt-6 inline-flex items-center justify-center gap-2 px-10 py-3 rounded-full bg-[#1F4E4A] text-white text-lg hover:opacity-90 transition">
                More <span aria-hidden>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
