export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  image: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "expense-tracker",
    name: "Expense Tracker",
    description:
      "An expense manager with authenticated accounts on Supabase, using row-level security so spending data stays private per user.",
    stack: ["React", "JavaScript", "Supabase"],
    image: "/projects/expense-tracker.png",
    demo: "https://expense-tracker-orpin-five-73.vercel.app",
    github: "https://github.com/Abdo-dev-Ali/expense-tracker.git"
  },
  {
    slug: "task-manager",
    name: "Task Manager",
    description:
      "A to-do app with real user accounts, built on Supabase with email verification and row-level security so each user only sees their own tasks.",
    stack: ["React", "JavaScript", "Supabase"],
    image: "/projects/task-manager.png",
    demo: "https://task-manager-navy-theta-11.vercel.app",
    github: "https://github.com/Abdo-dev-Ali/task-manager.git"
  },
  {
    slug: "news-app",
    name: "News Pulse",
    description: "Browses live news articles by category, fast and clean.",
    stack: ["Next.js", "TypeScript"],
    image: "/projects/news-app.png",
    demo: "https://news-pulse-phi.vercel.app",
    github: "https://github.com/Abdo-dev-Ali/NewsPulse.git"
  }
];
