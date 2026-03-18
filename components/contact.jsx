"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

import SectionHeading from "@/components/section-heading";
import { siteConfig } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";

export default function Contact() {
  return (
    <section id="contact" className="section-gap">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Contact details"
          description="Reach out directly using the email address and phone numbers below."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl"
        >
          <div className="glass-card rounded-[2rem] border border-white/10 p-7 sm:p-10">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm text-[rgb(var(--muted))]">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="mt-3 flex items-center gap-3 font-heading text-xl font-semibold">
                  <Mail className="h-5 w-5 text-brand" />
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <p className="text-sm text-[rgb(var(--muted))]">Phone</p>
                <div className="mt-3 space-y-3">
                  {siteConfig.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="flex items-center gap-3 text-base font-medium">
                      <Phone className="h-4 w-4 text-accent" />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-[rgb(var(--muted))]">Availability</p>
              <p className="mt-2 font-heading text-xl font-semibold">Available for freelance work and frontend projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
