import { Course, ComparisonRow } from './types';

export const courses: Course[] = [
  {
    id: "business-ai-toolkit",
    number: "01",
    title: "Business AI Toolkit",
    tagline: "You've seen AI. Now make it work for you.",
    shortDescription: "Where AI is actually going. Not hype. Real tools. Real workflows. Agents, multimodal, automation.",
    targetAudience: [
      "Individuals wanting to level up",
      "Teams needing AI capability",
      "Tried ChatGPT but want more",
      "Curious about agents & automation"
    ],
    duration: "1 Day",
    tools: ["ChatGPT", "Claude", "Perplexity"],
    journey: {
      title: "See the Landscape",
      description: "Where AI is actually going. Not hype. Real tools. Real workflows. You'll finally see the full picture.",
      steps: [
        "Generate content with AI",
        "See an agent in action",
        "Build something you can use Monday"
      ]
    },
    outcomes: [
      "Knowing which AI tool for which job",
      "Confidence to experiment on your own",
      "A clear view of where to go deeper"
    ],
    forWho: {
      individuals: "AI won't wait. This is your starting point.",
      teams: "Your team already knows AI exists. This shows them what to do with it."
    },
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "multimodal-content",
    number: "02",
    title: "Multimodal AI for Content",
    tagline: "Your ideas. Made visible.",
    shortDescription: "Start with a concept. End with a complete content suite — visuals, video, audio.",
    targetAudience: [
      "Creators wanting to produce faster",
      "Marketing teams stretched thin",
      "SMEs who can't afford agencies",
      "Designers & Producers"
    ],
    duration: "3 Days (24 Hrs)",
    tools: ["Nano Banana Pro", "Kling", "Veo 3*"],
    journey: {
      title: "From Brief to Campaign",
      description: "You'll work like a creative agency. Except the agency is you + AI.",
      steps: [
        "Concept generation",
        "Visuals & Design generation",
        "Video & Audio production"
      ]
    },
    outcomes: [
      "A complete content campaign (not just pieces)",
      "UGC-style assets ready for social",
      "The creative workflow — repeatable after you leave",
      "Portfolio you can show clients"
    ],
    forWho: {
      individuals: "Stop waiting for designers. Start creating.",
      teams: "Your next campaign. Made in-house. With AI."
    },
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "ai-agent-workflows",
    number: "03",
    title: "Building AI Agent Workflows",
    tagline: "Build AI that works for you.",
    whyNow: "2025 was about using AI. 2026 is about building AI that runs on its own.",
    shortDescription: "From manual to automated. From asking AI to directing AI. No coding required.",
    targetAudience: [
      "Freelancers offering automation",
      "Teams drowning in manual processes",
      "Builders wanting deep agent skills",
      "No-code enthusiasts"
    ],
    duration: "3 Days (21 Hrs)",
    tools: ["Visual Builders", "Agent Frameworks", "Chatbot Platforms"],
    journey: {
      title: "From Zero to System",
      description: "Over 3 days, you'll go from zero to building real AI systems.",
      steps: [
        "Workflows: Connect apps, set triggers",
        "Agents: Build AI that reasons and decides",
        "Chatbots: Bots that know YOUR data"
      ]
    },
    outcomes: [
      "A working AI chatbot trained on your content",
      "Automated workflows for productivity",
      "Your own AI agent that reasons",
      "Skills to keep building"
    ],
    forWho: {
      individuals: "Stop doing repetitive work. Build AI that does it for you.",
      teams: "AI that knows your business. Built by your team. In 3 days."
    },
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "design-to-prototype",
    number: "04",
    title: "Design to Prototype",
    tagline: "Craft AI-Powered Apps with No-Code.",
    whyNow: "Everyone has an app idea. Almost no one builds it. That wall is gone.",
    shortDescription: "From idea to app. No code. Describe what you want, AI builds it.",
    targetAudience: [
      "Founders with ideas but no tech co-founder",
      "Product teams prototyping fast",
      "Freelancers adding prototyping services",
      "Career switchers to Product/UX"
    ],
    duration: "3 Days (21 Hrs)",
    tools: ["No-Code AI Tools", "Prototyping Suites"],
    journey: {
      title: "Ideas to Hands",
      description: "Go through the real product process — with AI doing the heavy lifting.",
      steps: [
        "Define: Clarify idea, user, problem",
        "Design: Screens, layouts, flows",
        "Build: AI generates, you tweak and refine"
      ]
    },
    outcomes: [
      "A clear product definition",
      "Designed screens — your app, visualized",
      "A working prototype — clickable, functional",
      "Something to show investors"
    ],
    forWho: {
      individuals: "You've had the idea for years. Now build it. In 3 days.",
      teams: "From concept to prototype. In-house. No developers needed."
    },
    color: "from-orange-500 to-amber-600"
  }
];

export const shiftComparison: ComparisonRow[] = [
  { label: "Role of AI", left: "AI = chatbots, novelty", right: "AI = agents, workflows, co-pilots" },
  { label: "Mindset", left: "'Will AI take my job?'", right: "'How do I work WITH AI?'" },
  { label: "Method", left: "Prompt and pray", right: "Design and orchestrate" },
  { label: "Scope", left: "One tool (ChatGPT)", right: "Multimodal ecosystems" },
  { label: "Access", left: "Tech people only", right: "Everyone needs AI fluency" },
];

export const approachComparison: ComparisonRow[] = [
  { label: "Focus", left: "Learn about AI", right: "Build with AI" },
  { label: "Skills", left: "Tool tutorials", right: "Transferable skills" },
  { label: "Output", left: "Watch demos", right: "Walk out with portfolio" },
  { label: "Philosophy", left: "Tech-focused", right: "Human-first" },
  { label: "Result", left: "Theory", right: "Outcomes" },
];
