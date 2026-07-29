import expertSeriesEpisodes from "../../data/expertSeriesEpisodes";
import ExpertEpisodeCard from "../components/ExpertEpisodeCard";
import PageMeta from "../components/PageMeta";

function getLatestEpisode(episodes) {
  if (!episodes.length) return null;
  return [...episodes].sort((a, b) => b.episodeNumber - a.episodeNumber)[0];
}

export default function ExpertSeries() {
  const sortedEpisodes = [...expertSeriesEpisodes].sort(
    (a, b) => b.episodeNumber - a.episodeNumber
  );
  const latestEpisode = getLatestEpisode(expertSeriesEpisodes);
  const pageDescription =
    latestEpisode != null
      ? `Watch conversations with geriatricians and aging specialists, including Episode ${latestEpisode.episodeNumber} with ${latestEpisode.guestName} of ${latestEpisode.organization}.`
      : "Watch conversations with geriatricians and aging specialists from the Geriatrics Support Network Expert Series.";
  const ogTitle = latestEpisode
    ? `Episode ${latestEpisode.episodeNumber}: ${latestEpisode.guestName} | Geriatrics Support Network`
    : "Expert Series | Geriatrics Support Network";
  const ogDescription = latestEpisode
    ? latestEpisode.description
    : pageDescription;
  const ogImage = latestEpisode
    ? `https://geriatricssupportnetwork.org${latestEpisode.thumbnail}`
    : undefined;

  return (
    <>
      <PageMeta
        title="Expert Series | Geriatrics Support Network"
        description={pageDescription}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogImage={ogImage}
        ogUrl="https://geriatricssupportnetwork.org/expert-series"
        twitterTitle={ogTitle}
        twitterDescription={pageDescription}
        twitterImage={ogImage}
        canonical="https://geriatricssupportnetwork.org/expert-series"
      />

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
          {sortedEpisodes.map((episode) => (
            <ExpertEpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </section>
    </>
  );
}
