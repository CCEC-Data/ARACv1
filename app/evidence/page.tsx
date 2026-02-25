"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import QuotePull from "@/components/QuotePull";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import metrics from "@/data/metrics.json";
import qualitative from "@/data/qualitative.json";

export default function EvidencePage() {
  return (
    <>
      <PageHero
        headline="Evidence & Insights"
        subhead="Quantitative data and qualitative themes that inform our understanding of impact."
        photoPlaceholder="Photo: Data and research materials"
      />

      {/* Quantitative Section */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-8">
            Quantitative Data
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="time-sessions">
              <AccordionTrigger>Time / Sessions</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-muted">
                  <li>
                    Total sessions:{" "}
                    {(
                      metrics.delivery.oneOnOneSessions +
                      metrics.delivery.classroomSessions
                    ).toLocaleString()}
                  </li>
                  <li>
                    Avg time per student:{" "}
                    {metrics.delivery.avgMinutesPerStudent} min
                  </li>
                  <li>
                    Range: {metrics.delivery.minMinutesPerStudent}–
                    {metrics.delivery.maxMinutesPerStudent} min per student
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="delivery-type">
              <AccordionTrigger>Delivery type breakdown</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-muted">
                  <li>
                    1-on-1: {metrics.delivery.oneOnOneSessions.toLocaleString()}{" "}
                    sessions
                  </li>
                  <li>
                    Classroom:{" "}
                    {metrics.delivery.classroomSessions.toLocaleString()} sessions
                  </li>
                  <li>
                    Assisting role:{" "}
                    {metrics.delivery.assistingRole.toLocaleString()}
                  </li>
                  <li>
                    Leading role: {metrics.delivery.leadingRole.toLocaleString()}
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subject-distribution">
              <AccordionTrigger>Subject distribution</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-muted">
                  <li>Literacy: {metrics.subjectDistribution.literacy}%</li>
                  <li>Math: {metrics.subjectDistribution.math}%</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="leader-demographics">
              <AccordionTrigger>Leader demographics (aggregated)</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted">
                  Data aggregated for privacy. Whitman student leaders from
                  diverse majors; distribution available upon request for
                  research purposes.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </motion.section>

      {/* Qualitative Section */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-12">
            Qualitative Themes
          </h2>
          <div className="space-y-16">
            {qualitative.themes.map((theme) => (
              <article key={theme.id}>
                <h3 className="font-display text-xl text-ink mb-4">
                  {theme.title}
                </h3>
                <p className="text-muted mb-6">{theme.description}</p>
                <div className="space-y-4 mb-6">
                  {theme.quotes.map((quote, i) => (
                    <QuotePull key={i} quote={quote} />
                  ))}
                </div>
                {theme.relatedStorySlug && (
                  <Link
                    href={`/stories/${theme.relatedStorySlug}`}
                    className="text-[#5b96f5] font-medium hover:text-[#86aff7] transition-colors"
                  >
                    Related Spotlight Story →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
