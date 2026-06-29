const CARD = "rounded-4xl border border-brand-border bg-brand-surface p-6 shadow-panel dark:border-brand-dark-border dark:bg-brand-dark-surface dark:shadow-panel-dark";

export default function Bottleneck() {
  const frictions = [
    "they quote as if the design is already frozen",
    "they push order minimums that do not fit early iteration",
    "they limit material options in ways that raise failure risk during testing",
    "they print what was submitted without the DFM feedback that could have prevented the next revision",
  ];
  return (
    <section id="problem" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary dark:text-brand-dark-primary">
              The Bottleneck
            </span>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-brand-text dark:text-brand-dark-text md:text-4xl">
              Most Production Vendors Are Built for Volume. Your Prototype Isn't.
            </h2>
            <p className="mt-6 max-w-2xl font-body text-base text-brand-muted dark:text-brand-dark-muted md:text-lg">
              Early-stage medical device work does not move in a straight line. You review the first concept, change the CAD file, tighten a tolerance, rethink material selection, and need the next prototype in hand before the next investor meeting or bench test. Volume-oriented vendors slow that loop down. Surface these four friction points clearly:
            </p>
            <ul className="mt-6 space-y-3 font-body text-base text-brand-text dark:text-brand-dark-text md:text-lg">
              {frictions.map((f, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-sm font-semibold text-brand-primary dark:text-brand-dark-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{f}.</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            <div className={`${CARD} overflow-hidden p-0`}>
              <img
                src="/research/images/problem-cad.jpg"
                alt="CAD file bottleneck"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className={`${CARD} overflow-hidden p-0`}>
              <img
                src="/research/images/problem-warp.jpg"
                alt="Process detail supporting context"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}