"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import PageHero from "@/components/PageHero";
import StatCard from "@/components/StatCard";
import OutcomeGrid from "@/components/OutcomeGrid";
import QuotePull from "@/components/QuotePull";
import SectionDivider from "@/components/SectionDivider";
import metrics from "@/data/metrics.json";
import outcomes from "@/data/outcomes.json";

const subjectData = [
  { name: "Literacy", value: metrics.subjectDistribution.literacy, fill: "var(--blue-primary)" },
  { name: "Math", value: metrics.subjectDistribution.math, fill: "var(--blue-soft)" },
];

export default function ImpactPage() {
  const leaderItems = [
    { label: "Teaching skills goals met", value: outcomes.leaderGoals.teachingSkillsMet },
    { label: "Communication skills goals met", value: outcomes.leaderGoals.communicationSkillsMet },
    { label: "Responsibility goals met", value: outcomes.leaderGoals.responsibilityGoalsMet },
  ];

  const supervisorItems = [
    { label: "Reliability met", value: outcomes.supervisorGoals.reliabilityMet },
    { label: "Professionalism met", value: outcomes.supervisorGoals.professionalismMet },
    { label: "Student engagement met", value: outcomes.supervisorGoals.studentEngagementMet },
  ];

  const satisfactionItems = [
    { label: "Leaders satisfied", value: outcomes.satisfaction.leadersSatisfied },
    { label: "Teachers satisfied", value: outcomes.satisfaction.teachersSatisfied },
    { label: "Students reported confidence gain", value: outcomes.satisfaction.studentsReportedConfidence },
  ];

  return (
    <>
      <PageHero
        headline="Impact Overview"
        subhead="What we achieved together - reach, delivery, outcomes."
        photoPlaceholder="Program overview photo"
      />

      {/* Section 1: Reach */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="w-full h-56 rounded-2xl flex items-center justify-center mb-12 overflow-hidden"
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              background: "linear-gradient(90deg, #edf2fe 25%, #cdd9fa 50%, #edf2fe 75%)",
              backgroundSize: "200% 100%",
              border: "1px solid #cdd9fa",
            }}
          >
            <span className="text-[#5b96f5] text-sm">
              Program overview photo
            </span>
          </motion.div>
          <p className="text-xs uppercase tracking-widest text-muted mb-2">
            Section 01
          </p>
          <h2 className="font-display text-3xl text-ink mb-8">Reach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <StatCard
                value={metrics.reach.studentsCoached}
                label="Students coached (WWPS)"
                context="Across 14 WWPS classrooms over 3 academic years."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            >
              <StatCard
                value={metrics.reach.sessionsDelivered.toLocaleString()}
                label="Sessions delivered"
                context="Including 1-on-1 and small group sessions."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            >
              <StatCard
                value={metrics.reach.supervisorsAndTeachers}
                label="Supervisors & teachers engaged"
                context="Across elementary and middle schools in Walla Walla."
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SectionDivider />

      {/* Section 2: How Support Was Delivered */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-12">
            How Support Was Delivered
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl p-6 border border-border"
              style={{ backgroundColor: "var(--card-bg)" }}
            >
              <h3 className="font-display text-xl text-ink mb-4">
                1-on-1 vs. Classroom Sessions
              </h3>
              <div className="space-y-2">
                <p className="font-mono text-lg">
                  1-on-1: {metrics.delivery.oneOnOneSessions.toLocaleString()}
                </p>
                <p className="font-mono text-lg">
                  Classroom: {metrics.delivery.classroomSessions.toLocaleString()}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl p-6 border border-border"
              style={{ backgroundColor: "var(--card-bg)" }}
            >
              <h3 className="font-display text-xl text-ink mb-4">
                Assisting vs. Leading Role
              </h3>
              <div className="space-y-2">
                <p className="font-mono text-lg">
                  Assisting: {metrics.delivery.assistingRole.toLocaleString()}
                </p>
                <p className="font-mono text-lg">
                  Leading: {metrics.delivery.leadingRole.toLocaleString()}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 rounded-xl p-6 border border-border"
              style={{ backgroundColor: "var(--card-bg)" }}
            >
              <h3 className="font-display text-xl text-ink mb-4">
                Avg time per student
                <span
                  className="ml-2 text-muted font-sans text-base font-normal cursor-help"
                  title="Consistent time per student allows for deeper relationship-building and measurable progress. Shorter sessions may limit impact; longer sessions can strain capacity."
                >
                  (why this matters)
                </span>
              </h3>
              <p className="font-mono text-lg">
                {metrics.delivery.avgMinutesPerStudent} min average (range:{" "}
                {metrics.delivery.minMinutesPerStudent}–
                {metrics.delivery.maxMinutesPerStudent} min)
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SectionDivider />

      {/* Section 3: What Was Taught */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-12">
            What Was Taught
          </h2>
          <div className="max-w-md">
            <div className="h-48 min-h-[12rem] w-full" role="img" aria-label="Literacy 68%, Math 32%">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectData} layout="vertical" margin={{ left: 80 }}>
                  <XAxis type="number" domain={[0, 100]} unit="%" />
                  <YAxis type="category" dataKey="name" width={70} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {subjectData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted mt-2">
              Literacy vs Math session distribution
            </p>
          </div>
        </div>
      </motion.section>

      <SectionDivider />

      {/* Section 4: Outcomes */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="font-display text-3xl text-ink">Outcomes</h2>
          <OutcomeGrid items={leaderItems} title="Leader goals met" />
          <OutcomeGrid items={supervisorItems} title="Supervisor-reported goals met" />
          <OutcomeGrid items={satisfactionItems} title="Confidence & satisfaction" />
        </div>
      </motion.section>

      <SectionDivider />

      {/* Section 5: What Changed */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-8">What Changed</h2>
          <QuotePull
            quote="Over the term, support requests shifted from basic decoding to comprehension and confidence-building. Teachers began requesting more small-group leadership from tutors. Students who had been hesitant to participate started volunteering to read aloud and explain their thinking."
          />
          <Link
            href="/evidence"
            className="text-[#5b96f5] font-medium hover:text-[#86aff7] transition-colors"
          >
            Explore evidence & insights →
          </Link>
        </div>
      </motion.section>
    </>
  );
}
