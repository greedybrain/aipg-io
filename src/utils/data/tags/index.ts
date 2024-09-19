export const tagsData = [
  {
    category: "Aggregators",
    tags: ["AI Tool Aggregation", "Content Aggregation", "News Aggregation"],
  },
  {
    category: "Assistant",
    tags: ["Writing Assistant", "Coding Assistant", "Personal Assistant"],
  },
  {
    category: "Avatar",
    tags: [
      "3D Avatars",
      "Animated Avatars",
      "Realistic Avatars",
      "Professional Avatars",
    ],
  },
  {
    category: "Chat",
    tags: ["Chatbots", "Live Chat", "Customer Support"],
  },
  {
    category: "Copywriting",
    tags: ["Sales", "SEO", "Creative"],
  },
  {
    category: "Education",
    tags: ["E-Learning", "Educational Tools", "Tutoring Assistance"],
  },
  {
    category: "Finance",
    tags: ["Personal Finance", "Investing", "Cryptocurrency"],
  },
  {
    category: "Gaming",
    tags: ["Game Development", "AI in Gaming", "Game Asset Creation"],
  },
  {
    category: "Generative",
    tags: ["Generative Art", "Generative Code", "Generative Media"],
  },
  {
    category: "Image Processing",
    tags: ["Image Editing", "Image Scanning"],
  },
  {
    category: "Legal & Complicance",
    tags: ["Legal Research", "HumanResources"],
  },
  {
    category: "Marketing & Content",
    tags: ["Social Media Marketing", "Email Marketing", "Content Marketing"],
  },
  {
    category: "Music",
    tags: ["Music Creation", "Music Editing", "Music Mixing"],
  },
  {
    category: "Podcasting",
    tags: ["Podcast Recording", "Podcast Editing", "Podcast Distribution"],
  },
  {
    category: "Prompt Guides",
    tags: ["Prompt Engineering"],
  },
  {
    category: "Research",
    tags: ["Academic Research", "Market Research"],
  },
  {
    category: "Self Improvement",
    tags: ["Productivity", "Health"],
  },
  {
    category: "Social Media",
    tags: ["Social Media Management", "Content Creation"],
  },
  {
    category: "Translation",
    tags: ["Language Translation", "Document Translation"],
  },
  {
    category: "Video Editing",
    tags: ["Basic Video Editing", "Animation"],
  },
  {
    category: "Web Scraping",
    tags: ["Data Extraction"],
  },
];

export const tagCategories = tagsData.map((tagObj) => tagObj.category);
export const tagNames = tagsData.reduce(
  (acc: string[], { tags }) => [...acc, ...tags],
  [],
);
