const CARD = "rounded-4xl border border-brand-border bg-brand-surface p-6 shadow-panel dark:border-brand-dark-border dark:bg-brand-dark-surface dark:shadow-panel-dark";

const steps = [
  {
    n: "01",
    title: "Upload files or a design brief",
    body: "Accept a CAD file, STEP, STL, or a concise brief so the process feels accessible to both file-ready teams and founders who still need technical guidance.",
    img: "/research/images/process-1.jpg",
    alt: "File review workstation",
  },
  {
    n: "02",
    title: "Review and response within 24 hours",
    body: "Return pricing, DFM feedback, material selection guidance, and a clear read on tolerances, biocompatible options, and design controls considerations for FDA-facing programs.",
    img: "/research/images/process-2.jpg",
    alt: "Active fabrication step",
  },
  {
    n: "03",
    title: "Approval and build",
    body: "Once approved, Advanc3D builds with HP MJF, SLA, FDM, or TPU based on the engineering-grade or end-use requirement, not whichever process is easiest to sell.",
    img: "/research/images/process-3.jpg",
    alt: "Process mechanics",
  },
  {
    n: "04",
    title: "Parts arrive ready for testing",
    body: "Deliver the functional prototype ready for bench testing, team review, or the next iteration, with a visible bridge into short-run work and pilot production.",
    img: null,
    alt: null,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-18 md:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary dark:text-brand-dark-primary">
            How It Works
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand-text dark:text-brand-dark-text md:text-4xl">
            Four Steps From Concept to Production-Intent Part
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <article key={s.n} className={CARD}>
              <span className="font-display text-sm font-semibold text-brand-primary dark:text-brand-dark-primary">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold leading-tight text-brand-text dark:text-brand-dark-text">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-base text-brand-muted dark:text-brand-dark-muted">
                {s.body}
              </p>
              {s.img && (
                <div className="mt-5 overflow-hidden rounded-3xl border border-brand-border dark:border-brand-dark-border">
                  <img src={s.img} alt={s.alt ?? ""} className="h-48 w-full object-cover" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}