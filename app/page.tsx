import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Cpu,
  Gauge,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Highlight = {
  label: string;
  value: string;
  icon: LucideIcon;
};

const highlights: Highlight[] = [
  { label: "AI products shipped", value: "12+", icon: Rocket },
  { label: "Models deployed", value: "25", icon: Cpu },
  { label: "Latency reductions", value: "↓ 63%", icon: Gauge },
  { label: "Teams enabled", value: "8 squads", icon: Workflow },
];

const experience = [
  {
    company: "NeuraGrid",
    role: "Lead Full Stack & AI Engineer",
    period: "2022 — Present",
    impact:
      "Architected an AI-native analytics suite serving 50k+ enterprise customers with fine-tuned LLM agents and event-driven pipelines.",
  },
  {
    company: "Flowlytics",
    role: "Senior Product Engineer",
    period: "2019 — 2022",
    impact:
      "Shipped personalization platform combining GraphQL microservices with on-device ML, boosting activation by 34%.",
  },
];

const projects = [
  {
    name: "Atlas Copilot",
    description:
      "Retrieval-augmented AI assistant that understands org knowledge, triages ops questions, and triggers workflows through secure actions.",
    stack: ["Next.js", "LangChain", "Postgres", "Edge Functions"],
    link: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Pulse Metrics",
    description:
      "Real-time observability surface with anomaly detection, automated RCA, and Slack-native triage experiences for SRE teams.",
    stack: ["tRPC", "Temporal", "ClickHouse", "Tailwind"],
    link: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1520607162513-6c03916b9f5b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Generative Design System",
    description:
      "Composable UI kit that lets designers describe intent in natural language and streams production-ready React components.",
    stack: ["Next.js", "OpenAI", "Zustand", "Figma Plugin"],
    link: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=1600&q=80",
  },
];

type FocusArea = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

const aiFocus: FocusArea[] = [
  {
    title: "AI-native UX",
    detail:
      "Conversational flows, adaptive interfaces, and streaming feedback that keep users in the loop.",
    icon: Sparkles,
  },
  {
    title: "Reliable pipelines",
    detail:
      "Evaluation harnesses, observability, and guardrails so models stay accurate and aligned in production.",
    icon: ShieldCheck,
  },
  {
    title: "Full stack velocity",
    detail:
      "From data ingestion to polished frontends—shipped with CI, testing, and infrastructure as code.",
    icon: Cpu,
  },
];

const tools = [
  "Next.js",
  "tRPC",
  "Tailwind",
  "React 19",
  "Prisma",
  "Supabase",
  "Postgres",
  "LangChain",
  "OpenAI",
  "Qdrant",
  "AWS",
  "Vercel",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-10 lg:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.12),_transparent_55%)] blur-3xl"
        />

        <header className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">
              Đặng Tiến Dũng
            </p>
            <h1 className="text-xl font-semibold text-white">
              AI Full Stack Developer
            </h1>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-400 sm:justify-center">
            <a href="#experience" className="transition hover:text-emerald-300">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-emerald-300">
              Projects
            </a>
            <a href="#tooling" className="transition hover:text-emerald-300">
              Tooling
            </a>
            <a href="#contact" className="transition hover:text-emerald-300">
              Contact
            </a>
          </nav>
          <a
            href="mailto:dangtiendung.ai@outlook.com"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300/50 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-200"
          >
            Email me
          </a>
        </header>

        <section className="space-y-10 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-[0_0_60px_rgba(15,118,110,0.15)] backdrop-blur">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            <Sparkles className="h-4 w-4 text-emerald-300" />
            AI-first builder
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-6">
              <div className="text-sm text-emerald-300/80">
                <p className="font-semibold">Đặng Tiến Dũng</p>
                <p className="text-slate-400">Ho Chi Minh City, Vietnam</p>
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Full Stack Developer focused on crafting AI-native products that
                feel fast, trustworthy, and delightful.
              </h1>
              <p className="text-lg text-slate-300">
                I help product teams translate fuzzy AI ideas into
                production-ready software—pairing strong system design with
                user-centered execution.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:dangtiendung.ai@outlook.com"
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Start a project
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-300"
              >
                View work
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/5 bg-slate-900/50 p-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="space-y-3 rounded-2xl border border-white/5 bg-slate-950/40 p-4"
            >
              <div className="flex items-center gap-3 text-emerald-300">
                <item.icon className="h-5 w-5" />
                <p className="text-sm uppercase tracking-wide text-slate-400">
                  {item.label}
                </p>
              </div>
              <p className="text-3xl font-semibold text-emerald-300">
                {item.value}
              </p>
            </div>
          ))}
        </section>

        <section
          id="experience"
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6 rounded-3xl border border-white/5 bg-slate-900/60 p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Experience</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
                impact
              </span>
            </div>
            <div className="space-y-6">
              {experience.map((job) => (
                <div
                  key={job.company}
                  className="rounded-2xl bg-slate-900/70 p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-sm text-emerald-300">{job.company}</p>
                      <p className="text-lg font-semibold text-white">
                        {job.role}
                      </p>
                    </div>
                    <p className="text-sm text-slate-400">{job.period}</p>
                  </div>
                  <p className="mt-4 text-slate-300">{job.impact}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-8">
            <h2 className="text-2xl font-semibold text-white">AI edge</h2>
            <div className="space-y-4">
              {aiFocus.map((focus) => (
                <div
                  key={focus.title}
                  className="rounded-2xl border border-emerald-400/20 p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 p-2">
                      <focus.icon className="h-5 w-5 text-emerald-300" />
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                      {focus.title}
                    </p>
                  </div>
                  <p className="mt-3 text-slate-300">{focus.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="space-y-8 rounded-3xl border border-white/5 bg-slate-900/50 p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-white">Selected work</h2>
            <p className="text-sm text-slate-400">
              Shipping full journeys—from prompts to production deployments.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col rounded-3xl border border-white/5 bg-slate-950/60 p-6 transition hover:border-emerald-400/40 hover:-translate-y-1"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl border border-white/5">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1200}
                    height={720}
                    className="h-48 w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                  >
                    Explore →
                  </a>
                </div>
                <p className="mt-3 flex-1 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="tooling"
          className="space-y-6 rounded-3xl border border-white/5 bg-slate-900/60 p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold text-white">Tooling</h2>
            <span className="text-sm text-slate-400">
              What I ship with daily
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-3 lg:grid-cols-4">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-2xl border border-white/5 bg-slate-950/60 px-4 py-3 text-center"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/20 via-slate-900 to-slate-950 p-8 shadow-[0_25px_80px_rgba(16,185,129,0.15)]"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">
              Next build
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Ready to translate your AI concept into a reliable product.
            </h2>
            <p className="text-slate-100/80">
              I can embed with your team or own the whole stack—research,
              prototyping, production, and ongoing iteration.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:dangtiendung.ai@outlook.com"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                <Bot className="h-4 w-4" />
                Book time
              </a>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
              >
                Download resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
