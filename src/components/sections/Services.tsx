"use client";

import { Package, Zap, Radio } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";

const icons = [
  <Package size={28} strokeWidth={1.5} key="package" />,
  <Zap size={28} strokeWidth={1.5} key="zap" />,
  <Radio size={28} strokeWidth={1.5} key="radio" />,
];

export default function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-28 bg-dark relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 50%, var(--gold) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div>
          <SectionLabel text={t.services.sectionLabel} />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2
              className="text-offwhite leading-none"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "0.02em",
              }}
            >
              {t.services.headline}
            </h2>
            <p className="text-offwhite/40 text-sm max-w-xs leading-relaxed md:text-right">
              {t.services.subtext}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dark-400">
          {t.services.items.map((item, i) => (
            <div key={item.id} className="bg-dark">
              <ServiceCard
                index={i + 1}
                title={item.title}
                description={item.description}
                details={item.details}
                icon={icons[i]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
