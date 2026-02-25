"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import StatCard from "@/components/StatCard";
import metrics from "@/data/metrics.json";
import outcomes from "@/data/outcomes.json";

export default function TeachersPage() {
  return (
    <>
      <PageHero
        headline="For Teachers & Schools"
        subhead="How ARAC integrates into your classroom - and why it works."
        primaryCta={{ label: "Partner with us", href: "#partner" }}
        photoPlaceholder="Photo: Teacher and ARAC leader collaborating"
      />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-8">
            How ARAC integrates into classrooms
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-6">
            ARAC leaders arrive with training, clear roles, and flexibility.
            They can support 1-on-1 for students who need targeted help, lead
            small groups for differentiated instruction, or assist with
            whole-class activities. They take direction from you - you set the
            goals, they execute. Sessions are logged and tied to your
            classroom&apos;s needs.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            Integration is practical: a leader shows up at a set time, checks in
            with you, and works with the students you designate. No extra
            curriculum to adopt, no rigid program to follow. Just additional
            hands and attention.
          </p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "var(--card-bg)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-8">
            What kinds of support teachers request most
          </h2>
          <ul className="space-y-4 text-muted text-lg">
            <li>1-on-1 reading fluency and comprehension support</li>
            <li>Math small-group reinforcement and conceptual clarification</li>
            <li>Classroom management support (circulating, monitoring)</li>
            <li>Differentiated instruction for students who need extra time</li>
            <li>Confidence-building for reluctant participants</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-12">
            Evidence of usefulness
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <StatCard
                value={outcomes.satisfaction.teachersSatisfied}
                label="Teachers satisfied with ARAC support"
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
                value={metrics.reach.sessionsDelivered.toLocaleString()}
                label="Sessions delivered"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <StatCard
                value={outcomes.supervisorGoals.studentEngagementMet}
                label="Supervisor-reported student engagement met"
                suffix="%"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-8">
            Accessibility & responsiveness
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            ARAC aims to be responsive to teacher and student needs. Leaders
            receive training on inclusive practices and can adapt to different
            learning styles. If you have specific accessibility or cultural
            considerations, we work with you to match the right leader and
            approach.
          </p>
        </div>
      </section>

      <section
        id="partner"
        className="py-16 px-6"
        style={{ backgroundColor: "var(--yellow-accent)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl text-ink mb-4">
            Partner with us
          </h2>
          <p className="text-muted mb-6">
            Interested in bringing ARAC leaders into your classroom? Reach out
            to discuss placement, scheduling, and support models.
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
