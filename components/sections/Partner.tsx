"use client";

import { useState } from "react";

export default function Partner() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || sending) return;

    const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
    if (!endpoint) {
      setError("Form endpoint is not configured.");
      return;
    }

    setSending(true);
    setError("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        // text/plain avoids a CORS preflight against Google Apps Script
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ name, org, email, message }),
        redirect: "follow",
      });
      const payload = await res.json().catch(() => ({ ok: res.ok }));
      if (!payload.ok) throw new Error(payload.error || "Submission failed");

      setSubmitted(true);
      setName("");
      setOrg("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="partner"
      className="relative scroll-mt-[80px] overflow-hidden bg-navy px-6 py-[100px] sm:px-10"
    >
      {/* Soft lime glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-lime/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* Left column — copy + illustration card */}
        <div className="space-y-6">
          <h2 className="font-serif text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.15] tracking-[-0.5px] text-white">
            Bring training to
            <br />
            your community
          </h2>
          <p className="max-w-[480px] text-[15.5px] leading-[1.65] text-white/65">
            Whether you{`'`}re an NGO, CSR team, government body, or community
            leader, we{`'`}d love to work together.
          </p>

          {/* Illustration card */}
          <div className="mt-6 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              className="flex-none"
            >
              <circle cx="20" cy="22" r="8" stroke="#7ED957" strokeWidth="2" />
              <path
                d="M8 50c0-7 6-12 12-12s12 5 12 12"
                stroke="#7ED957"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="44"
                cy="22"
                r="8"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
              />
              <path
                d="M32 50c0-7 6-12 12-12s12 5 12 12"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M28 28l8 0"
                stroke="#7ED957"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M34 24l4 4-4 4"
                stroke="#7ED957"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <div className="flex-1 space-y-2">
              <div className="font-serif text-[15px] font-semibold text-white">
                NGOs · CSR · Government · Communities
              </div>
              <p className="text-[13px] leading-[1.6] text-white/70">
                Together we can equip more people with the skills they need to
                thrive.
              </p>
            </div>
          </div>
        </div>

        {/* Right column — form card */}
        <div className="rounded-2xl bg-white p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lime">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-serif text-[18px] font-semibold text-navy">
                Thank you. We{`'`}ll be in touch.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-[22px] font-bold leading-[1.25] text-navy">
                Send us an enquiry
              </h3>
              <p className="mb-6 mt-1.5 text-[14px] leading-[1.55] text-gray-500">
                Tell us a little about your community and what you need.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border-[1.5px] border-gray-200 bg-white px-4 py-3.5 text-[14.5px] font-normal text-[#1a1a1a] outline-none transition-colors placeholder:text-gray-400 focus:border-navy"
                />
                <input
                  type="text"
                  placeholder="Organisation"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  className="w-full rounded-md border-[1.5px] border-gray-200 bg-white px-4 py-3.5 text-[14.5px] font-normal text-[#1a1a1a] outline-none transition-colors placeholder:text-gray-400 focus:border-navy"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border-[1.5px] border-gray-200 bg-white px-4 py-3.5 text-[14.5px] font-normal text-[#1a1a1a] outline-none transition-colors placeholder:text-gray-400 focus:border-navy"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your training needs..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-y rounded-md border-[1.5px] border-gray-200 bg-white px-4 py-3.5 text-[14.5px] font-normal text-[#1a1a1a] outline-none transition-colors placeholder:text-gray-400 focus:border-navy"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-1 inline-flex w-full items-center justify-center gap-2.5 rounded bg-lime px-7 py-4 text-[13px] font-bold uppercase tracking-[0.6px] text-navy transition-all hover:bg-lime-deep hover:shadow-[0_6px_18px_rgba(126,217,87,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-lime disabled:hover:shadow-none"
                >
                  {sending ? "Sending..." : "Send Enquiry"}
                  {!sending && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
                {error && (
                  <p className="text-[13px] leading-[1.5] text-red-600" role="alert">
                    {error}
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
