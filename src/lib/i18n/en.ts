const en = {
  nav: {
    services: 'Services',
    about: 'About',
    whyUs: 'Why Us',
    contact: 'Contact',
    langToggle: 'العربية',
  },
  hero: {
    tagline: 'General Supplies & Technical Services',
    headline1: 'Built for the',
    headline2: 'Infrastructure',
    headline3: 'That Powers Everything',
    subtext:
      'From electrical systems to mobile towers — we supply, install, and maintain the infrastructure behind the scenes.',
    cta: 'Request a Quote',
    ctaSecondary: 'Our Services',
  },
  services: {
    sectionLabel: 'What We Do',
    headline: 'Three Pillars. One Company.',
    subtext:
      'We operate across three specialized domains, each backed by experienced engineers and field teams.',
    items: [
      {
        id: 'supplies',
        title: 'General Supplies',
        description:
          'Procurement and delivery of industrial equipment, electrical components, and technical materials. We source what you need — on time, at scale.',
        details: ['Equipment Procurement', 'Technical Materials', 'Bulk Supply', 'Vendor Relations'],
      },
      {
        id: 'electrical',
        title: 'Electrical Maintenance',
        description:
          'Preventive and corrective maintenance for electrical systems and devices. Our certified engineers keep your operations running without interruption.',
        details: ['Preventive Maintenance', 'Emergency Repairs', 'System Inspection', 'Compliance Checks'],
      },
      {
        id: 'towers',
        title: 'Mobile Tower Maintenance',
        description:
          'Full-cycle maintenance for telecom and mobile towers. From structural inspection to antenna servicing — we keep networks connected.',
        details: ['Structural Inspection', 'Antenna Servicing', 'Safety Audits', 'Tower Upgrades'],
      },
    ],
  },
  about: {
    sectionLabel: 'Who We Are',
    headline: 'A Company Built on Precision',
    body1:
      'Ai Tech was founded with one clear mission: to bring reliable, professional-grade technical services to the industrial and telecom sectors in Egypt and beyond.',
    body2:
      'We are not generalists. Every service we offer is backed by a dedicated team of specialists who understand the weight of what they work on. When a tower goes down or a system fails, we are the call that fixes it.',
    body3:
      'This company is built to grow — and to bring the infrastructure standard of tomorrow, today.',
    values: [
      { label: 'Reliability', desc: 'We show up. We deliver. No excuses.' },
      { label: 'Precision', desc: 'Every detail matters in infrastructure.' },
      { label: 'Integrity', desc: 'Transparent work, honest pricing.' },
    ],
  },
  whyUs: {
    sectionLabel: 'Why Ai Tech',
    headline: 'Not Just a Contractor.',
    headline2: 'A Long-Term Partner.',
    points: [
      {
        title: 'Field-Ready Teams',
        desc: 'Our engineers are trained for real conditions — not just theory. They handle environments from substations to telecom towers.',
      },
      {
        title: 'Multi-Domain Expertise',
        desc: 'Electrical, telecom, and supply — under one roof. No juggling multiple vendors.',
      },
      {
        title: 'Responsive by Default',
        desc: 'We treat every client request as urgent. Communication is part of the service.',
      },
      {
        title: 'Scalable with You',
        desc: 'Whether you need a single repair or a long-term maintenance contract — we structure our service around your needs.',
      },
    ],
  },
  contact: {
    sectionLabel: 'Get in Touch',
    headline: 'Start the Conversation.',
    subtext: 'Tell us what you need. We will respond within 24 hours.',
    form: {
      name: 'Full Name',
      namePlaceholder: 'Your name',
      company: 'Company (Optional)',
      companyPlaceholder: 'Your company',
      phone: 'Phone Number',
      phonePlaceholder: '+20 xxx xxx xxxx',
      message: 'Message',
      messagePlaceholder: 'Describe what you need...',
      submit: 'Send Request',
    },
    info: {
      phone: '+20 xxx xxx xxxx',
      email: 'contact@aitech.eg',
      location: 'Cairo, Egypt',
    },
  },
  footer: {
    tagline: 'Infrastructure You Can Trust.',
    rights: '© 2024 Ai Tech. All rights reserved.',
  },
}

export default en
export type Translations = typeof en
