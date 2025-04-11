export const projects = [
  {
    id: "much-website",
    title: "Much Website",
    description: "Very responsive. Such design. Wow.",
    emoji: "🐕",
    tags: ["Frontend", "Responsive", "HTML/CSS"],
    longDescription: "A much responsive, very modern website for a local doge shelter. Features include adoption profiles, donation system, and virtual belly rubs.",
    year: "2023",
    image: "https://api.dicebear.com/7.x/identicon/svg?seed=much-website&backgroundColor=ffadad",
    features: [
      "Responsive doge profiles with automatic boop animations",
      "Donation system with treats tracker",
      "Virtual belly rub simulator with haptic feedback",
      "Bark-to-text translation for accessibility"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Sass", "Tailwind CSS"],
    challenges: "The biggest challenge was getting the belly rub physics just right. Turns out simulating fur is really hard!",
    outcome: "The local doge shelter saw adoption rates increase by 200% and virtual belly rubs exceeded 10,000 in the first month."
  },
  {
    id: "not-bug-feature",
    title: "Not Bug, Feature",
    description: "Making bugs into features since 2024",
    emoji: "🪲",
    tags: ["React", "Redux", "Typescript"],
    longDescription: "An app that automatically detects bugs in your code and convinces your product manager they're actually features. Includes realistic excuse generation.",
    year: "2024",
    image: "https://api.dicebear.com/7.x/identicon/svg?seed=not-bug&backgroundColor=bdb2ff",
    features: [
      "Bug-to-feature conversion algorithm with 99% manager satisfaction rate",
      "Automatic PR description generator with impressive-sounding jargon",
      "Excuse templates for various development scenarios",
      "Slack integration for immediate damage control"
    ],
    technologies: ["React", "Redux", "TypeScript", "Node.js", "OpenAI API"],
    challenges: "The hardest part was making the excuses believable enough for senior management but technical enough for lead developers.",
    outcome: "Several tech companies have secretly deployed this tool, resulting in 45% fewer emergency weekend fixes and 200% increase in 'planned features'."
  },
  {
    id: "stack-overflow-mvp",
    title: "Stack Overflow MVP",
    description: "I help devs. Because that's what heroes do.",
    emoji: "🦸‍♂️",
    tags: ["Backend", "API", "Node.js"],
    longDescription: "An AI assistant that automatically writes Stack Overflow answers for you, with configurable levels of condescension and unnecessary complexity.",
    year: "2023",
    image: "https://api.dicebear.com/7.x/identicon/svg?seed=stack-overflow&backgroundColor=caffbf",
    features: [
      "Condescension level slider (from 'helpful mentor' to 'actually, technically...')",
      "Automatic detection of duplicate questions from 2011",
      "Unnecessary complexity generator for simple problems",
      "Pre-emptive 'What have you tried?' response system"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "NLP", "Machine Learning"],
    challenges: "Finding the perfect balance of helpfulness and condescension was tricky. Too helpful and it doesn't feel authentic.",
    outcome: "Users report saving hours of typing detailed answers, and junior developers can't tell the difference between the AI and real Stack Overflow users."
  },
  {
    id: "keyboard-warrior",
    title: "Keyboard Warrior",
    description: "Fight bugs with finger speed and RGB lighting.",
    emoji: "⌨️",
    tags: ["Game", "JavaScript", "Canvas"],
    longDescription: "A browser-based typing game where you defeat coding bugs by typing correct syntax. Features include vim mode and a mechanical keyboard sound generator.",
    year: "2022",
    image: "https://api.dicebear.com/7.x/identicon/svg?seed=keyboard-warrior&backgroundColor=fdffb6",
    features: [
      "Multiple language support including JavaScript, Python, and CSS",
      "Vim mode for hardcore players",
      "Mechanical keyboard sound effects with customizable switch types",
      "Boss fights against infamous bugs like 'Undefined is not a function'"
    ],
    technologies: ["JavaScript", "Canvas API", "Web Audio API", "Local Storage"],
    challenges: "Recording and implementing different mechanical keyboard sounds was surprisingly complex. We ended up sampling 15 different keyboards.",
    outcome: "The game has been adopted by several coding bootcamps as a typing practice tool, and has helped improve student typing speeds by an average of 20 WPM."
  },
  {
    id: "git-gud",
    title: "Git Gud",
    description: "Learning Git commands through memes and puzzles.",
    emoji: "🌳",
    tags: ["Education", "Git", "Vue"],
    longDescription: "An interactive tutorial that teaches Git through memes, puzzles, and real-world scenarios. Learn to rebase without crying!",
    year: "2023",
    image: "https://api.dicebear.com/7.x/identicon/svg?seed=git-gud&backgroundColor=a0c4ff",
    features: [
      "Interactive visualization of Git tree operations",
      "Meme-based error messages that actually explain what went wrong",
      "Realistic scenarios like 'Panic! The Demo is in 5 Minutes'",
      "Achievement system with shareable badges"
    ],
    technologies: ["Vue.js", "D3.js", "Git API", "Firebase"],
    challenges: "Creating visualizations that were both accurate and understandable was difficult. Many Git concepts are abstract and complex.",
    outcome: "Over 10,000 developers have completed the course, and we've received messages that users finally understand rebasing and no longer fear merge conflicts."
  },
  {
    id: "code-potato",
    title: "Code Potato",
    description: "Turn your code into a digital potato. Why? Why not!",
    emoji: "🥔",
    tags: ["Fun", "JavaScript", "API"],
    longDescription: "A web service that converts any GitHub repository into a digital potato. The more bugs your code has, the more eyes your potato grows.",
    year: "2022",
    image: "https://api.dicebear.com/7.x/identicon/svg?seed=code-potato&backgroundColor=ffc6ff",
    features: [
      "GitHub integration for automatic code analysis",
      "Dynamic potato generation based on code quality",
      "Potato accessories unlocked by fixing bugs",
      "Team potato garden for collaborative projects"
    ],
    technologies: ["JavaScript", "GitHub API", "SVG animation", "Express.js"],
    challenges: "Determining what constitutes a 'bug' across different languages required creating custom linting rules and heuristics.",
    outcome: "While completely useless, Code Potato has been integrated into several teams' CI/CD pipelines as a fun way to visualize code quality improvement."
  }
];

// Helper function to get homepage featured projects (first 3)
export function getFeaturedProjects() {
  return projects.slice(0, 3).map(({ title, description, emoji }) => ({
    title,
    description,
    emoji
  }));
} 
