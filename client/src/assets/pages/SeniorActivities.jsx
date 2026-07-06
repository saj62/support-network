import { Link } from "react-router-dom";
import seniorActivities from "../../data/seniorActivities.json";

export default function SeniorActivities() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <div className="max-w-5xl">
        <p className="text-[#1F4E4A] text-base sm:text-lg leading-relaxed">
          Our activity pages discuss some of the activities that we have
          implemented into local elder communities. These pages talk about what
          we used to prepare the activities and what we learned from our
          experience.
        </p>
        <p className="mt-4 sm:mt-6 text-[#1F4E4A] text-base sm:text-lg leading-relaxed">
          The following activity pages not only provide ideas for activities to
          incorporate in senior living communities, but they also talk about my
          experiences implementing them: how I created them, how the residents
          reacted, and what I would do differently.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
        {seniorActivities.map((activity) => (
          <Link
            key={activity.id}
            to={`/senior-activities/${activity.id}`}
            className="h-full flex flex-col text-left bg-white rounded-3xl overflow-hidden border border-[#1F4E4A]/25 shadow-sm hover:shadow-md hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F6F1E6] transition"
            aria-label={`View details for ${activity.title}`}
          >
            <div className="h-48 bg-[#EDE7D3] overflow-hidden">
              {activity.thumbnail ? (
                <img
                  src={activity.thumbnail}
                  alt={`${activity.title} activity`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center px-6 text-center text-[#1F4E4A]/70">
                  Activity image coming soon
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <h2 className="font-serif text-lg font-bold text-teal mb-3">
                {activity.title}
              </h2>

              <p className="text-[#1F4E4A] text-md leading-relaxed flex-1">
                {activity.shortDescription}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-[#1F4E4A] font-semibold">
                View activity <span aria-hidden>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
