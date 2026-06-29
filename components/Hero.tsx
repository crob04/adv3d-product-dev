const PRIMARY_BTN = "inline-flex items-center justify-center rounded-[1.125rem] bg-brand-primary px-6 py-3.5 font-display text-sm font-semibold tracking-[0.01em] text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg dark:bg-brand-dark-primary dark:hover:bg-brand-dark-primary-hover dark:focus-visible:ring-brand-dark-primary/35 dark:focus-visible:ring-offset-brand-dark-bg";
const SECONDARY_BTN = "inline-flex items-center justify-center rounded-[1.125rem] border border-brand-border bg-brand-surface px-6 py-3.5 font-display text-sm font-semibold tracking-[0.01em] text-brand-text transition-colors duration-200 hover:border-brand-primary hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/20 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg dark:border-brand-dark-border dark:bg-brand-dark-surface dark:text-brand-dark-text dark:hover:border-brand-dark-primary dark:hover:text-brand-dark-primary dark:focus-visible:ring-brand-dark-primary/30 dark:focus-visible:ring-offset-brand-dark-bg";

export default function Hero() {
  return (
    <section id="hero" className="py-24 md:py-30">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-center lg:px-10">
        <div className="flex flex-col">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary dark:text-brand-dark-primary">
            Advanc3D Product Development
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.05] text-brand-text dark:text-brand-dark-text md:text-5xl lg:text-[3.5rem]">
            From CAD File to Functional Prototype — Without the 6-Week Wait.
          </h1>
          <p className="mt-6 max-w-xl font-body text-base text-brand-muted dark:text-brand-dark-muted md:text-lg">
            Upload a CAD file, get DFM-aware feedback and a quote in 24 hours, and move into a functional prototype with engineering-grade materials, biocompatible options, and a clear path to pilot production.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="+1-CALENDLY-URL" className={PRIMARY_BTN}>
              Book a Discovery Call
            </a>
            <a href="+1-UPLOAD-DESTINATION" className={SECONDARY_BTN}>
              Upload Your Project Files → Get a Quote in 24 Hours
            </a>
          </div>
          <p className="mt-6 max-w-xl font-body text-sm text-brand-muted dark:text-brand-dark-muted">
            NDA-ready. US-based. HP MJF, SLA, FDM, and TPU in-house.
          </p>
        </div>
        <div className="overflow-hidden rounded-5xl border border-brand-border bg-brand-surface shadow-panel dark:border-brand-dark-border dark:bg-brand-dark-surface dark:shadow-panel-dark">
          <img
            src="/research/images/hero.jpg"
            alt="Advanc3D fabrication workspace"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}