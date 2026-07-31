import { useMemo } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import ExpertEpisodePreview from "../components/ExpertEpisodePreview";
import PageMeta from "../components/PageMeta";
import { Link, NavLink } from "react-router-dom";
import articlePosts from "../../data/articlePosts";
import expertSeriesEpisodes from "../../data/expertSeriesEpisodes";
import seniorActivities from "../../data/seniorActivities.json";

const featureCardClassName =
  "h-full flex flex-col text-center rounded-3xl border border-[#1F4E4A]/40 bg-white/60 p-5 sm:p-6 shadow-sm transition-shadow duration-200 hover:border-[#1F4E4A]/55 hover:shadow-md";

const featureCardHeaderClassName =
  "flex items-center justify-center gap-4";

const featureCardTitleClassName =
  "text-2xl font-serif font-semibold text-[#1F4E4A] sm:text-3xl lg:text-[1.625rem] lg:whitespace-nowrap xl:text-2xl";

const featureCardDescriptionAreaClassName = "mt-3 lg:min-h-[5.25rem]";

const featureCardDescriptionClassName =
  "mx-auto max-w-md text-base sm:text-lg leading-7 text-[#1F4E4A]/90";

const featureCardArticlesMiddleClassName =
  "mt-8 flex w-full flex-1 items-center justify-center lg:mt-10";

const featureCardButtonRowClassName = "flex justify-center";

const featureCardArticlesButtonRowClassName =
  "pt-8 lg:pt-10";

const cardButtonClassName = "min-w-[12rem]";

const activityPreviewRowClassName =
  "flex items-center gap-4 rounded-2xl border border-[#1F4E4A]/15 bg-white p-3 text-left transition hover:border-[#1F4E4A]/40 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

function shuffleArray(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
}

function ActivityPreviewRow({ activity }) {
  const thumbnail = activity.thumbnail ? (
    <img
      src={activity.thumbnail}
      alt={`${activity.title} activity`}
      className="h-16 w-20 shrink-0 rounded-xl object-cover"
    />
  ) : (
    <div
      aria-hidden="true"
      className="flex h-16 w-20 shrink-0 items-center justify-center rounded-xl bg-[#EDE7D3] px-1 text-center text-[10px] leading-tight text-[#1F4E4A]/70"
    >
      Activity image coming soon
    </div>
  );

  return (
    <Link
      to={`/senior-activities/${activity.id}`}
      className={activityPreviewRowClassName}
    >
      {thumbnail}
      <div className="min-w-0">
        <h3 className="font-serif font-semibold leading-snug text-[#1F4E4A]">
          {activity.title}
        </h3>
      </div>
    </Link>
  );
}

function DocumentIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-[#1F4E4A]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function MicrophoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-[#1F4E4A]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-[#1F4E4A]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

function FeatureIcon({ children }) {
  return (
    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F4E4A]/10">
      {children}
    </div>
  );
}

export default function Home() {
  const recentArticles = [...articlePosts]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 2);

  const randomActivities = useMemo(
    () => shuffleArray(seniorActivities).slice(0, 3),
    []
  );

  const recentExpertSeriesEpisodes = [...expertSeriesEpisodes]
    .sort((a, b) => b.episodeNumber - a.episodeNumber)
    .slice(0, 2);

  return (
    <>
      <PageMeta
        title="Geriatrics Support Network"
        description="Geriatrics Support Network provides educational resources, senior activities, and expert guidance for older adults, caregivers, and families."
        keywords="gerontology, healthy aging, caregiver resources, Alzheimer's, dementia, nonprofit, senior health, elder care, aging, geriatrics"
        ogTitle="Geriatrics Support Network"
        ogDescription="Educational resources, senior activities, and expert guidance for older adults, caregivers, and families."
        ogImage="https://geriatricssupportnetwork.org/hero.png"
        ogUrl="https://geriatricssupportnetwork.org/"
        twitterTitle="Geriatrics Support Network"
        twitterDescription="Educational resources, senior activities, and expert guidance for older adults, caregivers, and families."
        twitterImage="https://geriatricssupportnetwork.org/hero.png"
        canonical="https://geriatricssupportnetwork.org/"
      />

      <div>
        {/* HERO */}
        <section className="relative h-[360px] sm:h-[500px] md:h-[700px] overflow-hidden">
          <img
            src="/hero.png"
            alt="Older adults and caregivers"
            className="absolute inset-0 h-full w-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-[#3E7A8A]/45" />

          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-cream/40 to-cream" />
        </section>

        {/* MISSION */}
        <section className="bg-cream py-12 sm:py-16">
          <Container className="flex justify-center relative">
            <div className="max-w-2xl text-center px-2">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-teal mb-6 sm:mb-8">
                Mission
              </h2>

              <p className="text-xl text-teal/80 leading-relaxed">
                Our mission is to support older adults, caregivers, and families
                with important information related to aging and caregiving. We
                connect elderly communities with resources to promote a healthy
                quality of life at every stage of aging.
              </p>

              <NavLink to="/about">
                <Button className="mt-10">
                  About <span aria-hidden>→</span>
                </Button>
              </NavLink>
            </div>
          </Container>
        </section>

        {/* Cards Row */}
        <section className="bg-cream py-8 sm:py-10">
          <Container className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            <article className={featureCardClassName}>
              <div className={featureCardHeaderClassName}>
                <FeatureIcon>
                  <DocumentIcon />
                </FeatureIcon>

                <h2 className={featureCardTitleClassName}>Recent Articles</h2>
              </div>

              <div className={featureCardDescriptionAreaClassName}>
                <p className={featureCardDescriptionClassName}>
                  Our articles cover topics about geriatric facilities,
                  aging-related illnesses, and navigating local support services.
                </p>
              </div>

              <div className={featureCardArticlesMiddleClassName}>
                <div className="w-full max-w-md space-y-3 text-left">
                  {recentArticles.map((post) => (
                    <Link
                      key={post.id}
                      to={`/articles/${post.id}`}
                      className="flex items-center gap-4 rounded-2xl border border-[#1F4E4A]/15 bg-white p-3 transition hover:border-[#1F4E4A]/40 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                    >
                      <img
                        src={post.image}
                        alt=""
                        className="h-16 w-20 shrink-0 rounded-xl object-cover"
                      />

                      <div className="min-w-0">
                        <h3 className="font-serif font-semibold leading-snug text-[#1F4E4A]">
                          {post.title}
                        </h3>

                        <p className="mt-1 text-sm text-[#1F4E4A]/70">
                          {post.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div
                className={`mt-auto ${featureCardButtonRowClassName} ${featureCardArticlesButtonRowClassName}`}
              >
                <NavLink to="/articles">
                  <Button className={cardButtonClassName}>
                    View Articles <span aria-hidden>→</span>
                  </Button>
                </NavLink>
              </div>
            </article>

            <article className={featureCardClassName}>
              <div>
                <div className={featureCardHeaderClassName}>
                  <FeatureIcon>
                    <MicrophoneIcon />
                  </FeatureIcon>

                  <h2 className={featureCardTitleClassName}>Expert Series</h2>
                </div>

                <div className={featureCardDescriptionAreaClassName}>
                  <p className={featureCardDescriptionClassName}>
                    Our Gerontology Expert Series features conversations with
                    geriatricians and aging specialists. Explore practical
                    guidance for families navigating age-related conditions.
                  </p>
                </div>

                {recentExpertSeriesEpisodes.length > 0 ? (
                  <div className="mt-6 flex w-full justify-center lg:mt-8">
                    <div className="w-full max-w-md space-y-3 text-left">
                      {recentExpertSeriesEpisodes.map((episode) => (
                        <ExpertEpisodePreview
                          key={episode.id}
                          episode={episode}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div
                className={`mt-auto ${featureCardButtonRowClassName} ${featureCardArticlesButtonRowClassName}`}
              >
                <NavLink to="/expert-series">
                  <Button className={cardButtonClassName}>
                    View Series <span aria-hidden>→</span>
                  </Button>
                </NavLink>
              </div>
            </article>

            <article className={featureCardClassName}>
              <div className={featureCardHeaderClassName}>
                <FeatureIcon>
                  <HeartIcon />
                </FeatureIcon>

                <h2 className={featureCardTitleClassName}>Senior Activities</h2>
              </div>

              <div className={featureCardDescriptionAreaClassName}>
                <p className={featureCardDescriptionClassName}>
                  Explore activities implemented in local senior living communities,
                  including preparation tips, resident reactions, and lessons
                  learned.
                </p>
              </div>

              <div className={featureCardArticlesMiddleClassName}>
                <div className="w-full max-w-md space-y-3 text-left">
                  {randomActivities.map((activity) => (
                    <ActivityPreviewRow
                      key={activity.id}
                      activity={activity}
                    />
                  ))}
                </div>
              </div>

              <div
                className={`mt-auto ${featureCardButtonRowClassName} ${featureCardArticlesButtonRowClassName}`}
              >
                <NavLink to="/senior-activities">
                  <Button className={cardButtonClassName}>
                    View Activities <span aria-hidden>→</span>
                  </Button>
                </NavLink>
              </div>
            </article>
          </Container>
        </section>

        {/* Shields Against Scams */}
        <section className="bg-cream py-8 sm:py-10 pb-12 sm:pb-16">
          <Container>
            <div className="rounded-3xl border border-[#1F4E4A]/25 bg-gradient-to-r from-white via-[#f3f8f6] to-[#dceeed] px-6 py-10 shadow-sm sm:px-10 sm:py-12">
              <div className="grid items-center gap-8 text-center md:grid-cols-[auto_1fr] md:text-left">
                <div className="flex justify-center md:justify-start">
                  <img
                    src="/shields-against-scams-logo.png"
                    alt="Shields Against Scams"
                    loading="lazy"
                    className="h-auto w-full max-w-[200px] object-contain md:max-w-[240px]"
                  />
                </div>

                <div className="min-w-0">
                  <h2 className="font-serif text-3xl font-semibold text-[#1F4E4A] sm:text-4xl">
                    Shields Against Scams
                  </h2>

                  <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#1F4E4A]/90 sm:text-lg md:mx-0">
                    Learn how to recognize common scams, protect personal
                    information, and help older adults respond safely to
                    suspicious calls, messages, and requests.
                  </p>

                  <div className="mt-6 sm:mt-8">
                    <NavLink to="/shields-against-scams">
                      <Button>
                        Explore Toolkit <span aria-hidden>→</span>
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}