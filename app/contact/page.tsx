import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Real Work Learning",
  description:
    "Get in touch to discuss workshops, AI training, onboarding systems, or trainer development for your team.",
};

const reasons = [
  "We need a leadership workshop",
  "We want our employees to understand AI",
  "Our onboarding needs structure",
  "Our trainers need help",
  "We have procedures, but they are hard to train from",
  "We need someone to facilitate a working session",
  "We need practical training materials for frontline teams",
  "We need help turning scattered content into a usable training plan",
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-bg text-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-6 max-w-[700px]">
            <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
              Contact
            </span>
            <h1 className="font-serif text-[32px] md:text-[56px] leading-tight">
              Let&rsquo;s build a workshop or training experience that actually
              helps.
            </h1>
            <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/80">
              Whether you need a 90 minute to 2 hour workshop, a better
              onboarding structure, a train the trainer session, or practical
              AI training for your team, I would be glad to talk.
            </p>
            <p className="font-sans text-base leading-relaxed text-warm-white/60">
              You do not need to have the whole thing figured out. A rough idea
              is enough to start.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Reasons */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start">
            {/* Reasons */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
                  Common reasons people reach out
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {reasons.map((r) => (
                  <li
                    key={r}
                    className="flex gap-3 items-start font-sans text-sm text-dark-text/80 leading-snug"
                  >
                    <span className="text-accent-orange shrink-0 font-medium mt-0.5">
                      &ndash;
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form — frontend only, no submission handler */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h2 className="font-serif text-[24px] md:text-[40px] text-dark-text leading-snug">
                  Send a message
                </h2>
                <p className="font-sans text-sm text-dark-text/50">
                  Form handling can be connected later. For now, this is a
                  frontend form only.
                </p>
              </div>

              <form className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="font-sans text-sm font-medium text-dark-text"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      className="font-sans text-sm text-dark-text bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="company"
                      className="font-sans text-sm font-medium text-dark-text"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      autoComplete="organization"
                      className="font-sans text-sm text-dark-text bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="font-sans text-sm font-medium text-dark-text"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="font-sans text-sm text-dark-text bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="font-sans text-sm font-medium text-dark-text"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      className="font-sans text-sm text-dark-text bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition"
                      placeholder="(optional)"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="looking-for"
                    className="font-sans text-sm font-medium text-dark-text"
                  >
                    What are you looking for?
                  </label>
                  <input
                    id="looking-for"
                    type="text"
                    name="lookingFor"
                    className="font-sans text-sm text-dark-text bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition"
                    placeholder="e.g. a leadership workshop, AI training, onboarding help"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="timeline"
                      className="font-sans text-sm font-medium text-dark-text"
                    >
                      Preferred timeline
                    </label>
                    <input
                      id="timeline"
                      type="text"
                      name="timeline"
                      className="font-sans text-sm text-dark-text bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition"
                      placeholder="e.g. next month, Q3, flexible"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="audience-size"
                      className="font-sans text-sm font-medium text-dark-text"
                    >
                      Audience size
                    </label>
                    <input
                      id="audience-size"
                      type="text"
                      name="audienceSize"
                      className="font-sans text-sm text-dark-text bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition"
                      placeholder="e.g. 15 people, 2 teams, small group"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-sans text-sm font-medium text-dark-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="font-sans text-sm text-dark-text bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition resize-none"
                    placeholder="Tell me a bit about your situation. A rough idea is fine."
                  />
                </div>

                <button
                  type="button"
                  className="bg-accent-orange text-white font-sans text-base font-semibold rounded-lg px-6 py-3 min-h-[44px] self-start hover:bg-orange-600 hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
