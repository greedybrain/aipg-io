export const tagsData = [
    {
        category: "Aggregators",
        tags: ["AI Aggregators", "Content Curation", "News Aggregators"],
    },
    {
        category: "Assistant Tools",
        tags: [
            "Writing Assistants",
            "Coding Assistants",
            "Personal Assistants",
        ],
    },
    {
        category: "Avatar Creation",
        tags: [
            "3D Avatars",
            "Animated Avatars",
            "Realistic Avatars",
            "Pro Avatars",
        ],
    },
    {
        category: "Chatbots",
        tags: ["Chatbots", "Live Chat", "Customer Support"],
    },
    {
        category: "Copywriting",
        tags: ["Sales Copy", "SEO Writing", "Creative Writing"],
    },
    {
        category: "Education",
        tags: ["E-Learning", "Edu Tools", "Tutoring"],
    },
    {
        category: "Finance",
        tags: ["Personal Finance", "Investments", "Cryptocurrency"],
    },
    {
        category: "Gaming",
        tags: ["Game Dev", "AI Games", "Game Assets"],
    },
    {
        category: "Generative AI",
        tags: ["AI Art", "Code Generation", "Media Synthesis"],
    },
    {
        category: "Image Processing",
        tags: ["Photo Editing", "Image Recognition", "Image Enhancement"],
    },
    {
        category: "Legal & Compliance",
        tags: ["Legal Research", "Compliance", "HR Tools"],
    },
    {
        category: "Marketing",
        tags: ["Social Marketing", "Email Marketing", "Content Strategy"],
    },
    {
        category: "Music Production",
        tags: ["Music Composition", "Audio Editing", "Sound Mixing"],
    },
    {
        category: "Podcasting",
        tags: ["Podcast Recording", "Podcast Editing", "Podcast Distribution"],
    },
    {
        category: "Prompt Engineering",
        tags: ["Prompt Design", "Prompt Optimization"],
    },
    {
        category: "Research Tools",
        tags: ["Academic Research", "Market Analysis"],
    },
    {
        category: "Self-Improvement",
        tags: ["Productivity", "Wellness", "Personal Growth"],
    },
    {
        category: "Social Media",
        tags: ["Content Scheduling", "Engagement Analytics"],
    },
    {
        category: "Translation",
        tags: ["Language Translation", "Document Translation"],
    },
    {
        category: "Video Production",
        tags: ["Video Editing", "Animation", "Motion Graphics"],
    },
    {
        category: "Web Scraping",
        tags: ["Data Extraction", "Web Scraping"],
    },
];

export const tagCategories = tagsData.map((tagObj) => tagObj.category);
export const tagNames = tagsData.reduce(
    (acc: string[], { tags }) => [...acc, ...tags],
    [],
);
