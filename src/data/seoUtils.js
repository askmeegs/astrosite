import { siteConfig } from './siteConfig';

/**
 * Generate structured JSON-LD data for SEO
 * @param {Object} options - Options for the structured data
 * @returns {string} - JSON-LD data as string
 */
export function generateJsonLd(options = {}) {
  const defaultOptions = {
    type: 'WebSite',
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    author: siteConfig.author.name,
  };

  const opts = { ...defaultOptions, ...options };

  // Base schema
  let schema = {
    '@context': 'https://schema.org',
    '@type': opts.type,
    'name': opts.title,
    'description': opts.description,
    'url': opts.url,
  };

  // Add different properties based on type
  if (opts.type === 'WebSite') {
    schema.potentialAction = {
      '@type': 'SearchAction',
      'target': `${opts.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    };
  } else if (opts.type === 'Article' || opts.type === 'BlogPosting') {
    schema = {
      ...schema,
      'headline': opts.title,
      'image': opts.image,
      'datePublished': opts.datePublished || new Date().toISOString(),
      'dateModified': opts.dateModified || opts.datePublished || new Date().toISOString(),
      'author': {
        '@type': 'Person',
        'name': opts.author,
      },
      'publisher': {
        '@type': 'Organization',
        'name': siteConfig.title,
        'logo': {
          '@type': 'ImageObject',
          'url': `${siteConfig.siteUrl}/logo.png`,
        }
      }
    };
  } else if (opts.type === 'Person') {
    schema = {
      ...schema,
      'image': opts.image,
      'email': siteConfig.author.email,
      'sameAs': [
        `https://twitter.com/${siteConfig.author.twitter}`,
        // Add other social profiles as needed
      ]
    };
  }

  return JSON.stringify(schema);
}

/**
 * Generate canonical URL
 * @param {string} path - Page path 
 * @returns {string} - Full canonical URL
 */
export function getCanonicalUrl(path) {
  return `${siteConfig.siteUrl}${path === '/' ? '' : path}`;
}

/**
 * Get page-specific SEO data with defaults
 * @param {string} pageType - Type of page (home, about, blog, etc.)
 * @param {Object} customData - Custom data to override defaults
 * @returns {Object} - Combined SEO data
 */
export function getPageSeo(pageType, customData = {}) {
  const defaults = pageType in siteConfig.pageSeoDefaults 
    ? siteConfig.pageSeoDefaults[pageType] 
    : {};
  
  return {
    ...defaults,
    ...customData
  };
} 
