export default function About() {
  return (
    <main className="bg-cream min-h-[calc(100vh-160px)]">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="flex flex-col items-center w-full">
            <img
              src="/matthew.png"
              alt="Matthew Jacob"
              className="w-full max-w-md h-auto min-h-[280px] sm:min-h-[360px] md:h-[420px] rounded-3xl object-cover"
            />

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-teal mt-6 sm:mt-8 text-center">
              Matthew Jacob
            </h1>
          </div>

          <div className="flex justify-center w-full">
            <p className="font-serif text-lg md:text-xl text-teal leading-relaxed text-center max-w-xl">
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
