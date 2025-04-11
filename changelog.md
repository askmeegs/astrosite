# Changelog: Portfolio Website Updates

## Most Recent Updates: Animation & UI Consistency Improvements

### Animation Consistency Update (May 2023)
- Standardized all animations across components to follow wholesome theme guidelines:
  - Adjusted all animations to use consistent easing functions (mostly ease-in-out)
  - Updated color palette to use softer pastel colors across all components
  - Fine-tuned animation timing for smoother transitions
  - Added animation theme documentation in CSS file
- Specific component updates:
  - MemeFollower: Reduced z-index, curated wholesome emojis, smoother cursor movement
  - MemeLoader: Added pulsate effect, updated loading messages, improved scaling
  - ConfettiButton: Updated to use pastel confetti colors and wholesome emojis
  - MemeToast: Redesigned with softer colors, gentler sounds, improved transitions
- Fixed TypeScript error in index.astro by properly typing toast parameters

### Enhanced Wholesome Meme Animations (April 2023)
- Added numerous animation effects:
  - Basic effects: jelly, glitch, flip, shake, slide-in, pop-in
  - Advanced effects: shooting-star, pulsate, bg-rainbow-hover
- Created interactive components:
  - ConfettiButton: Click to celebrate with confetti explosion
  - MemeLoader: Cute loading animation with rotating emojis
  - MemeToast: Toast notification system with sound effects
- Enhanced homepage with various animation effects and interactive buttons
- Created global type definitions for custom window functions

### Code Refactoring & Bug Fixes (March 2023)

#### Data Management Improvements
- Created centralized data file for projects at `src/data/projects.js`
- Fixed reference error in project detail page
- Updated all pages to use the shared data source:
  - src/pages/projects/[id].astro
  - src/pages/projects/index.astro
  - src/pages/index.astro
- Improved maintainability by eliminating data duplication
- Enhanced consistency across the website with standardized data

## Previous Updates: Wholesome Meme Animations

### Animation Enhancements
- Created dedicated animation stylesheet with wholesome meme-themed effects
- Added various interactive animations to website elements:
  - Bounce effect for emoji icons
  - Wiggle animations for interactive elements
  - Heartbeat effect for love emoji
  - Rainbow text effect for branding
  - Tada animations for achievements
  - Floating effects for light elements
- Implemented random floating doges that appear throughout the site
- Added shooting star animation for visual interest
- Created `MemeFollower` component that follows cursor with fun emoji effects
- Added emoji burst effect on click interactions
- Enhanced footer with animated elements

## Previous Updates: UI Improvements & Navigation

### Navigation Enhancement
- Created reusable Navbar component at `src/components/Navbar.astro`
- Added responsive navigation with mobile menu support
- Implemented visual indicators for active page links
- Used consistent wholesome styling with gradient backgrounds and emoji icons
- Updated Layout component to include Navbar and Footer for consistent site structure
- Improved overall user experience with better site navigation

## Previous Updates: About Me & Projects Pages

### 1. About Me Page
- Created `src/pages/about.astro` with detailed personal information
- Added sections:
  - Personal introduction with profile image
  - Timeline journey showcasing career path
  - Fun facts with playful emojis
  - Personal interests in a grid layout
  - Call-to-action section with links to other pages
- Implemented a visually appealing timeline with alternating layout

### 2. Projects List Page
- Created `src/pages/projects/index.astro` to display all projects
- Designed grid layout for project cards with:
  - Project image
  - Emoji indicator
  - Year badge
  - Title and description
  - Technology tags
- Added navigation links to home and about pages
- Maintained wholesome meme style throughout

### 3. Project Detail Pages
- Created dynamic route `src/pages/projects/[id].astro` for individual projects
- Implemented static path generation for all projects
- Added detailed sections:
  - Hero section with project image and overview
  - Features list with bullet points
  - Technologies used with badge styling
  - Challenge and outcome sections
  - Previous/next project navigation
- Included clear navigation between project pages

### 4. Homepage Updates
- Enhanced hero section with links to all main sections:
  - About Me button
  - Projects button
  - Blog button
- Added "View All Projects" button in projects section
- Styled buttons with gradient colors to create visual hierarchy
- Improved responsive layout for better mobile experience

## Previous Updates: Blog System Implementation

### 1. Blog Content Structure
- Created `src/blogs/` directory to store all blog posts in Markdown format
- Added three sample blog posts with wholesome meme theming:
  - "How to Write Code like a Doge"
  - "Why Kittens Make Better Software Testers"
  - "Rubber Duck Debugging: Much Quack, Such Fix!"
- Implemented frontmatter metadata for each post (title, date, description, image, tags)

### 2. Blog List Page
- Created `src/pages/blog/index.astro` to display all blog posts
- Implemented grid layout for blog post cards
- Added date formatting and tag display
- Maintained wholesome meme aesthetic with hover effects and Comic Neue font

### 3. Blog Detail Page
- Created dynamic route `src/pages/blog/[slug].astro` for individual blog posts
- Added dynamic page generation with static paths
- Styled markdown content to match portfolio's wholesome theme
- Implemented navigation between posts and back to home/blog list

### 4. Integration with Main Site
- Updated homepage to include:
  - "Read My Blog" button in hero section
  - New "Fresh Blog Posts" section showing 3 most recent posts
  - "View All Blog Posts" link to blog list page
- Maintained consistent design language across all pages

### 5. Dependencies
- Added `marked` package for Markdown parsing

## Technical Implementation
- Used Astro's file-based routing system
- Implemented dynamic content generation with `getStaticPaths`
- Created responsive layouts that work on mobile and desktop
- Added custom CSS for styling content
- Maintained consistent data patterns across all page types
- Centralized data management for improved maintainability

All pages maintain the "wholesome meme" aesthetic with:
- Comic Neue font
- Playful emoji usage
- Fun, positive language
- Cute animations and hover effects
- Rounded corners and soft shadows
