"use client";

import { FormEvent, useState } from "react";

export default function EnquiryForm({ defaultDestination }: { defaultDestination?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-6 text-sm text-ink-soft">
        <p className="font-semibold text-ink">Thanks — that's noted.</p>
        <p className="mt-1">
          This form isn&apos;t wired to a real inbox yet. Connect it to an
          email service or CRM before launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass grid gap-4 rounded-2xl p-6">
      <Field label="Name">
        <input required name="name" type="text" className="form-input" placeholder="Your name" />
      </Field>
      <Field label="Phone">
        <input required name="phone" type="tel" className="form-input" placeholder="+91 00000 00000" />
      </Field>
      <Field label="Email">
        <input name="email" type="email" className="form-input" placeholder="you@example.com" />
      </Field>
      <Field label="Destination">
        <input
          name="destination"
          type="text"
          defaultValue={defaultDestination}
          className="form-input"
          placeholder="Where are you thinking of going?"
        />
      </Field>
      <Field label="Message">
        <textarea name="message" rows={4} className="form-input resize-none" placeholder="Travel dates, group size, anything else" />
      </Field>
      <button
        type="submit"
        className="mt-1 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-ink"
      >
        Send enquiry
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
        {label}
      </span>
      {children}
    </label>
  );
}
