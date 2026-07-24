"use client";

import { HardHat, Layers, MessageSquare, TrendingUp } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import SectionLabel from "@/components/ui/SectionLabel";

const pointIcons = [
  <HardHat size={24} strokeWidth={1.5} key="hardhat" />,
  <Layers size={24} strokeWidth={1.5} key="layers" />,
  <MessageSquare size={24} strokeWidth={1.5} key="msg" />,
  <TrendingUp size={24} strokeWidth={1.5} key="trend" />,
];

export default function WhyUs() {
  const { t, isRTL } = useI18n();

  return (
    <section id="why-us" className="py-28 bg-dark relative overflow-hidden">
      {/* Gold gradient background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--gold), transparent)",
        }}
      />
      <div
        className="absolute top-0 start-0 w-64 h-64 opacity-5 rounded-full"
        style={{
          background: "radial-gradient(circle, var(--gold), transparent)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <SectionLabel text={t.whyUs.sectionLabel} />
          <h2
            className="text-offwhite leading-none"
            style={{
              fontFamily: isRTL ? "var(--font-arabic)" : "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: isRTL ? 0 : "0.02em",
              fontWeight: isRTL ? 700 : undefined,
            }}
          >
            <span className="block">{t.whyUs.headline}</span>
            <span className="block gold-shimmer">{t.whyUs.headline2}</span>
          </h2>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark-400">
          {t.whyUs.points.map((point, i) => (
            <div
              key={point.title}
              className="bg-dark p-8 group hover:bg-dark-200 transition-colors duration-300"
            >
              <div className="flex items-start gap-5">
                {/* Icon container */}
                <div
                  className="w-12 h-12 flex items-center justify-center border border-dark-400 flex-shrink-0 group-hover:border-gold/50 transition-colors duration-300"
                  style={{ color: "var(--gold)" }}
                >
                  {pointIcons[i]}
                </div>

                <div>
                  <h4
                    className="text-offwhite mb-2 transition-colors group-hover:text-gold"
                    style={{
                      fontFamily: isRTL
                        ? "var(--font-arabic)"
                        : "var(--font-heading)",
                      fontSize: "1.2rem",
                      letterSpacing: isRTL ? 0 : "0.05em",
                      fontWeight: isRTL ? 600 : undefined,
                    }}
                  >
                    {point.title}
                  </h4>
                  <p className="text-offwhite/50 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
