import { siteConfig } from '../data/siteConfig';

export async function GET() {
  let robotsContent = '';
  
  // User agent settings
  robotsContent += 'User-agent: *\n';
  
  // Allow or disallow based on configuration
  if (siteConfig.robots.allowAll) {
    robotsContent += 'Allow: /\n';
  } else {
    robotsContent += 'Disallow: /\n';
  }
  
  // Add specific disallowed paths
  if (siteConfig.robots.disallowPaths && siteConfig.robots.disallowPaths.length > 0) {
    robotsContent += '\n# Disallowed paths\n';
    siteConfig.robots.disallowPaths.forEach(path => {
      robotsContent += `Disallow: ${path}\n`;
    });
  }
  
  // Add sitemap
  if (siteConfig.sitemap.enabled) {
    robotsContent += `\nSitemap: ${siteConfig.siteUrl}${siteConfig.robots.sitemapPath}\n`;
  }
  
  return new Response(robotsContent, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
} 
