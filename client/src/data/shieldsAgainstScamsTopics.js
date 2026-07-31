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
    documents: [
      {
        id: "caregiver-reporting-guide",
        title: "Caregiver Reporting Guide",
        filePath:
          "/shields_against_scams/documents/reporting-resources/caregiver-reporting-guide.pdf",
        fileType: "PDF",
        ariaLabel: "Open Caregiver Reporting Guide PDF",
      },
      {
        id: "evidence-collection-worksheet",
        title: "Evidence Collection Worksheet",
        filePath:
          "/shields_against_scams/documents/reporting-resources/evidence-collection-worksheet.pdf",
        fileType: "PDF",
        ariaLabel: "Open Evidence Collection Worksheet PDF",
      },
      {
        id: "scam-incident-report-worksheet",
        title: "Scam Incident Report Worksheet",
        filePath:
          "/shields_against_scams/documents/reporting-resources/scam-incident-report-worksheet.pdf",
        fileType: "PDF",
        ariaLabel: "Open Scam Incident Report Worksheet PDF",
      },
      {
        id: "scam-reporting-directory",
        title: "Scam Reporting Directory",
        filePath:
          "/shields_against_scams/documents/reporting-resources/scam-reporting-directory.pdf",
        fileType: "PDF",
        ariaLabel: "Open Scam Reporting Directory PDF",
      },
    ],
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
    documents: [
      {
        id: "financial-fraud-recovery-checklist",
        title: "Financial Fraud Recovery Checklist",
        filePath:
          "/shields_against_scams/documents/financial-safety-planning/financial-fraud-recovery-checklist.pdf",
        fileType: "PDF",
        ariaLabel: "Open Financial Fraud Recovery Checklist PDF",
      },
      {
        id: "financial-safety-planning-worksheet",
        title: "Financial Safety Planning Worksheet",
        filePath:
          "/shields_against_scams/documents/financial-safety-planning/financial-safety-planning-worksheet.pdf",
        fileType: "PDF",
        ariaLabel: "Open Financial Safety Planning Worksheet PDF",
      },
      {
        id: "monthly-financial-review-checklist",
        title: "Monthly Financial Review Checklist",
        filePath:
          "/shields_against_scams/documents/financial-safety-planning/monthly-financial-review-checklist.pdf",
        fileType: "PDF",
        ariaLabel: "Open Monthly Financial Review Checklist PDF",
      },
      {
        id: "trusted-contact-information-worksheet",
        title: "Trusted Contact Information Worksheet",
        filePath:
          "/shields_against_scams/documents/financial-safety-planning/trusted-contact-information-worksheet.pdf",
        fileType: "PDF",
        ariaLabel: "Open Trusted Contact Information Worksheet PDF",
      },
    ],
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
    documents: [
      {
        id: "password-manager-overview",
        title: "Password Manager Overview",
        filePath:
          "/shields_against_scams/documents/password-safety/password-manager-overview.pdf",
        fileType: "PDF",
        ariaLabel: "Open Password Manager Overview PDF",
      },
      {
        id: "password-safety-guide",
        title: "Password Safety Guide",
        filePath:
          "/shields_against_scams/documents/password-safety/password-safety-guide.pdf",
        fileType: "PDF",
        ariaLabel: "Open Password Safety Guide PDF",
      },
      {
        id: "strong-password-planning-worksheet",
        title: "Strong Password Planning Worksheet",
        filePath:
          "/shields_against_scams/documents/password-safety/strong-password-planning-worksheet.pdf",
        fileType: "PDF",
        ariaLabel: "Open Strong Password Planning Worksheet PDF",
      },
      {
        id: "two-factor-authentication-overview",
        title: "Two-Factor Authentication Overview",
        filePath:
          "/shields_against_scams/documents/password-safety/two-factor-authentication-overview.pdf",
        fileType: "PDF",
        ariaLabel: "Open Two-Factor Authentication Overview PDF",
      },
    ],
  },
  {
    id: "building-safe-habits",
    title: "Building Safe Habits",
    slug: "building-safe-habits",
    path: "/shields-against-scams/building-safe-habits",
    icon: "shield",
    thumbnail: "/shields_against_scams/thumbnails/building-safe-habits.jpeg",
    objectPosition: "center 70%",
    ariaLabel: "View resources for Building Safe Habits",
    documents: [
      {
        id: "monthly-scam-prevention-checklist",
        title: "Monthly Scam Prevention Checklist",
        filePath:
          "/shields_against_scams/documents/building-safe-habits/monthly-scam-prevention-checklist.pdf",
        fileType: "PDF",
        ariaLabel: "Open Monthly Scam Prevention Checklist PDF",
      },
      {
        id: "recognizing-social-engineering",
        title: "Recognizing Social Engineering",
        filePath:
          "/shields_against_scams/documents/building-safe-habits/recognizing-social-engineering.pdf",
        fileType: "PDF",
        ariaLabel: "Open Recognizing Social Engineering PDF",
      },
      {
        id: "stop-verify-ask",
        title: "Stop, Verify, Ask",
        filePath:
          "/shields_against_scams/documents/building-safe-habits/stop-verify-ask.pdf",
        fileType: "PDF",
        ariaLabel: "Open Stop, Verify, Ask PDF",
      },
    ],
  },
  {
    id: "recovery-and-future-protection",
    title: "Recovery and Future Protection",
    slug: "recovery-and-future-protection",
    path: "/shields-against-scams/recovery-and-future-protection",
    icon: "contacts",
    thumbnail: "/shields_against_scams/thumbnails/recovery-and-future-protection.jpg",
    objectPosition: "center center",
    ariaLabel: "View resources for Recovery and Future Protection",
    documents: [
      {
        id: "identity-theft-recovery-guide",
        title: "Identity Theft Recovery Guide",
        filePath:
          "/shields_against_scams/documents/recovery-and-future-protection/identity-theft-recovery-guide.pdf",
        fileType: "PDF",
        ariaLabel: "Open Identity Theft Recovery Guide PDF",
      },
      {
        id: "emotional-recovery-after-a-scam",
        title: "Emotional Recovery After a Scam",
        filePath:
          "/shields_against_scams/documents/recovery-and-future-protection/emotional-recovery-after-a-scam.pdf",
        fileType: "PDF",
        ariaLabel: "Open Emotional Recovery After a Scam PDF",
      },
      {
        id: "credit-protection-guide",
        title: "Credit Protection Guide",
        filePath:
          "/shields_against_scams/documents/recovery-and-future-protection/credit-protection-guide.pdf",
        fileType: "PDF",
        ariaLabel: "Open Credit Protection Guide PDF",
      },
    ],
  },
];

export function getShieldsTopicBySlug(slug) {
  return shieldsAgainstScamsTopics.find((topic) => topic.slug === slug) ?? null;
}

export default shieldsAgainstScamsTopics;
