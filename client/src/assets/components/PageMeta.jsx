import { useLayoutEffect } from "react";

function findMeta(attribute, key) {
  return [...document.head.querySelectorAll(`meta[${attribute}]`)].find(
    (element) => element.getAttribute(attribute) === key
  );
}

function upsertMeta(attribute, key, content) {
  if (content == null || content === "") return;

  let element = findMeta(attribute, key);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;

  let element = [...document.head.querySelectorAll("link[rel]")].find(
    (link) => link.getAttribute("rel") === rel
  );

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function ensureSingleTitle(title) {
  const titles = [...document.head.querySelectorAll("title")];

  if (titles.length === 0) {
    const titleElement = document.createElement("title");
    titleElement.textContent = title;
    document.head.appendChild(titleElement);
    return;
  }

  titles[0].textContent = title;
  titles.slice(1).forEach((extra) => extra.remove());
}

/**
 * Updates document head in place so React 19 does not hoist duplicate
 * <title>/<meta> tags beside the static tags in index.html.
 * Never touches application/ld+json scripts.
 */
export default function PageMeta({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = "website",
  ogSiteName = "Geriatrics Support Network",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
}) {
  useLayoutEffect(() => {
    if (title) {
      ensureSingleTitle(title);
    }

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);

    upsertMeta("property", "og:site_name", ogSiteName);
    upsertMeta("property", "og:title", ogTitle ?? title);
    upsertMeta("property", "og:description", ogDescription ?? description);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:url", ogUrl);
    upsertMeta("property", "og:type", ogType);

    upsertMeta("name", "twitter:card", twitterCard);
    upsertMeta("name", "twitter:title", twitterTitle ?? ogTitle ?? title);
    upsertMeta(
      "name",
      "twitter:description",
      twitterDescription ?? ogDescription ?? description
    );
    upsertMeta("name", "twitter:image", twitterImage ?? ogImage);

    upsertLink("canonical", canonical);
  }, [
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogType,
    ogSiteName,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
  ]);

  return null;
}
