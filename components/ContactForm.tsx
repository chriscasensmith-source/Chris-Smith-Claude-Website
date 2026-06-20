"use client";

import React, { useState } from "react";

// Web3Forms delivers submissions straight to the email tied to this key.
// This access key is PUBLIC and safe to ship in client code.
//
// To activate: create a free key at https://web3forms.com (enter the Gmail
// address you want submissions sent to), then paste it below — or set
// NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your deployment.
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "font-sans text-sm text-dark-text bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition";
const labelClass = "font-sans text-sm font-medium text-dark-text";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const keyConfigured =
    WEB3FORMS_ACCESS_KEY !== "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New message from Real Work Learning");
    formData.append("from_name", "Real Work Learning website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(data.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again, or email me directly.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col gap-3 bg-soft-white border border-sand rounded-xl p-8"
      >
        <h2 className="font-serif text-[24px] md:text-[32px] text-dark-text leading-snug">
          Thanks — your message is on its way.
        </h2>
        <p className="font-sans text-base text-dark-text/70 leading-relaxed">
          I&rsquo;ll get back to you shortly. In the meantime, feel free to
          reply to the confirmation or reach out directly.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="font-serif text-[24px] md:text-[40px] text-dark-text leading-snug">
          Send a message
        </h2>
        <p className="font-sans text-sm text-dark-text/50">
          A rough idea is enough to start. I&rsquo;ll follow up by email.
        </p>
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Honeypot: hidden from users, catches bots */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              required
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="company" className={labelClass}>
              Company
            </label>
            <input
              id="company"
              type="text"
              name="company"
              autoComplete="organization"
              className={inputClass}
              placeholder="Your company"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
              className={inputClass}
              placeholder="you@company.com"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              className={inputClass}
              placeholder="(optional)"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="looking-for" className={labelClass}>
            What are you looking for?
          </label>
          <input
            id="looking-for"
            type="text"
            name="lookingFor"
            className={inputClass}
            placeholder="e.g. a leadership workshop, AI training, a custom tool"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="timeline" className={labelClass}>
              Preferred timeline
            </label>
            <input
              id="timeline"
              type="text"
              name="timeline"
              className={inputClass}
              placeholder="e.g. next month, Q3, flexible"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="audience-size" className={labelClass}>
              Audience size
            </label>
            <input
              id="audience-size"
              type="text"
              name="audienceSize"
              className={inputClass}
              placeholder="e.g. 15 people, 2 teams, small group"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={`${inputClass} resize-none`}
            placeholder="Tell me a bit about your situation. A rough idea is fine."
          />
        </div>

        {status === "error" && error && (
          <p role="alert" className="font-sans text-sm text-accent-orange">
            {error}
          </p>
        )}

        {!keyConfigured && (
          <p className="font-sans text-xs text-dark-text/50">
            Note: add your Web3Forms access key to enable delivery (see
            ContactForm.tsx).
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-accent-orange text-white font-sans text-base font-semibold rounded-lg px-6 py-3 min-h-[44px] self-start hover:bg-orange-600 hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
