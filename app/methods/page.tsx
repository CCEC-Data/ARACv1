"use client";

import PageHero from "@/components/PageHero";

export default function MethodsPage() {
  return (
    <>
      <PageHero
        headline="Methods & Transparency"
        subhead="What we collected, how we analyzed it, and what we don't claim."
        photoPlaceholder="Photo: Program data collection / team meeting"
      />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <article>
            <h2 className="font-display text-3xl text-ink mb-4">
              What data was collected and how
            </h2>
            <p className="text-muted leading-relaxed">
              Session logs (date, duration, subject, delivery type) were
              recorded by leaders and verified by supervisors. Outcome data
              (goals met, satisfaction) came from end-of-term surveys and
              rubrics. Qualitative themes were derived from anonymized tutor
              reflections and teacher feedback. No individual student or
              teacher identifiers are stored or displayed.
            </p>
          </article>

          <article>
            <h2 className="font-display text-3xl text-ink mb-4">
              How qualitative themes were identified
            </h2>
            <p className="text-muted leading-relaxed">
              Reflections and feedback were coded for recurring patterns (e.g.,
              confidence shifts, conceptual understanding). Themes were
              validated through triangulation with quantitative outcomes where
              possible. All quotes are anonymized; no individual can be
              identified.
            </p>
          </article>

          <article>
            <h2 className="font-display text-3xl text-ink mb-4">
              What this site does NOT claim
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Causal attribution (we report correlations and patterns, not proof that ARAC alone caused outcomes)</li>
              <li>Generalizability beyond WWPS and this cohort</li>
              <li>Individual-level predictive power</li>
              <li>Comparison to other tutoring programs without rigorous comparison design</li>
            </ul>
          </article>

          <article>
            <h2 className="font-display text-3xl text-ink mb-4">
              Limitations and scope
            </h2>
            <p className="text-muted leading-relaxed">
              Data reflect one academic year and one partnership context.
              Sample sizes vary by metric. Self-reported satisfaction has
              inherent bias. We do not have standardized pre/post assessments
              for all students; some outcome measures are rubric-based or
              observational. We present what we have transparently and invite
              questions.
            </p>
          </article>

          <article>
            <h2 className="font-display text-3xl text-ink mb-4">
              Contact / feedback
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Questions about methods, data, or this site? We welcome
              corrections and feedback.
            </p>
            <a
              href="mailto:arac@whitman.edu"
              className="text-blue-primary font-medium hover:text-blue-soft transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 rounded"
            >
              arac@whitman.edu
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
