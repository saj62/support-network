import { useState } from "react";

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 translate-x-0.5 text-white sm:h-10 sm:w-10"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

export default function ExpertVideoPlayer({
  youtubeId,
  thumbnail,
  title,
  alt,
  playLabel,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={playLabel}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-[#1F4E4A]/20 bg-[#EDE7D3] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      <img
        src={thumbnail}
        alt={alt}
        className="h-full w-full object-contain"
      />

      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[#1F4E4A]/15 transition group-hover:bg-[#1F4E4A]/25"
      />

      <span className="absolute inset-0 flex items-center justify-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1F4E4A] shadow-md transition group-hover:scale-105 group-hover:opacity-95 sm:h-16 sm:w-16">
          <PlayIcon />
        </span>
      </span>
    </button>
  );
}
