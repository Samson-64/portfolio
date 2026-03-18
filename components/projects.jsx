"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import SectionHeading from "@/components/section-heading";
import { fallbackProjects } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

function normalizeStack(stack) {
  if (Array.isArray(stack)) {
    return stack;
  }

  if (typeof stack === "string") {
    return stack
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

export default function Projects() {
  return (
    <section id="projects" className="section-gap">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds that showcase my design and development work."
          description="A curated set of portfolio projects presented as a fast, frontend-only experience with polished animation and responsive layout."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {fallbackProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="glass-card group overflow-hidden rounded-[1.9rem] border border-white/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,8,22,0.8)] via-transparent to-transparent" />
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <h3 className="font-heading text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {normalizeStack(project.tech_stack).map((item) => (
                    <span key={`${project.id}-${item}`} className="pill">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium hover:border-brand/40"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--text))] px-4 py-2 text-sm font-medium text-[rgb(var(--bg))] hover:-translate-y-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
