"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EnquiryForm from "@/components/EnquiryForm";
import { getPackageBySlug } from "@/lib/packages";
import { getServiceBySlug } from "@/lib/services";

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageContent />
    </Suspense>
  );
}

function ContactPageContent() {
  const searchParams = useSearchParams();
  const packageSlug = searchParams.get("package") ?? undefined;
  const visa = searchParams.get("visa") ?? undefined;
  const serviceSlug = searchParams.get("service") ?? undefined;

  const pkg = packageSlug ? getPackageBySlug(packageSlug) : undefined;
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  const intro = pkg
    ? `Ask us about ${pkg.name} — or tell us if you'd rather build something custom.`
    : visa
      ? `Tell us a bit more about your ${visa} visa application and we'll take it from there.`
      : service
        ? `Tell us a bit more about the ${service.name} you need and we'll take it from there.`
        : "Share a few details and a planner will get back to you with options.";

  return (
    <div className="mx-auto grid max-w-4xl gap-10 px-6 py-16 sm:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          Contact
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold text-ink">
          Tell us where you want to go
        </h1>
        <p className="mt-3 text-sm text-ink-soft">{intro}</p>

        <div className="glass mt-6 rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
            Speak to us directly
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-ink">
            Pradeepan Palani
          </p>
          <p className="text-sm text-ink-soft">Managing Director</p>

          <div className="mt-4 space-y-2 text-sm">
            <a
              href="tel:+918667888913"
              className="flex items-center gap-2 text-ink-soft hover:text-accent"
            >
              <PhoneIcon />
              +91 86678 88913
            </a>
            <a
              href="tel:+917639442853"
              className="flex items-center gap-2 text-ink-soft hover:text-accent"
            >
              <PhoneIcon />
              +91 76394 42853
            </a>
            <a
              href="tel:+914222998913"
              className="flex items-center gap-2 text-ink-soft hover:text-accent"
            >
              <OfficeIcon />
              Office: +91 422-2998913
            </a>
            <a
              href="mailto:info@travelanchortourism.com"
              className="flex items-center gap-2 text-ink-soft hover:text-accent"
            >
              <MailIcon />
              info@travelanchortourism.com
            </a>
          </div>

          <a
            href="https://wa.me/918667888913?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20trip"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <EnquiryForm
        defaultDestination={
          pkg ? pkg.name : visa ? `${visa} visa` : service ? service.name : undefined
        }
      />
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-accent" aria-hidden="true">
      <path
        d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OfficeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-accent" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 21v-4h4v4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-accent" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96C22 6.46 17.54 2 12.04 2Zm0 18.2h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.09.81.82-3-.2-.31a8.24 8.24 0 0 1-1.26-4.4c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.28.86 5.85 2.42a8.2 8.2 0 0 1 2.42 5.85c0 4.56-3.72 8.27-8.31 8.23Zm4.53-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.15-1.19-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}
