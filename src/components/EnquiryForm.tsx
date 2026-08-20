"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function EnquiryForm({ defaultDestination }: { defaultDestination?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-6 text-sm text-ink-soft">
        <p className="font-semibold text-ink">Thanks — that's noted.</p>
        <p className="mt-1">A planner will get back to you shortly.</p>
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
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your enquiry — please call or WhatsApp us instead.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-ink disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
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
