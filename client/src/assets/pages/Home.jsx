import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[500px] md:h-[700px] overflow-hidden">
        <img
          src="/hero.png"
          alt="Older adults and caregivers"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[#3E7A8A]/45" />

        {/* Fade into page */}
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
              Our mission is to support older adults, caregivers, and families with
              important information related to aging and caregiving. We connect elderly
              communities with resources to promote a healthy quality of life at every
              stage of aging.
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

            <p className="text-teal/80 leading-relaxed">
              Our articles cover topics about geriatric facilities, aging-related
              illnesses, and navigating local support services. Each piece is written
              to be practical and grounded in real-life caregiving needs.
            </p>

            <div className="space-y-4 mt-4">
              <div className="h-16 rounded-xl bg-white/70 overflow-hidden" />
              <div className="h-16 rounded-xl bg-white/70 overflow-hidden" />
              <div className="h-16 rounded-xl bg-white/70 overflow-hidden" />
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
              Our Gerontology Expert Series features interviews and guest articles
              from local geriatricians and aging specialists. These voices share
              guidance to help families better understand and manage age-related
              conditions.
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
              Our gallery provides a glimpse into community events and resident
              activities at local facilities.
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

      {/* NEWSLETTER SECTION */}
      {/* <section id="newsletter" className="bg-cream py-16">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="p-10 bg-cream2/60">
            <h3 className="font-serif text-3xl text-teal text-center mb-6">Newsletter</h3>
            <p className="text-teal/80 leading-relaxed text-center max-w-sm mx-auto">
              Sign up to receive monthly updates with meaningful information related to gerontology.
            </p>
          </Card>

          <Card className="p-10 bg-cream2/60">
            <h3 className="font-serif text-2xl text-teal text-center mb-6">
              Get the Newsletter <br /> in Your Inbox
            </h3>

            <form className="flex flex-col items-center gap-4">
              <input
                className="w-full max-w-sm px-5 py-3 rounded-xl border border-teal/20 bg-white/80 focus:outline-none focus:ring-2 focus:ring-teal/30"
                placeholder="Your email address..."
                type="email"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-[#E6B24A] text-white font-medium hover:opacity-90 transition"
              >
                Sign Up
              </button>
            </form>
          </Card>
        </Container>
      </section> */}
    </div>
  );
}
