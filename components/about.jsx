"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/section-heading";
import { siteConfig } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="section-gap"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeInUp}
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Building responsive products with clear structure and smooth interactions."
          description="I combine strong UI thinking with practical full stack experience so every project feels polished, fast, and easy to use."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card rounded-[2rem] border border-white/10 p-7 sm:p-9">
            <p className="text-base leading-8 text-[rgb(var(--muted))] sm:text-lg">{siteConfig.about}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { label: "Experience", value: "3 Years" },
              { label: "Primary Stack", value: "React + Node" },
              { label: "Focus", value: "Fast UX" },
              { label: "Availability", value: "Open to projects" },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-[1.75rem] border border-white/10 p-6">
                <p className="text-sm text-[rgb(var(--muted))]">{item.label}</p>
                <p className="mt-3 font-heading text-2xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
