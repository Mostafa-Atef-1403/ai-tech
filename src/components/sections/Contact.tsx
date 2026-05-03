"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Contact() {
  const { t, isRTL } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const f = t.contact.form;
  const info = t.contact.info;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to email service (e.g. EmailJS or API route)
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-28 bg-dark-100 relative overflow-hidden"
    >
      {/* Decorative corner */}
      <div
        className="absolute top-0 end-0 w-64 h-64 opacity-5"
        style={{
          background:
            "radial-gradient(circle at top right, var(--gold), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionLabel text={t.contact.sectionLabel} />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="text-offwhite leading-none"
              style={{
                fontFamily: isRTL
                  ? "var(--font-arabic)"
                  : "var(--font-heading)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: isRTL ? 0 : "0.02em",
                fontWeight: isRTL ? 700 : undefined,
              }}
            >
              {t.contact.headline}
            </h2>
            <p className="text-offwhite/40 text-sm max-w-xs">
              {t.contact.subtext}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-dark-400">
          {/* Form */}
          <div className="lg:col-span-2 bg-dark-100 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
                <div className="w-16 h-16 border-2 border-gold flex items-center justify-center">
                  <Send size={24} className="text-gold" />
                </div>
                <p
                  className="text-gold text-xl"
                  style={{
                    fontFamily: "var(--font-heading)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {isRTL ? "تم الإرسال" : "Request Sent"}
                </p>
                <p className="text-offwhite/40 text-sm text-center max-w-xs">
                  {isRTL
                    ? "سنتواصل معك قريبًا."
                    : "We'll be in touch within 24 hours."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-offwhite/40 uppercase tracking-widest mb-2">
                      {f.name}
                    </label>
                    <input
                      type="text"
                      placeholder={f.namePlaceholder}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-offwhite/40 uppercase tracking-widest mb-2">
                      {f.company}
                    </label>
                    <input
                      type="text"
                      placeholder={f.companyPlaceholder}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-offwhite/40 uppercase tracking-widest mb-2">
                    {f.phone}
                  </label>
                  <input
                    type="tel"
                    placeholder={f.phonePlaceholder}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-xs text-offwhite/40 uppercase tracking-widest mb-2">
                    {f.message}
                  </label>
                  <textarea
                    placeholder={f.messagePlaceholder}
                    rows={5}
                    required
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-gold text-dark text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-colors font-medium group mt-2"
                >
                  {f.submit}
                  <Send
                    size={14}
                    className={`transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                  />
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="bg-dark-200 p-8 flex flex-col gap-8">
            <div>
              <h4
                className="text-gold mb-6 text-xs uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {isRTL ? "معلومات التواصل" : "Contact Info"}
              </h4>
              <div className="space-y-5">
                {[
                  { icon: <Phone size={16} />, text: info.phone },
                  { icon: <Mail size={16} />, text: info.email },
                  { icon: <MapPin size={16} />, text: info.location },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-offwhite/60"
                  >
                    <span className="text-gold">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative gold box */}
            <div className="mt-auto border border-gold/20 p-5">
              <p className="text-gold/60 text-xs leading-relaxed">
                {isRTL
                  ? "نعمل مع الشركات والمقاولين والجهات الحكومية وشركات الاتصالات في جميع أنحاء مصر."
                  : "We work with businesses, contractors, government entities, and telecom companies across Egypt."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
