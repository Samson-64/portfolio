"use client";

import { motion } from "framer-motion";
import { Code2, Database, ServerCog } from "lucide-react";

import SectionHeading from "@/components/section-heading";
import { skills } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const icons = {
  Frontend: Code2,
  Backend: ServerCog,
  Database: Database,
};

export default function Skills() {
  return (
    <section id="skills" className="section-gap">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Core technologies I use to ship modern digital products."
          description="Each layer of the stack is selected for speed, maintainability, and a smoother experience for both users and teams."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {skills.map((group) => {
            const Icon = icons[group.title];

            return (
              <motion.div
                key={group.title}
                variants={fadeInUp}
                className="glass-card rounded-[1.75rem] border border-white/10 p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-[rgb(var(--muted))]">Category</p>
                    <h3 className="font-heading text-2xl font-semibold">{group.title}</h3>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <motion.span key={item} whileHover={{ y: -4, scale: 1.02 }} className="pill">
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
