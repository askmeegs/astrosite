// Site-wide configuration for SEO, sitemap and other global settings
export const siteConfig = {
  // Basic site info
  title: "Megan O'Keefe",
  description: "my site",
  siteUrl: "https://yoursite.com", // Replace with your actual site URL
  language: "en-US",
  locale: "en_US",
  
  // Author info
  author: {
    name: "Wholesome Dev",
    email: "hello@wholesomedev.com", // Replace with your actual email
    twitter: "@wholesomedev", // Replace with your actual Twitter handle
  },
  
  // SEO
  keywords: [
    "developer", 
    "portfolio", 
    "web development", 
    "programming", 
    "coding", 
    "javascript", 
    "react", 
    "nodejs", 
    "astro", 
    "tailwind"
  ],
  
  // Default Open Graph image (social sharing)
  ogImage: "/og-image.png",
  
  // RSS Feed
  rss: {
    title: "Wholesome Dev Blog",
    description: "A wholesome developer blog with fun programming tips and tricks",
    feedPath: "/rss.xml"
  },
  
  // Sitemap
  sitemap: {
    enabled: true,
    changefreq: "weekly",
    priority: 0.7
  },
  
  // Robots.txt
  robots: {
    allowAll: true,
    disallowPaths: [
      // Add paths you don't want indexed
      // "/admin",
      // "/private"
    ],
    sitemapPath: "/sitemap-index.xml"
  },
  // SEO defaults for each page
  pageSeoDefaults: {
    home: {
      title: "Wholesome Dev - Fun Portfolio Template",
      description: "A wholesome developer portfolio template with fun animations and modern design",
      ogType: "website",
      priority: 1.0
    },
    about: {
      title: "About Wholesome Dev",
      description: "Learn more about the wholesome developer behind this fun portfolio",
      ogType: "website",
      priority: 0.8
    },
    blog: {
      title: "Wholesome Dev Blog",
      description: "Fun programming tips, tutorials and wholesome tech content",
      ogType: "website",
      priority: 0.9
    },
    projects: {
      title: "Projects by Wholesome Dev",
      description: "Explore creative and wholesome projects developed with care and fun",
      ogType: "website",
      priority: 0.8
    },
    contact: {
      title: "Contact Wholesome Dev",
      description: "Get in touch with the wholesome developer for collaboration or questions",
      ogType: "website",
      priority: 0.6
    },
    "404": {
      title: "Page Not Found - Wholesome Dev",
      description: "Oops! The page you're looking for doesn't exist.",
      ogType: "website",
      priority: 0.5
    }
  }
};
// Page-specific SEO defaults - can be overridden per page
export const pageSeoDefaults = {
  home: {
    title: "Wholesome Dev - Fun Portfolio Template",
    description: "A wholesome developer portfolio template with fun animations and modern design",
    ogType: "website",
    priority: 1.0
  },
  about: {
    title: "About Wholesome Dev",
    description: "Learn more about the wholesome developer behind this fun portfolio",
    ogType: "website",
    priority: 0.8
  },
  blog: {
    title: "Wholesome Dev Blog",
    description: "Fun programming tips, tutorials and wholesome tech content",
    ogType: "website",
    priority: 0.9
  },
  blogPost: {
    ogType: "article",
    priority: 0.7
  },
  projects: {
    title: "Projects by Wholesome Dev",
    description: "Explore creative and wholesome projects developed with care and fun",
    ogType: "website",
    priority: 0.8
  },
  contact: {
    title: "Contact Wholesome Dev",
    description: "Get in touch with the wholesome developer for collaboration or questions",
    ogType: "website",
    priority: 0.6
  }
}; 
