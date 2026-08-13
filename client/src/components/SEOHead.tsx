import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalPath?: string;
}

const BASE_URL = 'https://hhelemouth.github.io/hh-design-portfolio';
const DEFAULT_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/portrait_060f4807.jpg';

function setMeta(property: string, content: string, useProperty = false) {
  const attr = useProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SEOHead({ title, description, ogImage, canonicalPath = '/' }: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Helena Hadjitournos, Product Designer`
      : 'Helena Hadjitournos, Product Designer UX/UI, Région nantaise';

    const fullDescription = description ||
      'Portfolio de Helena Hadjitournos, Product Designer UX/UI en région nantaise. Spécialisée en discovery, design system et conception de produits digitaux B2B et B2C.';

    const fullUrl = `${BASE_URL}${canonicalPath}`;
    const image = ogImage || DEFAULT_IMAGE;

    // Title
    document.title = fullTitle;

    // Meta description
    setMeta('description', fullDescription);

    // Canonical
    setLink('canonical', fullUrl);

    // Open Graph
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', fullDescription, true);
    setMeta('og:url', fullUrl, true);
    setMeta('og:image', image, true);
    setMeta('og:type', 'website', true);

    // Twitter
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', fullDescription);
    setMeta('twitter:image', image);
  }, [title, description, ogImage, canonicalPath]);

  return null;
}
