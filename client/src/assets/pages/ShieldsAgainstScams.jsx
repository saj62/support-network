import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import shieldsAgainstScamsTopics from "../../data/shieldsAgainstScamsTopics";

function TopicIcon({ name }) {
  const commonProps = {
    "aria-hidden": true,
    className: "h-12 w-12 text-[#1F4E4A]/55",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
  };

  switch (name) {
    case "warning":
      return (
        <svg {...commonProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      );
    case "megaphone":
      return (
        <svg {...commonProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18v-9.18m0 9.18a7.5 7.5 0 008.158-6.94 7.5 7.5 0 00-8.158-6.94m0 13.88A7.5 7.5 0 018.25 21M3 12.75h.008v.008H3v-.008z"
          />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...commonProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "lock":
      return (
        <svg {...commonProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      );
    case "contacts":
      return (
        <svg {...commonProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      );
    default:
      return null;
  }
}

function TopicThumbnail({ topic }) {
  // When a permanent thumbnail path is added to topic.thumbnail in
  // shieldsAgainstScamsTopics.js, it will render here automatically.
  // Crop framing is controlled via topic.objectPosition (CSS object-position).
  if (topic.thumbnail) {
    return (
      <img
        src={topic.thumbnail}
        alt=""
        className="h-full w-full object-cover"
        style={{
          objectPosition: topic.objectPosition || "center center",
        }}
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f3f8f6] via-[#e8f2f0] to-[#dceeed]">
      <TopicIcon name={topic.icon} />
    </div>
  );
}

export default function ShieldsAgainstScams() {
  return (
    <>
      <PageMeta
        title="Shields Against Scams | Geriatrics Support Network"
        description="A toolkit to help prevent older adults from being scammed, with documents, posters, and videos on elder scam prevention topics."
        ogTitle="Shields Against Scams | Geriatrics Support Network"
        ogDescription="A toolkit to help prevent older adults from being scammed, with documents, posters, and videos on elder scam prevention topics."
        ogUrl="https://geriatricssupportnetwork.org/shields-against-scams"
        twitterTitle="Shields Against Scams | Geriatrics Support Network"
        twitterDescription="A toolkit to help prevent older adults from being scammed, with documents, posters, and videos on elder scam prevention topics."
        canonical="https://geriatricssupportnetwork.org/shields-against-scams"
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <h1 className="mb-6 text-center font-serif text-3xl text-teal sm:text-4xl">
          Shields Against Scams
        </h1>

        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-[#1F4E4A] sm:text-xl">
          This is a toolkit intended to help prevent older adults from being
          scammed. In each of the sections below, you will access documents,
          posters, and videos related to specific topics in elder scam
          prevention.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {shieldsAgainstScamsTopics.map((topic) => (
            <Link
              key={topic.id}
              to={topic.path}
              aria-label={topic.ariaLabel}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#1F4E4A]/25 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F6F1E6]"
            >
              <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#eef6f5]">
                <TopicThumbnail topic={topic} />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h2 className="font-serif text-lg font-bold leading-snug text-teal lg:min-h-[3.5rem]">
                  {topic.title}
                </h2>

                <div className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-[#1F4E4A]">
                  View Resources <span aria-hidden>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
