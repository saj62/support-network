import { Helmet } from "react-helmet-async";
import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import articlePosts from "../../data/articlePosts";

export default function Home() {
  const recentArticles = articlePosts.slice(0, 3);
  return (
    <>
      <Helmet>
        <title>
          Geriatrics Support Network
        </title>

        <meta
          name="description"
          content="Geriatrics Support Network is a nonprofit organization dedicated to supporting older adults, caregivers, and families through trusted educational resources, gerontology articles, expert insights, and healthy aging information."
        />

        <meta
          name="keywords"
          content="gerontology, healthy aging, caregiver resources, Alzheimer's, dementia, nonprofit, senior health, elder care, aging, geriatrics"
        />

        <meta property="og:title" content="Geriatrics Support Network" />

        <meta
          property="og:description"
          content="Supporting older adults, caregivers, and families through trusted educational resources, expert guidance, and healthy aging information."
        />

        <meta
          property="og:image"
          content="https://geriatricssupportnetwork.org/hero.png"
        />

        <meta
          property="og:url"
          content="https://geriatricssupportnetwork.org/"
        />

        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="Geriatrics Support Network" />

        <meta
          name="twitter:description"
          content="Supporting healthy aging through education, caregiving resources, and gerontology expertise."
        />

        <meta
          name="twitter:image"
          content="https://geriatricssupportnetwork.org/hero.png"
        />

        <link rel="canonical" href="https://geriatricssupportnetwork.org/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            name: "Geriatrics Support Network",
            url: "https://geriatricssupportnetwork.org",
            logo: "https://geriatricssupportnetwork.org/logo.png",
            image: "https://geriatricssupportnetwork.org/hero.png",
            description:
              "Geriatrics Support Network is a nonprofit organization dedicated to supporting older adults, caregivers, and families through educational resources, expert guidance, and healthy aging initiatives.",
          })}
        </script>
      </Helmet>

      <div>
        {/* HERO */}
        <section className="relative h-[500px] md:h-[700px] overflow-hidden">
          <img
            src="/hero.png"
            alt="Older adults and caregivers"
            className="absolute inset-0 h-full w-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-[#3E7A8A]/45" />

          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-cream/40 to-cream" />
        </section>

        {/* MISSION */}
        <section className="bg-cream py-16">
          <Container className="flex justify-center relative">
            <div className="max-w-2xl text-center">
              <h2 className="font-serif text-5xl text-teal mb-8">
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
        <section className="bg-cream py-10">
          <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="p-10 bg-cream2/60 flex flex-col">
              <h3 className="font-serif text-3xl text-teal text-center mb-8">
                Recent Articles
              </h3>

              <p className="text-teal/80 leading-relaxed mb-6">
                Our articles cover topics about geriatric facilities, aging-related
                illnesses, and navigating local support services.
              </p>

              <div className="space-y-4">
                {recentArticles.map((post) => (
                  <NavLink
                    key={post.id}
                    to={`/articles/${post.id}`}
                    className="group relative block h-20 rounded-xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-teal"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-15 group-hover:opacity-35 transition duration-300"
                    />

                    {/* <div className="absolute inset-0 rounded-xl border-[6px] border-transparent group-hover:border-teal transition-all duration-300 z-20 pointer-events-none" /> */}

                    <div className="relative z-10 h-full flex items-center justify-center px-4">
                      <h4 className="font-serif text-md text-teal font-bold leading-snug">
                        {post.title}
                      </h4>
                    </div>
                  </NavLink>
                ))}
              </div>

              <div className="flex justify-center mt-auto pt-8">
                <NavLink to="/articles">
                  <Button>
                    More <span aria-hidden>→</span>
                  </Button>
                </NavLink>
              </div>
            </Card>

            <Card className="p-10 bg-cream2/60 flex flex-col">
              <h3 className="font-serif text-3xl text-teal text-center mb-8">
                Expert Series
              </h3>

              <p className="text-teal/80 leading-relaxed text-center">
                Our Gerontology Expert Series features interviews and guest
                articles from local geriatricians and aging specialists. These
                voices share guidance to help families better understand and
                manage age-related conditions.
              </p>

              <div className="flex justify-center mt-auto pt-8">
                <NavLink to="/articles">
                  <Button>
                    More <span aria-hidden>→</span>
                  </Button>
                </NavLink>
              </div>
            </Card>

            <Card className="p-10 bg-cream2/60 flex flex-col">
              <h3 className="font-serif text-3xl text-teal text-center mb-8">
                Senior Activities
              </h3>

              <p className="text-teal/80 leading-relaxed text-center">
                Our gallery provides a glimpse into community events and
                resident activities at local facilities.
              </p>

              <div className="flex justify-center mt-auto pt-8">
                <NavLink to="/senior-activities">
                  <Button>
                    More <span aria-hidden>→</span>
                  </Button>
                </NavLink>
              </div>
            </Card>
          </Container>
        </section>
      </div>
    </>
  );
}