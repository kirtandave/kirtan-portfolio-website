import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Globe2,
  Mail,
  MapPin,
  Orbit,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const theme = {
  bg: "#ECF0F5",
  bgSoft: "#F7F9FC",
  surface: "rgba(255,255,255,0.72)",
  surfaceStrong: "rgba(255,255,255,0.88)",
  dark: "#080512",
  dark2: "#11102A",
  dark3: "#1A1735",
  text: "#070913",
  muted: "#5F6878",
  softMuted: "#8B93A3",
  border: "rgba(7,9,19,0.10)",
  borderStrong: "rgba(7,9,19,0.16)",
  borderDark: "rgba(255,255,255,0.14)",
  cyan: "#17D8FF",
  cyanDeep: "#0D8FCA",
  violet: "#685DFF",
  magenta: "#E54CFF",
  yellow: "#F7C94B",
  aqua: "#35E2C3",
  green: "#34C97B",
  coral: "#FF7A59",
  white: "#FFFFFF",
};

const profile = {
  name: "Kirtan Dave",
  email: "kirtandave@gmail.com",
  location: "Dubai, UAE",
  headline: "Enterprise Program Manager | ERP, Digital & AI Transformation",
  focus: "ERP • D365FO • AI Transformation • Program Delivery",
  linkedin: "#",
  subheadline:
    "Dubai-based transformation leader helping organizations bring order, pace and measurable value to complex ERP, digital and AI transformation programs.",
};

const headshotSrc = "/headshot.png";
const globalGovernanceImageSrc = "/global_network_governance_and_coordination_map.png";
const chapter1GraphicSrc = "/cyber_transformation_roadmap_interface.png";
const chapter4GraphicSrc = "/global_execution_intelligence_dashboard_design.png";
const cvDownloadHref = "/Kirtan-Dave-CV.pdf";

const metrics = [
  ["14+", "Years Enterprise Delivery"],
  ["$5M+", "Program Governance"],
  ["25%", "Efficiency Improvement"],
  ["20%", "Cost Optimization"],
];

const chapters = [
  {
    id: "vision",
    eyebrow: "Chapter 01",
    title: "Bring complex transformation to life.",
    text:
      "ERP, digital and AI programs need more than ambition. They need a clear operating model that turns executive intent into scope, ownership, milestones, risks and measurable outcomes.",
    bullets: [
      "Vision translated into delivery scope",
      "Stakeholder alignment across business, IT and vendors",
      "Early risk visibility before pressure builds",
    ],
    visual: "hero",
  },
  {
    id: "ecosystem",
    eyebrow: "Chapter 02",
    title: "One transformation. Many moving parts.",
    text:
      "Finance, supply chain, CRM, HR, banking, data migration, integrations, testing and change readiness all move at the same time. Governance turns that complexity into a rhythm teams can follow.",
    bullets: [
      "D365FO and CRM delivery governance",
      "Integration, data and testing control",
      "Decision cadence and executive visibility",
    ],
    visual: "ecosystem",
  },
  {
    id: "control",
    eyebrow: "Chapter 03",
    title: "Create clarity without slowing the program down.",
    text:
      "My role is to create the control layer: clear owners, clean reporting, accurate RAID, focused escalations and delivery cadence that keeps complex transformation moving.",
    bullets: [
      "Steering committee-ready reporting",
      "SIT, UAT, cutover and hypercare readiness",
      "Scope, risk and dependency discipline",
    ],
    visual: "control",
  },
  {
    id: "global",
    eyebrow: "Chapter 04",
    title: "Global standards with local execution intelligence.",
    text:
      "Multi-country delivery works when global governance is consistent, but regional realities are understood. I help build that balance across legal entities, geographies and stakeholder groups.",
    bullets: [
      "UAE-based program governance",
      "Distributed execution across regions",
      "Local readiness aligned to global standards",
    ],
    visual: "global",
  },
];

const services = [
  {
    icon: Workflow,
    title: "ERP & D365FO Delivery",
    text: "Program leadership across finance, supply chain, data, integrations, testing, cutover and hypercare.",
  },
  {
    icon: ShieldCheck,
    title: "Transformation Governance",
    text: "RAID, milestones, executive reporting, vendor management, decisions and scope discipline.",
  },
  {
    icon: Brain,
    title: "AI-Enabled Change",
    text: "AI use-case framing, ERP workflow alignment, adoption planning and benefits tracking.",
  },
  {
    icon: Globe2,
    title: "Multi-Country Rollouts",
    text: "Consistent delivery governance across legal entities, regions, teams and local requirements.",
  },
];

const caseStudies = [
  {
    title: "Government ERP Transformation",
    text: "Structured D365FO, CRM, vendor collaboration, data migration, SIT/UAT and go-live readiness across a high-visibility UAE government environment.",
  },
  {
    title: "Financial Sector Rollout",
    text: "Managed multi-entity ERP delivery with banking integrations, accounting rules, functional governance and executive escalation discipline.",
  },
  {
    title: "Education Digital Platform",
    text: "Led ERP, CRM, Salesforce, parent experience and AI-enabled platform delivery across complex business and technology stakeholders.",
  },
];

const operatingModel = [
  ["Discover", "Goals, scope, stakeholders, risks and success criteria."],
  ["Govern", "Cadence, RAID, decisions, reporting and accountability."],
  ["Build", "Functional, technical, data, integration and change workstreams."],
  ["Validate", "SIT, UAT, reconciliation, security and cutover readiness."],
  ["Stabilize", "Hypercare, adoption, benefits tracking and continuous improvement."],
];

function useSmoothProgress(targetRef, offset = ["start end", "end start"]) {
  const { scrollYProgress } = useScroll({ target: targetRef, offset });
  return useSpring(scrollYProgress, { stiffness: 70, damping: 22, mass: 0.35 });
}

function useScrollBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.min(Math.max(next, 0), 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function gradientTextStyle() {
  return {
    background: `linear-gradient(100deg, ${theme.cyanDeep}, ${theme.violet} 40%, ${theme.magenta})`,
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
}

function SectionLabel({ children, dark = false }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em]"
      style={{
        color: dark ? theme.cyan : theme.cyanDeep,
        backgroundColor: dark ? "rgba(23,216,255,0.11)" : "rgba(13,143,202,0.09)",
        border: `1px solid ${dark ? "rgba(23,216,255,0.25)" : "rgba(13,143,202,0.18)"}`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: dark ? theme.magenta : theme.violet }} />
      {children}
    </span>
  );
}

function PrimaryButton({ href, children, secondary = false }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-black transition duration-300 hover:-translate-y-0.5"
      style={{
        color: secondary ? theme.text : theme.white,
        background: secondary
          ? "rgba(255,255,255,0.62)"
          : `linear-gradient(105deg, ${theme.cyanDeep}, ${theme.violet} 52%, ${theme.magenta})`,
        border: `1px solid ${secondary ? theme.borderStrong : "transparent"}`,
        boxShadow: secondary ? "0 14px 40px rgba(7,9,19,0.08)" : "0 24px 70px rgba(104,93,255,0.28)",
      }}
    >
      {children}
    </a>
  );
}

function FloatingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,9,19,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(7,9,19,0.04)_1px,transparent_1px)] bg-[size:74px_74px]" />
      <motion.div
        className="absolute left-[-16rem] top-[-12rem] h-[44rem] w-[44rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(23,216,255,0.20), transparent 67%)" }}
        animate={{ x: [0, 34, 0], y: [0, 22, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-14rem] top-[10rem] h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(229,76,255,0.18), transparent 68%)" }}
        animate={{ x: [0, -28, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-22rem] left-[28%] h-[46rem] w-[46rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(247,201,75,0.14), transparent 69%)" }}
        animate={{ x: [0, 24, 0], y: [0, -24, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function ScrollProgressBar() {
  const progress = useScrollBar();
  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full" style={{ backgroundColor: "rgba(7,9,19,0.06)" }}>
      <motion.div
        className="h-full"
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.15 }}
        style={{ background: `linear-gradient(90deg, ${theme.cyan}, ${theme.violet}, ${theme.magenta})` }}
      />
    </div>
  );
}

function LightCard({ children, className = "", style = {} }) {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(13,143,202,0.24)" }}
      className={`rounded-[2rem] border p-6 backdrop-blur-xl ${className}`}
      style={{
        backgroundColor: theme.surface,
        borderColor: theme.border,
        boxShadow: "0 22px 70px rgba(7,9,19,0.08)",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

function DarkCard({ children, className = "", style = {} }) {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(23,216,255,0.34)" }}
      className={`rounded-[2rem] border p-6 backdrop-blur-2xl ${className}`}
      style={{
        background: `linear-gradient(180deg, rgba(8,5,18,0.96), rgba(17,16,42,0.92))`,
        borderColor: theme.borderDark,
        boxShadow: "0 30px 90px rgba(7,9,19,0.16)",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

function HeroMeshGraphic() {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[2.75rem] border" style={{ background: `linear-gradient(145deg, rgba(104,93,255,0.94), rgba(229,76,255,0.84), rgba(23,216,255,0.66))`, borderColor: "rgba(255,255,255,0.34)" }}>
      <img
        src={chapter1GraphicSrc}
        alt="Chapter 1 transformation roadmap interface"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
    </div>
  );
}

function EcosystemGraphic() {
  const nodes = [
    ["ERP", 95, 105],
    ["CRM", 420, 120],
    ["Data", 120, 310],
    ["SIT", 300, 302],
    ["UAT", 465, 250],
  ];

  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[2.75rem] border" style={{ background: `radial-gradient(circle at 30% 20%, rgba(229,76,255,0.26), transparent 34%), radial-gradient(circle at 80% 60%, rgba(23,216,255,0.22), transparent 36%), linear-gradient(145deg, ${theme.dark}, ${theme.dark2})`, borderColor: theme.borderDark }}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 560">
        <defs>
          <linearGradient id="ecoLine" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={theme.cyan} />
            <stop offset="45%" stopColor={theme.magenta} />
            <stop offset="100%" stopColor={theme.yellow} />
          </linearGradient>
        </defs>
        <motion.circle cx="280" cy="250" r="152" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="2" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "280px 250px" }} />
        <motion.circle cx="280" cy="250" r="214" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" animate={{ rotate: -360 }} transition={{ duration: 52, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "280px 250px" }} />
        <path d="M82 172 C160 42, 330 114, 472 96 C536 222, 446 382, 282 398 C120 410, 46 290, 82 172Z" fill="none" stroke="url(#ecoLine)" strokeWidth="5" strokeLinecap="round" opacity="0.74" />
      </svg>

      <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-center" style={{ background: `linear-gradient(145deg, rgba(23,216,255,0.16), rgba(229,76,255,0.16))`, borderColor: theme.borderDark, boxShadow: "0 0 90px rgba(229,76,255,0.26)" }}>
        <div>
          <Orbit className="mx-auto h-8 w-8" style={{ color: theme.cyan }} />
          <p className="mt-3 text-lg font-black text-white">Control Core</p>
          <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.70)" }}>Governance + pace</p>
        </div>
      </div>

      {nodes.map(([label, x, y], index) => (
        <motion.div
          key={label}
          className="absolute grid h-20 w-20 place-items-center rounded-full border text-sm font-black"
          style={{ left: x, top: y, backgroundColor: "rgba(7,9,19,0.78)", borderColor: index % 2 ? "rgba(229,76,255,0.44)" : "rgba(23,216,255,0.44)", color: theme.white }}
          animate={{ y: [0, index % 2 ? 8 : -8, 0] }}
          transition={{ duration: 4 + index * 0.32, repeat: Infinity, ease: "easeInOut" }}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
}

function ControlTowerGraphic() {
  const bars = [86, 62, 74, 91, 68];
  const labels = ["Milestone health", "Risk posture", "UAT readiness", "Data confidence", "Cutover control"];
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[2.75rem] border p-6" style={{ background: `radial-gradient(circle at 20% 20%, rgba(23,216,255,0.22), transparent 32%), linear-gradient(145deg, ${theme.dark}, #120A24)`, borderColor: theme.borderDark }}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="relative rounded-[2rem] border p-6 backdrop-blur-xl" style={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: theme.borderDark }}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em]" style={{ color: theme.cyan }}>Delivery Intelligence</p>
            <h3 className="mt-3 text-3xl font-black text-white">Program Control Tower</h3>
          </div>
          <span className="rounded-full px-4 py-2 text-xs font-black" style={{ color: theme.dark, background: `linear-gradient(90deg, ${theme.green}, ${theme.cyan})` }}>Live</span>
        </div>
        <div className="mt-7 grid gap-4">
          {labels.map((label, i) => (
            <div key={label}>
              <div className="mb-2 flex justify-between text-sm font-bold" style={{ color: "rgba(255,255,255,0.72)" }}>
                <span>{label}</span>
                <span>{bars[i]}%</span>
              </div>
              <div className="h-3 rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${theme.cyan}, ${theme.magenta}, ${theme.yellow})` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bars[i]}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: i * 0.08 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-5 grid gap-4 md:grid-cols-3">
        {metrics.slice(1).map(([value, label], i) => (
          <div key={label} className="rounded-[1.5rem] border p-5" style={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: theme.borderDark }}>
            <p className="text-3xl font-black text-white">{value}</p>
            <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.72)" }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GlobalGraphic() {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[2.75rem] border" style={{ background: `radial-gradient(circle at 30% 20%, rgba(229,76,255,0.22), transparent 34%), radial-gradient(circle at 80% 60%, rgba(23,216,255,0.22), transparent 36%), linear-gradient(145deg, ${theme.dark}, ${theme.dark2})`, borderColor: theme.borderDark }}>
      <img
        src={chapter4GraphicSrc}
        alt="Chapter 4 global execution intelligence dashboard"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
    </div>
  );
}

function StoryVisual({ type }) {
  if (type === "hero") return <HeroMeshGraphic />;
  if (type === "ecosystem") return <EcosystemGraphic />;
  if (type === "control") return <ControlTowerGraphic />;
  return <GlobalGraphic />;
}

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <FloatingBackground />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionLabel>AI-era transformation leadership</SectionLabel>
          <h1 className="mt-8 max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.07em] md:text-8xl" style={{ color: theme.text }}>
            Build the future of enterprise change with <span style={gradientTextStyle()}>control, clarity and pace.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9" style={{ color: theme.muted }}>{profile.subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black" style={{ color: theme.text }}>
            {["D365FO", "ERP Governance", "AI Transformation", "Multi-Country Delivery", "PMP Certified"].map((item) => (
              <span key={item} className="rounded-full border px-4 py-2 backdrop-blur-xl" style={{ backgroundColor: theme.surfaceStrong, borderColor: theme.border }}>{item}</span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href={`mailto:${profile.email}?subject=Transformation Leadership Opportunity`}>
              Discuss a transformation role <ArrowRight className="ml-2 h-5 w-5" />
            </PrimaryButton>
            <PrimaryButton href={cvDownloadHref} secondary>
              <Download className="mr-2 h-5 w-5" />Download CV
            </PrimaryButton>
          </div>
        </div>

        <HeroMeshGraphic />
      </div>
    </section>
  );
}

function StoryChapter({ chapter }) {
  const ref = useRef(null);
  const progress = useSmoothProgress(ref, ["start end", "end start"]);
  const y = useTransform(progress, [0, 1], [64, -64]);
  const opacity = useTransform(progress, [0, 0.18, 0.85, 1], [0.32, 1, 1, 0.3]);
  const scale = useTransform(progress, [0, 0.2, 0.85, 1], [0.96, 1, 1, 0.97]);

  return (
    <section ref={ref} id={chapter.id} className="relative min-h-[150vh] border-t" style={{ borderColor: theme.border }}>
      <FloatingBackground />
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-20">
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div style={{ y, opacity }} className="relative z-10 max-w-xl">
            <SectionLabel>{chapter.eyebrow}</SectionLabel>
            <h2 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.06em] md:text-7xl" style={{ color: theme.text }}>
              {chapter.title}
            </h2>
            <p className="mt-7 text-lg leading-9" style={{ color: theme.muted }}>
              {chapter.text}
            </p>
            <div className="mt-8 grid gap-3">
              {chapter.bullets.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border p-4 backdrop-blur-xl"
                  style={{ backgroundColor: theme.surfaceStrong, borderColor: theme.border }}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: 0.08 * index }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: theme.cyanDeep }} />
                  <span className="font-semibold" style={{ color: theme.text }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ opacity, scale }}>
            <StoryVisual type={chapter.visual} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="expertise" className="relative overflow-hidden border-t py-24" style={{ borderColor: theme.border }}>
      <FloatingBackground />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.06em] md:text-7xl" style={{ color: theme.text }}>
          Create, innovate and deliver enterprise change.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: theme.muted }}>
          Four clear areas where I help leaders convert transformation ambition into controlled delivery and business value.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <LightCard key={service.title} className="h-full">
                <div
                  className="mb-6 inline-flex rounded-2xl p-3"
                  style={{
                    background: `linear-gradient(135deg, rgba(23,216,255,0.18), rgba(229,76,255,0.14))`,
                    color: i % 2 ? theme.magenta : theme.cyanDeep,
                  }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black" style={{ color: theme.text }}>{service.title}</h3>
                <p className="mt-4 text-sm leading-7" style={{ color: theme.muted }}>{service.text}</p>
              </LightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section id="proof" className="relative overflow-hidden py-24">
      <FloatingBackground />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel>Proof of delivery</SectionLabel>
        <h2 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.06em] md:text-7xl" style={{ color: theme.text }}>
          Real transformation environments, presented without noise.
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item, i) => (
            <DarkCard key={item.title} className="h-full">
              <p className="text-xs font-black uppercase tracking-[0.22em]" style={{ color: i === 1 ? theme.yellow : theme.cyan }}>Case {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-5 text-2xl font-black text-white">{item.title}</h3>
              <p className="mt-5 text-sm leading-7" style={{ color: "rgba(255,255,255,0.72)" }}>{item.text}</p>
            </DarkCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperatingModelSection() {
  return (
    <section id="model" className="relative overflow-hidden py-24">
      <FloatingBackground />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel>Delivery operating model</SectionLabel>
        <h2 className="mt-7 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.06em] md:text-7xl" style={{ color: theme.text }}>
          Discover → Govern → Build → Validate → Stabilize
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {operatingModel.map(([step, text], i) => (
            <LightCard key={step} className="h-full">
              <p className="text-sm font-black" style={{ color: [theme.cyanDeep, theme.magenta, theme.violet, theme.aqua, theme.coral][i] }}>{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-black" style={{ color: theme.text }}>{step}</h3>
              <p className="mt-4 text-sm leading-6" style={{ color: theme.muted }}>{text}</p>
            </LightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const items = useMemo(
    () => [
      [Mail, "Email", profile.email],
      [MapPin, "Location", profile.location],
      [Award, "Focus", profile.focus],
      [BriefcaseBusiness, "Target", "ERP / Digital / AI Transformation Leadership"],
    ],
    []
  );

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <FloatingBackground />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionLabel>Ready to build?</SectionLabel>
          <h2 className="mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.06em] md:text-7xl" style={{ color: theme.text }}>
            Looking for a leader who can bring structure to complex transformation?
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-9" style={{ color: theme.muted }}>
            I am open to senior roles and advisory discussions across ERP transformation, D365 Finance & Operations, digital programs, AI-enabled enterprise platforms and multi-country delivery governance.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href={`mailto:${profile.email}?subject=Transformation Leadership Opportunity`}>
              Email me <ArrowRight className="ml-2 h-5 w-5" />
            </PrimaryButton>
            <PrimaryButton href={cvDownloadHref} secondary>
              <Download className="mr-2 h-5 w-5" />Download CV
            </PrimaryButton>
          </div>
        </div>

        <DarkCard>
          <SectionLabel dark>Contact</SectionLabel>
          <h3 className="mt-6 text-3xl font-black text-white">Let us discuss transformation leadership.</h3>
          <div className="mt-8 grid gap-4">
            {items.map(([Icon, label, value], i) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border p-4" style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: theme.borderDark }}>
                <div className="rounded-xl p-3" style={{ background: `linear-gradient(135deg, ${i % 2 ? "rgba(229,76,255,0.16)" : "rgba(23,216,255,0.16)"}, rgba(255,255,255,0.08))`, color: i % 2 ? theme.magenta : theme.cyan }}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: i % 2 ? theme.magenta : theme.cyan }}>{label}</p>
                  <p className="mt-1 font-semibold text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </DarkCard>
      </div>
    </section>
  );
}

export default function KirtanSmoothStorySite() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bg, color: theme.text }}>
      <ScrollProgressBar />
      <header className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-2xl" style={{ backgroundColor: "rgba(236,240,245,0.82)", borderColor: theme.border }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-black" style={{ color: theme.text }}>{profile.name}</p>
            <p className="text-xs font-bold" style={{ color: theme.cyanDeep }}>{profile.focus}</p>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" style={{ color: theme.muted }}>
            <a href="#vision" className="transition hover:text-slate-950">Story</a>
            <a href="#expertise" className="transition hover:text-slate-950">Capabilities</a>
            <a href="#proof" className="transition hover:text-slate-950">Proof</a>
            <a href="#model" className="transition hover:text-slate-950">Model</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </nav>
          <PrimaryButton href={`mailto:${profile.email}?subject=Transformation Leadership Opportunity`}>Discuss Opportunity</PrimaryButton>
        </div>
      </header>

      <main>
        <HeroSection />
        {chapters.map((chapter) => (
          <StoryChapter key={chapter.id} chapter={chapter} />
        ))}
        <ServicesSection />
        <ProofSection />
        <OperatingModelSection />
        <ContactSection />
      </main>
    </div>
  );
}
