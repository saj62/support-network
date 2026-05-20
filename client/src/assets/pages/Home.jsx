import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-[#3E7A8A] h-[360px] md:h-[420px]" />

      {/* MISSION */}
      <section className="bg-cream py-16">
        <Container className="flex justify-center">
          <div className="text-center max-w-lg">
            <h2 className="font-serif text-4xl text-teal mb-6">Mission</h2>
            <p className="text-teal/80 leading-relaxed">
              Our mission is to support older adults, caregivers, and families with important information related to aging and caregiving. We connect elderly communities with resources to promote a healthy quality of life at every stage of aging.
            </p>
            <Button className="mt-8">
              About <span aria-hidden>→</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* 2 CARDS ROW (Recent Articles + Expert Series) */}
      <section className="bg-cream py-10">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="p-10 bg-cream2/60">
            <h3 className="font-serif text-3xl text-teal text-center mb-8">Recent Articles</h3>
            <p className="text-teal/80 leading-relaxed">
              Our articles cover topics about geriatric facilities, aging-related illnesses, and navigating local support services. Each piece is written to be practical and grounded in real-life caregiving needs.
            </p>

            <div className="space-y-4">
              <div className="h-16 rounded-xl bg-white/70 overflow-hidden" />
              <div className="h-16 rounded-xl bg-white/70 overflow-hidden" />
              <div className="h-16 rounded-xl bg-white/70 overflow-hidden" />
            </div>

            <div className="flex justify-center mt-8">
              <Button>
                More <span aria-hidden>→</span>
              </Button>
            </div>
          </Card>

          <Card className="p-10 bg-cream2/60">
            <h3 className="font-serif text-3xl text-teal text-center mb-8">Expert Series</h3>
            <p className="text-teal/80 leading-relaxed text-center max-w-sm mx-auto">
              Our Gerontology Expert Series features interviews and guest articles from local geriatricians and aging specialists. These voices share guidance to help families better understand and manage age-related conditions.
            </p>
          </Card>
        </Container>
      </section>

      {/* GALLERY BAND */}
      <section className="relative h-[420px] md:h-[520px]">
        <div className="absolute inset-0 bg-black/10" />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1520975682031-aee60b6f6f9c?auto=format&fit=crop&w=1800&q=80"
          className="h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-serif text-6xl text-teal mb-6">Gallery</h2>
            <p className="text-teal/80 leading-relaxed">Our gallery will provide you with a glimpse into some of our community events and resident activities at local facilities.</p>
            <Button>
              More <span aria-hidden>→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section id="newsletter" className="bg-cream py-16">
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
      </section>
    </div>
  );
}
