"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import QuotePull from "@/components/QuotePull";
import StatCard from "@/components/StatCard";
import outcomes from "@/data/outcomes.json";

export default function LeadersPage() {
  return (
    <>
      <PageHero
        headline="For Future Leaders"
        subhead="What it means to tutor with ARAC - and what you gain."
        primaryCta={{ label: "How to get involved", href: "#get-involved" }}
        photoPlaceholder="Photo: Student leader working with a child in classroom"
      />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-8">
            What leaders actually do
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-6">
            You&apos;re in a classroom - maybe 1-on-1 with a student, maybe
            leading a small group. You read with them, work through math
            problems, listen when they struggle, and celebrate when something
            clicks. You take direction from the teacher, log your sessions, and
            reflect on what worked. It&apos;s real teaching work: planning,
            adapting, building relationships.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            You&apos;re not a substitute teacher. You&apos;re a partner - someone
            who can give focused attention, try different approaches, and create
            space for a student to take risks. That requires patience,
            consistency, and a willingness to learn.
          </p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "var(--card-bg)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-12">
            Skills developed (backed by outcome data)
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <StatCard
                value={outcomes.leaderGoals.teachingSkillsMet}
                label="Teaching skills goals met"
                suffix="%"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <StatCard
                value={outcomes.leaderGoals.communicationSkillsMet}
                label="Communication skills goals met"
                suffix="%"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <StatCard
                value={outcomes.leaderGoals.responsibilityGoalsMet}
                label="Responsibility goals met"
                suffix="%"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-12">
            Leader testimonials
          </h2>
          <QuotePull quote="I came in thinking I'd just be helping with homework. I left understanding what it means to meet a kid where they are - and how much it matters when someone shows up consistently." />
          <QuotePull quote="The classroom became my lab. I learned to adapt on the spot, read the room, and build trust. Skills I use in every job interview now." />
        </div>
      </section>

      <section
        id="get-involved"
        className="py-16 px-6"
        style={{ backgroundColor: "var(--yellow-accent)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl text-ink mb-4">
            How to get involved
          </h2>
          <p className="text-muted mb-6">
            Reach out to the ARAC program at Whitman College. We&apos;ll connect
            you with placement options, training, and support.
          </p>
          <a
            href="mailto:arac@whitman.edu"
            className="inline-block px-6 py-3 rounded-lg font-medium text-white bg-blue-primary hover:bg-blue-soft transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2"
          >
            Contact us
          </a>
        </div>
      </section>
    </>
  );
}
