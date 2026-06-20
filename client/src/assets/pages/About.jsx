export default function About() {
  return (
    <main className="bg-cream min-h-[calc(100vh-160px)]">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left image/name column */}
          <div className="flex flex-col items-center">
            <img
              src="/matthew.png"
              alt="Matthew Jacob"
              className="w-full max-w-md h-[420px] rounded-3xl object-cover"
            />

            <h1 className="font-serif text-5xl text-teal mt-8">
              Matthew Jacob
            </h1>
          </div>

          {/* Right text column */}
          <div className="flex justify-center">
            <p className="font-serif text-large md:text-large text-teal leading-relaxed text-center max-w-xl">
              From learning about the causes of aging-related diseases like
              Alzheimer&apos;s and Dementia, to investigating the various forms
              of caregiving, Matthew never stops wanting to learn about the
              complexity of aging. He is extremely passionate about finding new
              ways to improve the lives of senior citizens and communities.
              Matthew hopes to pursue a career in gerontology and wishes to
              serve the elderly throughout his life.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}