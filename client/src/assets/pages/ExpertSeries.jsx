import { Helmet } from "react-helmet-async";
import expertSeriesEpisodes from "../../data/expertSeriesEpisodes";
import ExpertEpisodeCard from "../components/ExpertEpisodeCard";

function getLatestEpisode(episodes) {
  if (!episodes.length) return null;
  return [...episodes].sort((a, b) => b.episodeNumber - a.episodeNumber)[0];
}

export default function ExpertSeries() {
  const latestEpisode = getLatestEpisode(expertSeriesEpisodes);
  const pageDescription =
    latestEpisode != null
      ? `Watch conversations with geriatricians and aging specialists, including Episode ${latestEpisode.episodeNumber} with ${latestEpisode.guestName} of ${latestEpisode.organization}.`
      : "Watch conversations with geriatricians and aging specialists from the Geriatrics Support Network Expert Series.";

  return (
    <>
      <Helmet>
        <title>Expert Series | Geriatrics Support Network</title>

        <meta name="description" content={pageDescription} />

        <meta
          property="og:site_name"
          content="Geriatrics Support Network"
        />
        <meta
          property="og:title"
          content={
            latestEpisode
              ? `Episode ${latestEpisode.episodeNumber}: ${latestEpisode.guestName} | Geriatrics Support Network`
              : "Expert Series | Geriatrics Support Network"
          }
        />
        <meta
          property="og:description"
          content={
            latestEpisode
              ? `${latestEpisode.guestName} discusses his professional journey, senior care credentials, and tips for families navigating senior living options.`
              : pageDescription
          }
        />
        {latestEpisode ? (
          <meta
            property="og:image"
            content={`https://geriatricssupportnetwork.org${latestEpisode.thumbnail}`}
          />
        ) : null}
        <meta
          property="og:url"
          content="https://geriatricssupportnetwork.org/expert-series"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={
            latestEpisode
              ? `Episode ${latestEpisode.episodeNumber}: ${latestEpisode.guestName} | Geriatrics Support Network`
              : "Expert Series | Geriatrics Support Network"
          }
        />
        <meta name="twitter:description" content={pageDescription} />
        {latestEpisode ? (
          <meta
            name="twitter:image"
            content={`https://geriatricssupportnetwork.org${latestEpisode.thumbnail}`}
          />
        ) : null}

        <link
          rel="canonical"
          href="https://geriatricssupportnetwork.org/expert-series"
        />
      </Helmet>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <h1 className="mb-6 text-center font-serif text-3xl text-teal sm:text-4xl">
          Expert Series
        </h1>

        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-teal/80">
          Our Gerontology Expert Series features conversations with geriatricians
          and aging specialists. These experts share practical guidance to help
          families better understand and navigate age-related conditions.
        </p>

        <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
          {expertSeriesEpisodes.map((episode) => (
            <ExpertEpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </section>
    </>
  );
}
