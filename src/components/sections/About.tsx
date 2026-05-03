"use client";

import { Shield, Target, Eye } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import SectionLabel from "@/components/ui/SectionLabel";

const valueIcons = [
  <Shield size={20} strokeWidth={1.5} key="shield" />,
  <Target size={20} strokeWidth={1.5} key="target" />,
  <Eye size={20} strokeWidth={1.5} key="eye" />,
];

export default function About() {
  const { t, isRTL } = useI18n();

  return (
    <section id="about" className="py-28 bg-dark-100 relative overflow-hidden">
      {/* Decorative large text */}
      <div
        className="absolute top-1/2 -translate-y-1/2 start-0 select-none pointer-events-none opacity-[0.025] leading-none"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(8rem, 20vw, 18rem)",
          color: "var(--gold)",
          whiteSpace: "nowrap",
        }}
      >
        AI TECH
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <SectionLabel text={t.about.sectionLabel} />
            <h2
              className="text-offwhite leading-tight mb-8"
              style={{
                fontFamily: isRTL
                  ? "var(--font-arabic)"
                  : "var(--font-heading)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: isRTL ? 0 : "0.02em",
                fontWeight: isRTL ? 700 : undefined,
              }}
            >
              {t.about.headline}
            </h2>

            <div className="space-y-5">
              <p className="text-offwhite/60 leading-relaxed">
                {t.about.body1}
              </p>
              <p className="text-offwhite/60 leading-relaxed">
                {t.about.body2}
              </p>
              <p className="text-gold/80 leading-relaxed font-medium">
                {t.about.body3}
              </p>
            </div>
          </div>

          {/* Right: Values */}
          <div className="space-y-4">
            {t.about.values.map((val, i) => (
              <div
                key={val.label}
                className="border border-dark-400 bg-dark-200 p-6 flex items-start gap-5 hover:border-gold/30 transition-colors duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-gold mt-0.5 flex-shrink-0">
                  {valueIcons[i]}
                </div>
                <div>
                  <h4
                    className="text-offwhite mb-1"
                    style={{
                      fontFamily: isRTL
                        ? "var(--font-arabic)"
                        : "var(--font-heading)",
                      fontSize: "1.1rem",
                      letterSpacing: isRTL ? 0 : "0.05em",
                    }}
                  >
                    {val.label}
                  </h4>
                  <p className="text-offwhite/40 text-sm">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
