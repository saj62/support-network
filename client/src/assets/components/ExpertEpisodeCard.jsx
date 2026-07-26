import ExpertVideoPlayer from "./ExpertVideoPlayer";

export default function ExpertEpisodeCard({ episode }) {
  const playLabel = `Play Episode ${episode.episodeNumber} with ${episode.guestName}`;

  return (
    <article className="overflow-hidden rounded-3xl border border-[#1F4E4A]/25 bg-white/60 p-5 shadow-sm sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-8">
        <ExpertVideoPlayer
          youtubeId={episode.youtubeId}
          thumbnail={episode.thumbnail}
          title={episode.title}
          alt={episode.thumbnailAlt}
          playLabel={playLabel}
        />

        <div className="flex min-w-0 flex-col text-left">
          <h2 className="font-serif text-xl font-semibold leading-snug text-[#1F4E4A] sm:text-2xl">
            {episode.title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#1F4E4A]/90 sm:text-lg">
            {episode.description}
          </p>

          <div className="mt-6">
            <a
              href={episode.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1F4E4A]/40 bg-white px-6 py-2.5 text-base font-semibold text-[#1F4E4A] transition hover:border-[#1F4E4A]/70 hover:bg-[#EDE7D3]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              Watch on YouTube
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
