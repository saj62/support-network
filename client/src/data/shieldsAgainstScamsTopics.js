/*
  Shields Against Scams toolkit topics.

  Thumbnails are served from client/public/shields_against_scams/ via
  root-relative paths. If thumbnail is empty/null, the card falls back
  to the temporary icon/gradient placeholder.

  objectPosition controls CSS object-position for object-cover crops.
  Adjust per image as needed, e.g.:
    "center center" | "center 35%" | "left center" | "70% center"

  Downloadable resources for each section will be added on the topic pages later.
*/

const shieldsAgainstScamsTopics = [
  {
    id: "common-scams",
    title: "Common Scams to Look for",
    slug: "common-scams",
    path: "/shields-against-scams/common-scams",
    icon: "warning",
    thumbnail: "/shields_against_scams/common-scams.jpg",
    objectPosition: "center center",
    ariaLabel: "View resources for Common Scams to Look for",
  },
  {
    id: "reporting-resources",
    title: "Reporting Resources",
    slug: "reporting-resources",
    path: "/shields-against-scams/reporting-resources",
    icon: "megaphone",
    thumbnail: "/shields_against_scams/reporting-resources.jpg",
    objectPosition: "center center",
    ariaLabel: "View resources for Reporting Resources",
  },
  {
    id: "financial-safety-planning",
    title: "Financial Safety Planning Worksheets",
    slug: "financial-safety-planning",
    path: "/shields-against-scams/financial-safety-planning",
    icon: "clipboard",
    thumbnail: "/shields_against_scams/financial-safety-planning.jpg",
    objectPosition: "center center",
    ariaLabel: "View resources for Financial Safety Planning Worksheets",
  },
  {
    id: "password-safety",
    title: "Password Safety Tips",
    slug: "password-safety",
    path: "/shields-against-scams/password-safety",
    icon: "lock",
    thumbnail: "/shields_against_scams/password-safety.jpg",
    objectPosition: "center 35%",
    ariaLabel: "View resources for Password Safety Tips",
  },
  {
    id: "building-safe-habits",
    title: "Building Safe Habits",
    slug: "building-safe-habits",
    path: "/shields-against-scams/building-safe-habits",
    icon: "shield",
    thumbnail: "/shields_against_scams/building-safe-habits.jpeg",
    objectPosition: "center 65%",
    ariaLabel: "View resources for Building Safe Habits",
  },
  {
    id: "emergency-contact-sheets",
    title: "Emergency Contact Sheets",
    slug: "emergency-contact-sheets",
    path: "/shields-against-scams/emergency-contact-sheets",
    icon: "contacts",
    thumbnail: "/shields_against_scams/emergency-contact-sheets.jpg",
    objectPosition: "center center",
    ariaLabel: "View resources for Emergency Contact Sheets",
  },
];

export function getShieldsTopicBySlug(slug) {
  return shieldsAgainstScamsTopics.find((topic) => topic.slug === slug) ?? null;
}

export default shieldsAgainstScamsTopics;
