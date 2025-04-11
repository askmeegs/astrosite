import rss from '@astrojs/rss';
import { marked } from 'marked';
import fs from 'node:fs';
import path from 'node:path';
import { siteConfig } from '../data/siteConfig';

export async function GET(context) {
  // Instead of content collections, we'll read the blog markdown files directly
  const blogDir = path.join(process.cwd(), 'src/blogs');
  const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
  
  const items = await Promise.all(
    blogFiles.map(async (file) => {
      const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
      const slug = file.replace('.md', '');
      
      // Parse frontmatter
      const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
      const frontmatterMatch = content.match(frontmatterRegex);
      const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';
      
      // Extract title, date, and description from frontmatter
      const titleMatch = frontmatter.match(/title:\s*["']?(.*?)["']?\s*(?:\n|$)/);
      const dateMatch = frontmatter.match(/date:\s*["']?(.*?)["']?\s*(?:\n|$)/);
      const descriptionMatch = frontmatter.match(/description:\s*["']?(.*?)["']?\s*(?:\n|$)/);
      
      const title = titleMatch ? titleMatch[1] : slug;
      const pubDate = dateMatch ? new Date(dateMatch[1]) : new Date();
      const description = descriptionMatch ? descriptionMatch[1] : '';
      
      // Extract content outside of frontmatter
      const contentWithoutFrontmatter = content.replace(frontmatterRegex, '').trim();
      
      // Convert markdown to HTML
      const html = marked.parse(contentWithoutFrontmatter);
      
      return {
        title,
        pubDate,
        description,
        link: `/blog/${slug}`,
        content: html
      };
    })
  );
  
  return rss({
    title: siteConfig.rss.title,
    description: siteConfig.rss.description,
    site: context.site || siteConfig.siteUrl,
    items,
    customData: `<language>${siteConfig.language}</language>`,
  });
} 
