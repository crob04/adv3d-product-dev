const PRIMARY_BTN = "inline-flex items-center justify-center rounded-[1.125rem] bg-brand-primary px-6 py-3.5 font-display text-sm font-semibold tracking-[0.01em] text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg dark:bg-brand-dark-primary dark:hover:bg-brand-dark-primary-hover dark:focus-visible:ring-brand-dark-primary/35 dark:focus-visible:ring-offset-brand-dark-bg";
const SECONDARY_BTN = "inline-flex items-center justify-center rounded-[1.125rem] border border-brand-border bg-brand-surface px-6 py-3.5 font-display text-sm font-semibold tracking-[0.01em] text-brand-text transition-colors duration-200 hover:border-brand-primary hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/20 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg dark:border-brand-dark-border dark:bg-brand-dark-surface dark:text-brand-dark-text dark:hover:border-brand-dark-primary dark:hover:text-brand-dark-primary dark:focus-visible:ring-brand-dark-primary/30 dark:focus-visible:ring-offset-brand-dark-bg";

export default function FinalCta() {
  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:px-10">
        <div>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-brand-text dark:text-brand-dark-text md:text-4xl lg:text-[2.75rem]">
            Your Next Iteration Shouldn't Take 6 Weeks.
          </h2>
          <p className="mt-6 max-w-xl font-body text-base text-brand-muted dark:text-brand-dark-muted md:text-lg">
            If the CAD file is ready, the next step should not be another long quoting loop. Send the file or book the call, get a quote in 24 hours, and work with a US-based, NDA-ready team that can move from functional prototype to pilot production without losing momentum.
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
            US-based | HP MJF + SLA + FDM + TPU | NDA-ready | Short-run & pilot production | Biocompatible materials available
          </p>
        </div>
        <div className="overflow-hidden rounded-5xl border border-brand-border bg-brand-surface shadow-panel dark:border-brand-dark-border dark:bg-brand-dark-surface dark:shadow-panel-dark">
          <img
            src="/research/images/cta-wearable-calipers.jpg"
            alt="Precision measurement proof"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}