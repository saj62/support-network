import { Link } from "react-router-dom";

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 translate-x-px text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

function formatCredentials(credentials) {
  if (!credentials?.length) return "";
  return credentials.join(", ");
}

export default function ExpertEpisodePreview({ episode }) {
  const credentialsText = formatCredentials(episode.credentials);
  const supportingText = episode.organization || credentialsText;

  return (
    <Link
      to="/expert-series"
      className="flex items-center gap-4 rounded-2xl border border-[#1F4E4A]/15 bg-white p-3 text-left transition hover:border-[#1F4E4A]/40 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      aria-label={`View ${episode.shortTitle} in the Expert Series`}
    >
      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-[#EDE7D3]">
        <img
          src={episode.thumbnail}
          alt=""
          className="h-full w-full object-cover object-left"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-[#1F4E4A]/25"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1F4E4A]">
            <PlayIcon />
          </span>
        </span>
      </div>

      <div className="min-w-0">
        <h3 className="font-serif font-semibold leading-snug text-[#1F4E4A]">
          {episode.shortTitle}
        </h3>
        {supportingText ? (
          <p className="mt-1 text-sm text-[#1F4E4A]/70">{supportingText}</p>
        ) : null}
      </div>
    </Link>
  );
}
