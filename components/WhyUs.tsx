const CARD = "rounded-4xl border border-brand-border bg-brand-surface p-6 shadow-panel dark:border-brand-dark-border dark:bg-brand-dark-surface dark:shadow-panel-dark";

export default function WhyUs() {
  const materials = [
    "/research/images/materials-grid-1.jpg",
    "/research/images/materials-grid-2.jpg",
    "/research/images/materials-grid-3.jpg",
    "/research/images/materials-grid-4.jpg",
  ];
  return (
    <section id="why" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary dark:text-brand-dark-primary">
            Why Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand-text dark:text-brand-dark-text md:text-4xl">
            Built for Iteration. Priced for Early Stage. Ready for Production.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <article className={`${CARD} lg:col-span-7`}>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted dark:text-brand-dark-muted">
              Lead Pillar
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-brand-text dark:text-brand-dark-text">
              Design Collaboration
            </h3>
            <p className="mt-4 font-body text-base text-brand-muted dark:text-brand-dark-muted md:text-lg">
              Start with a CAD file, STEP, or STL and get real design-for-manufacturability input before the build starts. Advanc3D is an engineering-grade partner that can talk through DFM, tolerances, design controls, and production-intent decisions without slowing the schedule down.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {materials.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-3xl border border-brand-border bg-brand-bg dark:border-brand-dark-border dark:bg-brand-dark-bg">
                  <img src={src} alt={`Material sample ${i + 1}`} className="h-32 w-full object-cover" />
                </div>
              ))}
            </div>
          </article>
          <div className="grid gap-6 lg:col-span-5">
            <article className={CARD}>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted dark:text-brand-dark-muted">
                Pillar 1
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-brand-text dark:text-brand-dark-text">
                Material Flexibility
              </h3>
              <p className="mt-4 font-body text-base text-brand-muted dark:text-brand-dark-muted md:text-lg">
                Match HP MJF, SLA, FDM, or TPU to the part instead of forcing the part to match the machine. Material selection, end-use testing needs, biocompatible options, and FDA- or ISO 13485-aware conversations where relevant.
              </p>
            </article>
            <article className={CARD}>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted dark:text-brand-dark-muted">
                Pillar 2
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-brand-text dark:text-brand-dark-text">
                Short-Run Production
              </h3>
              <p className="mt-4 font-body text-base text-brand-muted dark:text-brand-dark-muted md:text-lg">
                The same team that gets the first functional prototype out the door supports short runs and pilot production for a medical device program that is moving toward validation.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}