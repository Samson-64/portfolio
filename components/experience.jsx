"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

import SectionHeading from "@/components/section-heading";
import { experience } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="section-gap">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on full stack delivery focused on polished interfaces and practical product builds."
          description="A focused timeline that highlights how I approach responsive implementation, smooth user experience, and clean project execution."
        />

        <div className="relative ml-4 border-l border-white/10 pl-8 sm:ml-6 sm:pl-10">
          {experience.map((item) => (
            <motion.div
              key={`${item.role}-${item.period}`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[3.2rem] top-1 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[rgb(var(--bg-soft))] text-brand shadow-glass sm:-left-[3.45rem]">
                <BriefcaseBusiness className="h-5 w-5" />
              </span>

              <div className="glass-card rounded-[1.75rem] border border-white/10 p-6 sm:p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-heading text-2xl font-semibold">{item.role}</h3>
                    <p className="mt-2 text-sm text-[rgb(var(--muted))]">{item.company}</p>
                  </div>
                  <span className="pill w-fit">{item.period}</span>
                </div>

                <div className="mt-6 grid gap-3">
                  {item.responsibilities.map((responsibility) => (
                    <div key={responsibility} className="rounded-2xl border border-white/[0.08] px-4 py-3 text-sm text-[rgb(var(--muted))]">
                      {responsibility}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
