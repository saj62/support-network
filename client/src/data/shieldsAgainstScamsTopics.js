/*
  Shields Against Scams toolkit topics.

  Thumbnails are served from client/public/shields_against_scams/ via
  root-relative paths. If thumbnail is empty/null, the card falls back
  to the temporary icon/gradient placeholder.

  objectPosition controls CSS object-position for object-cover crops.
  Adjust per image as needed, e.g.:
    "center center" | "center 35%" | "left center" | "70% center"

  Downloadable PDFs go under:
    client/public/shields_against_scams/documents/<topic-slug>/
  Preview images go under:
    client/public/shields_against_scams/documents/<topic-slug>/previews/

  Add a new resource by inserting another object into that topic's
  documents array. previewImage is optional — when omitted, page 1 of
  the PDF is rendered automatically. A manual previewImage still overrides
  the generated preview when provided.
*/

const shieldsAgainstScamsTopics = [
  {
    id: "common-scams",
    title: "Common Scams to Look for",
    slug: "common-scams",
    path: "/shields-against-scams/common-scams",
    icon: "warning",
    thumbnail: "/shields_against_scams/thumbnails/common-scams.jpg",
    objectPosition: "center center",
    ariaLabel: "View resources for Common Scams to Look for",
    documents: [
      {
        id: "common-scams-to-look-for",
        title: "Common Scams to Look for",
        filePath:
          "/shields_against_scams/documents/common-scams/common-scams-to-look-for.pdf",
        fileType: "PDF",
        ariaLabel: "Open Common Scams to Look for PDF",
      },
      {
        id: "checklist-to-watch-for-common-scams",
        title: "Checklist to Watch for Common Scams",
        filePath:
          "/shields_against_scams/documents/common-scams/checklist-to-watch-for-common-scams.pdf",
        fileType: "PDF",
        ariaLabel: "Open Checklist to Watch for Common Scams PDF",
      },
      {
        id: "what-to-do-if-you-have-been-scammed",
        title: "What to Do if You Think You Have Been Scammed",
        filePath:
          "/shields_against_scams/documents/common-scams/what-to-do-if-you-have-been-scammed.pdf",
        fileType: "PDF",
        ariaLabel:
          "Open What to Do if You Think You Have Been Scammed PDF",
      },
    ],
  },
  {
    id: "reporting-resources",
    title: "Reporting Resources",
    slug: "reporting-resources",
    path: "/shields-against-scams/reporting-resources",
    icon: "megaphone",
    thumbnail: "/shields_against_scams/thumbnails/reporting-resources.jpg",
    objectPosition: "center center",
    ariaLabel: "View resources for Reporting Resources",
    documents: [],
  },
  {
    id: "financial-safety-planning",
    title: "Financial Safety Planning Worksheets",
    slug: "financial-safety-planning",
    path: "/shields-against-scams/financial-safety-planning",
    icon: "clipboard",
    thumbnail: "/shields_against_scams/thumbnails/financial-safety-planning.jpg",
    objectPosition: "center center",
    ariaLabel: "View resources for Financial Safety Planning Worksheets",
    documents: [],
  },
  {
    id: "password-safety",
    title: "Password Safety Tips",
    slug: "password-safety",
    path: "/shields-against-scams/password-safety",
    icon: "lock",
    thumbnail: "/shields_against_scams/thumbnails/password-safety.jpg",
    objectPosition: "center 35%",
    ariaLabel: "View resources for Password Safety Tips",
    documents: [],
  },
  {
    id: "building-safe-habits",
    title: "Building Safe Habits",
    slug: "building-safe-habits",
    path: "/shields-against-scams/building-safe-habits",
    icon: "shield",
    thumbnail: "/shields_against_scams/thumbnails/building-safe-habits.jpeg",
    objectPosition: "center 65%",
    ariaLabel: "View resources for Building Safe Habits",
    documents: [],
  },
  {
    id: "emergency-contact-sheets",
    title: "Emergency Contact Sheets",
    slug: "emergency-contact-sheets",
    path: "/shields-against-scams/emergency-contact-sheets",
    icon: "contacts",
    thumbnail: "/shields_against_scams/thumbnails/emergency-contact-sheets.jpg",
    objectPosition: "center center",
    ariaLabel: "View resources for Emergency Contact Sheets",
    documents: [],
  },
];

export function getShieldsTopicBySlug(slug) {
  return shieldsAgainstScamsTopics.find((topic) => topic.slug === slug) ?? null;
}

export default shieldsAgainstScamsTopics;
