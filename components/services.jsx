"use client";

import { motion } from "framer-motion";
import { Globe, Rocket, Server, Sparkles } from "lucide-react";

import SectionHeading from "@/components/section-heading";
import { services } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const icons = [Globe, Rocket, Server, Sparkles];

export default function Services() {
  return (
    <section id="services" className="section-gap">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end product work from interface polish to launch-ready websites."
          description="I help brands and founders launch websites and apps that are beautiful, practical, and ready to grow."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="glass-card rounded-[1.75rem] border border-white/10 p-6"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/6 text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
