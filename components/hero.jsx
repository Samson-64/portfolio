"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";

import { siteConfig, socialProof } from "@/lib/constants";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";

const introWords = ["Modern", "web", "experiences", "crafted", "for", "speed", "and", "impact."];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 sm:pt-40">
      <div className="absolute inset-0 -z-10 grid-outline opacity-40" />
      <div className="floating-shape left-[6%] top-28 h-24 w-24 bg-accent/30 animate-float" />
      <div className="floating-shape right-[8%] top-40 h-32 w-32 bg-brand/25 animate-pulseSoft" />
      <div className="floating-shape bottom-8 left-[18%] h-16 w-16 bg-highlight/30 animate-float" />
      <div className="section-shell section-gap">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10">
            <motion.span variants={fadeInUp} className="soft-label">
              Full Stack Web Developer
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="mt-6 max-w-4xl font-heading text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {siteConfig.name}
              <span className="mt-4 block gradient-text">
                {introWords.map((word, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 * index, duration: 0.55 }}
                    className="mr-3 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-base leading-8 text-[rgb(var(--muted))] sm:text-lg">
              {siteConfig.intro} I specialize in React, Next.js, Tailwind CSS, Node.js, and scalable app architecture.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/cv/samson-mamuya-cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[rgb(var(--text))] px-6 py-3 text-sm font-semibold text-[rgb(var(--bg))] hover:-translate-y-1"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-[rgb(var(--text))] hover:-translate-y-1 hover:border-brand/40"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-[rgb(var(--text))] hover:-translate-y-1 hover:border-accent/40"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="show" className="relative">
            <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 p-6 sm:p-8">
              <div className="absolute inset-0 bg-grid-glow opacity-100" />
              <div className="relative space-y-8">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[rgba(5,8,22,0.86)] via-[rgba(5,8,22,0.08)] to-transparent" />
                  <Image
                    src="/images/Img.png"
                    alt="Samson Philipo Mamuya"
                    width={900}
                    height={1100}
                    priority
                    className="h-[26rem] w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/65">Samson Philipo Mamuya</p>
                    <h2 className="mt-2 font-heading text-3xl font-semibold text-white">Full Stack Web Developer</h2>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {socialProof.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18 + index * 0.1 }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-5"
                    >
                      <p className="text-sm text-[rgb(var(--muted))]">What I build</p>
                      <p className="mt-2 font-heading text-lg font-semibold">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/35 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-[rgb(var(--muted))]">Current Focus</p>
                      <h2 className="mt-2 font-heading text-2xl font-semibold">Next.js, frontend motion, and polished UI systems</h2>
                    </div>
                    <span className="h-3 w-3 rounded-full bg-brand shadow-[0_0_20px_rgba(66,211,146,0.9)]" />
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {["React", "Next.js", "Node.js"].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 px-4 py-4 text-center text-sm font-medium">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
