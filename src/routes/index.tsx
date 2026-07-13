import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Bot,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Facebook,
  Github,
  Globe,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Palette,
  Phone,
  Plug,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  Sun,
  Twitter,
  Workflow,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeBucket — Build. Scale. Automate." },
      {
        name: "description",
        content:
          "CodeBucket is a premium software studio building websites, custom software, AI integrations and automation for modern businesses.",
      },
      { property: "og:title", content: "CodeBucket — Build. Scale. Automate." },
      {
        property: "og:description",
        content:
          "Premium software studio. Websites, apps, AI, automation, and cloud — engineered to scale.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

/* ---------------- Nav ---------------- */

const NAV = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  // { label: "Portfolio", href: "#portfolio" },
  // { label: "Pricing", href: "#pricing" },
  //{ label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    setIsDark(isDarkMode);
    localStorage.theme = isDarkMode ? "dark" : "light";
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#4093FE]/30 text-[#4093FE] hover:bg-[#4093FE]/10 transition-colors shadow-sm"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 border bg-white shadow-card ${
            scrolled 
              ? "shadow-glow border-[#4093FE]/30" 
              : "border-border/40"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <img src="/logo.png" alt="CodeBucket" className="h-16 md:h-20 w-auto object-contain" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-semibold text-[#4093FE] hover:opacity-80 transition-opacity"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#4093FE] text-white px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Start Project <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#4093FE]/30 text-[#4093FE]"
              aria-label="Menu"
            >
              <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 bg-white rounded-2xl p-4 flex flex-col gap-3 shadow-card border border-[#4093FE]/10">
            {NAV.map((n) => {
              if (n.label.startsWith("//")) return null;
              return (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-[#4093FE] py-2 border-b border-[#4093FE]/10 last:border-0"
                >
                  {n.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#4093FE] text-white px-4 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Start Project <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      {/* background */}
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      <motion.div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl -z-10"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-0 h-96 w-96 rounded-full bg-primary-glow/25 blur-3xl -z-10"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div style={{ y }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Now accepting Q3 projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]"
          >
            Build Smarter.
            <br />
            Scale Faster.
            <br />
            <span className="text-gradient">Automate Everything.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            We craft websites, software, AI-powered products and automation systems
            that help ambitious teams ship faster and grow with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-accent transition-colors"
            >
              Book Free Consultation
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-6 rounded-full border-2 border-background bg-gradient-to-br from-primary to-primary-glow"
                  />
                ))}
              </div>
              <span>50+ teams shipping with us</span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-warning text-warning" />
              <span className="font-medium text-foreground">4.9</span>
              <span>/ 5 avg rating</span>
            </div>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative animate-float">
      <div
        className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-primary/30 to-primary-glow/20 blur-3xl -z-10"
        aria-hidden
      />
      <div className="glass rounded-3xl p-5 shadow-elegant">
        <div className="flex items-center gap-1.5 pb-3 border-b border-border">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">
            codebucket.app / dashboard
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">
          <StatCard label="Revenue" value="$248k" trend="+18.2%" />
          <StatCard label="Deploys" value="1,204" trend="+42" />
          <StatCard label="Uptime" value="99.99%" trend="stable" muted />
        </div>

        <div className="mt-4 rounded-xl bg-foreground text-background p-4 font-mono text-[11px] leading-relaxed">
          <div className="text-primary-glow">$ codebucket deploy --prod</div>
          <div className="opacity-70">▸ building… 12 routes</div>
          <div className="opacity-70">▸ optimizing bundle</div>
          <div className="text-success">✓ Live in 8.2s</div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Traffic</span>
              <span className="text-[10px] text-success font-medium">▲ 24%</span>
            </div>
            <MiniChart />
          </div>
          <div className="rounded-xl border border-border p-3 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs font-semibold">AI Assistant</div>
                <div className="text-[10px] text-muted-foreground">Ready</div>
              </div>
            </div>
            <div className="text-[10px] text-muted-foreground mt-2">
              "Summarize this week's activity."
            </div>
          </div>
        </div>
      </div>

      {/* floating chips */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute -left-6 top-16 glass rounded-2xl px-3 py-2 shadow-card items-center gap-2"
      >
        <div className="h-8 w-8 rounded-lg bg-success/15 flex items-center justify-center">
          <Zap className="h-4 w-4 text-success" />
        </div>
        <div>
          <div className="text-xs font-semibold">Automation</div>
          <div className="text-[10px] text-muted-foreground">3 workflows active</div>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute -right-4 bottom-14 glass rounded-2xl px-3 py-2 shadow-card items-center gap-2"
      >
        <div className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center">
          <Bot className="h-4 w-4 text-primary" />
        </div>
        <div>
          <div className="text-xs font-semibold">GPT-4 Integrated</div>
          <div className="text-[10px] text-muted-foreground">Latency 210ms</div>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({
  label,
  value,
  trend,
  muted,
}: {
  label: string;
  value: string;
  trend: string;
  muted?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border p-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-lg font-bold">{value}</div>
      <div className={`text-[10px] font-medium ${muted ? "text-muted-foreground" : "text-success"}`}>
        {trend}
      </div>
    </div>
  );
}

function MiniChart() {
  const points = [8, 14, 10, 18, 16, 24, 22, 30, 28, 34];
  const max = Math.max(...points);
  const w = 100;
  const step = w / (points.length - 1);
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${40 - (p / max) * 34}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 40" className="mt-2 w-full h-10">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L 100 40 L 0 40 Z`} fill="url(#g)" />
      <path d={d} stroke="var(--color-primary)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ---------------- Trusted By ---------------- */

const LOGOS = [
  { src: "/client-lumetix.png", alt: "Lumetix" },
  { src: "/client-srd.png", alt: "SRD" },
  { src: "/client-cinemotion.png", alt: "Cinemotion" },
  { src: "/client-azbazar.jpg", alt: "AZ Bazar" },
  { src: "/client-mountain.jpeg", alt: "Mountain" },
  { src: "/client-iconstudios.PNG", alt: "Icon Studios" },
];

function TrustedBy() {
  const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS];
  return (
    <section className="py-14 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by teams shipping every day
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            className="flex gap-10 items-center"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            {marqueeLogos.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white rounded-xl px-5 py-3 shadow-sm flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Marketing sites, corporate, ecommerce and content platforms built on React, Next.js and WordPress.",
    tags: ["Next.js", "Ecommerce", "Landing"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "ERP, CRM, POS, HRMS, hospital and school systems tailored to how your business actually runs.",
    tags: ["ERP", "CRM", "SaaS"],
  },
  {
    icon: Layers,
    title: "Web Applications",
    desc: "React, Node, GraphQL, Supabase and Firebase — production-grade apps with auth and admin panels.",
    tags: ["React", "Node", "Supabase"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "iOS, Android, React Native and Flutter apps for delivery, business and consumer marketplaces.",
    tags: ["iOS", "Android", "Flutter"],
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    desc: "OpenAI, Gemini and Claude embedded into your workflows — chatbots, assistants, OCR and voice.",
    tags: ["OpenAI", "RAG", "Agents"],
  },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Zapier, Make and n8n workflows connecting WhatsApp, CRM, email and Google Workspace.",
    tags: ["n8n", "Zapier", "WhatsApp"],
  },
  {
    icon: Plug,
    title: "API Integration",
    desc: "Stripe, Razorpay, Shiprocket, Google Maps and any third-party API wired reliably into your stack.",
    tags: ["Stripe", "Payments", "Maps"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "AWS, Azure and GCP with Docker, CI/CD, Nginx and Cloudflare — deployed and observable.",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Design systems, dashboards, landing and mobile UI crafted in Figma, ready to ship.",
    tags: ["Figma", "Design Systems"],
  },
  {
    icon: Search,
    title: "SEO & Growth",
    desc: "Technical SEO, Core Web Vitals, schema markup and analytics that actually move the needle.",
    tags: ["SEO", "Vitals", "Schema"],
  },
  {
    icon: Mail,
    title: "Domain & Business Email",
    desc: "Domains, DNS, Google Workspace, Titan and Microsoft 365 email setup and migration.",
    tags: ["Workspace", "M365", "DNS"],
  },
  {
    icon: Shield,
    title: "Security & Support",
    desc: "SSL, hardening, monitoring, backups and 24×7 support — sleep well while we watch.",
    tags: ["SSL", "Monitoring", "24×7"],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to ship modern software."
          subtitle="From strategy to launch and beyond — one partner across design, engineering, cloud and AI."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-4 sm:p-6 hover:shadow-glow hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-default shadow-sm relative sm:sticky sm:top-[var(--sticky-top)] lg:static"
              style={{ "--sticky-top": `calc(7rem + ${i * 4}px)` } as React.CSSProperties}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 6%, transparent), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-elegant">
                  <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-3 sm:mt-5 text-sm sm:text-lg font-semibold leading-snug">{s.title}</h3>
                <p className="hidden sm:block mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-2 sm:mt-4 flex flex-wrap gap-1">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-1.5 sm:px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="hidden sm:inline-flex mt-5 items-center gap-1 text-sm font-medium text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}

/* ---------------- Why + Stats ---------------- */

const WHY = [
  "Premium Design",
  "Fast Delivery",
  "Scalable Architecture",
  "Secure Code",
  "Cloud Ready",
  "SEO Friendly",
  "AI Powered",
  "24×7 Support",
  "Dedicated Team",
  "Transparent Pricing",
  "Modern Stack",
  "Long-Term Partnership",
];

function Why() {
  return (
    <section id="about" className="py-24 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="A studio-grade team, at the speed of a startup."
            subtitle="We're the partner ambitious founders and product teams call when quality, velocity and long-term thinking all matter."
          />
          <div className="mt-8 grid sm:grid-cols-2 gap-2.5">
            {WHY.map((w, i) => (
              <motion.div 
                key={w} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-2 text-sm group cursor-default"
              >
                <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-glow">
                  <Check className="h-3 w-3" />
                </span>
                <span className="font-medium group-hover:text-primary transition-colors">{w}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <BigStat value="20+" label="Projects Delivered" />
          <BigStat value="7+" label="Happy Clients" />
          <BigStat value="99%" label="Satisfaction" />
          <BigStat value="2+" label="Countries" />
          <BigStat value="8s" label="Avg. Deploy" />
          <BigStat value="24×7" label="Support" />
        </div>
      </div>
    </section>
  );
}

function BigStat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-border bg-card p-5 text-center hover:shadow-glow hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-default group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient group-hover:scale-110 transition-transform duration-300">
        {value}
      </div>
      <div className="relative mt-1 text-xs text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

/* ---------------- Process ---------------- */

const PROCESS = [
  { icon: Search, title: "Discovery", desc: "Understand goals, users and constraints." },
  { icon: Layers, title: "Planning", desc: "Scope, architecture and delivery roadmap." },
  { icon: Palette, title: "Design", desc: "Wireframes, UI and interactive prototypes." },
  { icon: Code2, title: "Development", desc: "Sprint-based build with weekly demos." },
  { icon: Shield, title: "Testing", desc: "QA, performance and security hardening." },
  { icon: Rocket, title: "Deployment", desc: "Cloud infra, CI/CD and go-live." },
  { icon: Cpu, title: "Maintenance", desc: "Monitoring, iterations and 24×7 support." },
];

function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A calm, transparent path from idea to launch."
          subtitle="Seven steps, one dedicated team, zero surprises."
        />

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-7">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", delay: i * 0.1 }}
                className="relative group cursor-default"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-background border border-border flex items-center justify-center shadow-card relative z-10 group-hover:scale-125 group-hover:bg-primary group-hover:border-primary group-hover:shadow-glow transition-all duration-500">
                  <p.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <div className="mt-6 text-center bg-card rounded-2xl p-4 border border-border/40 group-hover:border-primary/30 group-hover:shadow-card transition-all duration-500 group-hover:-translate-y-1">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary/70 transition-colors">
                    Step {i + 1}
                  </div>
                  <div className="mt-2 font-semibold text-sm group-hover:text-primary transition-colors">{p.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {p.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio ---------------- */

const FILTERS = ["All", "Websites", "Software", "Apps", "AI", "Automation"];

const PROJECTS = [
  { title: "Nimbus Analytics", tag: "Software", tone: "from-primary to-primary-glow", span: "sm:col-span-2 sm:row-span-2", desc: "Realtime analytics dashboard for retail chains." },
  { title: "Helio Commerce", tag: "Websites", tone: "from-fuchsia-500 to-primary", span: "", desc: "Headless ecommerce on Next.js + Stripe." },
  { title: "Orbital CRM", tag: "Software", tone: "from-cyan-500 to-primary", span: "", desc: "Sales pipeline and WhatsApp automation." },
  { title: "Kite Delivery", tag: "Apps", tone: "from-primary to-emerald-500", span: "sm:col-span-2", desc: "Flutter driver + customer apps." },
  { title: "Fabrik AI", tag: "AI", tone: "from-primary-glow to-primary", span: "", desc: "RAG assistant for legal teams." },
  { title: "Quanta Ops", tag: "Automation", tone: "from-primary to-indigo-500", span: "", desc: "n8n workflows across 12 SaaS tools." },
];

function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = PROJECTS.filter((p) => active === "All" || p.tag === active);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work we're proud of."
          subtitle="A handful of recent projects across products, industries and geographies."
        />

        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-all ${
                active === f
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 auto-rows-[220px]">
          {filtered.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${p.span}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.tone} opacity-90 group-hover:opacity-100 transition-opacity`}
              />
              <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
              <div className="relative h-full p-6 flex flex-col justify-between text-white">
                <span className="self-start text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur rounded-full px-2 py-1">
                  {p.tag}
                </span>
                <div>
                  <div className="text-xl font-bold">{p.title}</div>
                  <div className="text-sm opacity-85 mt-1">{p.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    View case study <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Tech ---------------- */

const TECH = [
  "React","Next.js","Vue","Angular","Node.js","Express","NestJS",
  "MongoDB","PostgreSQL","MySQL","Firebase","Supabase","Redis",
  "Docker","AWS","Azure","GCP","Cloudflare","TailwindCSS","TypeScript",
  "GitHub","OpenAI","Stripe","Flutter","React Native",
];

function Tech() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technologies"
          title="A modern stack, chosen for longevity."
          subtitle="We use battle-tested tools that scale with your team and your traffic."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {TECH.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

const TESTIMONIALS = [
  {
    name: "Sajeel",
    role: "Founder, Lumetix",
    quote:
      "Working with this team made managing our course platform much easier. They delivered everything on time and provided great support whenever we needed help.",
  },
  {
    name: "Bilal Rahman",
    role: "Founder, SRD",
    quote:
      "Our new website looks modern and works flawlessly across all devices. We've received positive feedback from students since the launch",
  },
  {
    name: "Sajid",
    role: "Manager, AZ Bazar",
    quote:
      "They created a clean and easy-to-use website that makes it simple for our customers to browse products and promotions. The entire project was completed on time with excellent support.",
  },
  {
    name: "Razik",
    role: "Admin, Mountain Rentals",
    quote:
      "They transformed our online presence with a professional website and a strong brand identity. The workflow automation they implemented has saved our team valuable time every day.",
  },
];

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <blockquote className="rounded-2xl border border-border bg-card p-7 shadow-card h-full">
      <div className="flex gap-0.5 text-warning">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 text-lg leading-relaxed text-foreground">"{t.quote}"</p>
      <footer className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
        <div>
          <div className="text-sm font-semibold">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </footer>
    </blockquote>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by founders and product teams."
        />

        {/* Desktop grid */}
        <div className="mt-12 hidden md:grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile slideshow */}
        <div className="mt-10 md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <TestimonialCard t={TESTIMONIALS[active]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */

const PLANS = [
  {
    name: "Starter",
    price: "$1,499",
    tag: "For landing pages & MVPs",
    features: [
      "Up to 5 pages",
      "Custom design system",
      "SEO & analytics setup",
      "2 weeks delivery",
      "30 days support",
    ],
    cta: "Start with Starter",
    popular: false,
  },
  {
    name: "Business",
    price: "$4,900",
    tag: "For growing companies",
    features: [
      "Custom website or app",
      "CMS or admin panel",
      "API & payment integration",
      "Cloud deployment",
      "90 days support",
    ],
    cta: "Choose Business",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    tag: "For scale & compliance",
    features: [
      "Dedicated team",
      "Custom software / SaaS",
      "AI & automation",
      "SLA & 24×7 support",
      "Ongoing partnership",
    ],
    cta: "Talk to Sales",
    popular: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent plans. No surprises."
          subtitle="Fixed-scope engagements or dedicated teams — pick what fits your stage."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-3xl p-8 border ${
                p.popular
                  ? "bg-foreground text-background border-foreground shadow-elegant scale-[1.02]"
                  : "bg-card border-border"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-[10px] uppercase tracking-widest font-bold px-3 py-1">
                  Most Popular
                </span>
              )}
              <div className="text-sm font-medium opacity-70">{p.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <div className="text-4xl font-extrabold tracking-tight">{p.price}</div>
                {p.price !== "Custom" && (
                  <span className="text-xs opacity-60">starting</span>
                )}
              </div>
              <div className="mt-1 text-sm opacity-70">{p.tag}</div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`h-4 w-4 mt-0.5 ${
                        p.popular ? "text-primary-glow" : "text-primary"
                      }`}
                    />
                    <span className={p.popular ? "opacity-90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                  p.popular
                    ? "bg-background text-foreground hover:opacity-90"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Landing pages ship in 1–2 weeks. Full websites take 3–6 weeks. Custom software and SaaS platforms run in 6–12 week sprints with weekly demos.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Yes. We work with seed-stage founders through Series C teams and mid-market enterprises across fintech, health, ecommerce and services.",
  },
  {
    q: "How do you price projects?",
    a: "Fixed scope for well-defined projects, or a dedicated monthly team for ongoing work. Everything is transparent — no hidden line items.",
  },
  {
    q: "Do you provide hosting and ongoing support?",
    a: "We set up production infrastructure on AWS, GCP, Azure or Cloudflare, and offer 24×7 monitoring, maintenance and iteration plans.",
  },
  {
    q: "Can you help with AI and automation?",
    a: "Absolutely — OpenAI, Gemini and Claude integrations, RAG pipelines, agents, and workflow automation across WhatsApp, CRM and Google Workspace.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We sign mutual NDAs before any discovery calls and follow strict data handling practices throughout the engagement.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Answers, before you ask." />
        <div className="mt-12 rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left p-6 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </div>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-foreground text-background p-8 sm:p-14 shadow-elegant">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(600px 300px at 90% 20%, color-mix(in oklab, var(--color-primary-glow) 60%, transparent), transparent 60%), radial-gradient(500px 300px at 10% 80%, color-mix(in oklab, var(--color-primary) 40%, transparent), transparent 60%)",
            }}
          />
          <div className="relative grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-xs uppercase tracking-widest opacity-70">Contact</div>
              <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
                Ready to build your next project?
              </h2>
              <p className="mt-4 text-base opacity-80 max-w-md">
                Tell us about your idea. We'll respond within one business day
                with a plan, a timeline and a quote.
              </p>

              <div className="mt-8 space-y-4 text-sm">
                {/* <div className="flex items-center gap-3 opacity-90">
                  <Mail className="h-4 w-4 text-primary-glow shrink-0" />
                  <a href="mailto:hello@codebucket.io" className="hover:text-primary transition-colors">hello@codebucket.io</a>
                </div> */}
                <div className="flex items-start gap-3 opacity-90">
                  <Phone className="h-4 w-4 text-primary-glow shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1.5">
                    <a href="tel:+919901068874" className="hover:text-primary transition-colors">+91 9901068874</a>
                    <a href="tel:+918088319141" className="hover:text-primary transition-colors">+91 8088319141</a>
                    <a href="tel:+966576720313" className="hover:text-primary transition-colors">+966 576720313</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 opacity-90">
                  <MessageCircle className="h-4 w-4 text-primary-glow shrink-0" />
                  <a href="https://wa.me/919901068874" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Connect on WhatsApp
                  </a>
                </div>
                {/* <div className="flex items-center gap-3 opacity-90">
                  <MapPin className="h-4 w-4 text-primary-glow shrink-0" />
                  Remote-first · Serving teams globally
                </div> */}
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name") as string;
                const company = formData.get("company") as string;
                const email = formData.get("email") as string;
                const phone = formData.get("phone") as string;
                const budget = formData.get("budget") as string;
                const service = formData.get("service") as string;
                const message = formData.get("message") as string;

                const text = `*New Project Inquiry*
*Name:* ${name}
${company ? `*Company:* ${company}\n` : ""}*Email:* ${email}
${phone ? `*Phone:* ${phone}\n` : ""}${budget ? `*Budget:* ${budget}\n` : ""}${service ? `*Service:* ${service}\n` : ""}
*Message:*
${message}`;

                const encodedText = encodeURIComponent(text);
                window.open(`https://wa.me/919901068874?text=${encodedText}`, "_blank");
                setSent(true);
              }}
              className="rounded-2xl bg-background text-foreground p-6 sm:p-8"
            >
              {sent ? (
                <div className="min-h-[360px] flex flex-col items-center justify-center text-center">
                  <div className="h-14 w-14 rounded-full bg-success/15 text-success flex items-center justify-center">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Thanks — we're on it.</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                    We received your message and will reply within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name" name="name" placeholder="Full Name" required />
                    <Field label="Company" name="company" placeholder="abc Inc." />
                    <Field label="Email" name="email" type="email" placeholder="[EMAIL_ADDRESS]" required />
                    <Field label="Phone" name="phone" placeholder="+966 123456789" />
                    {/*<Field label="Budget" name="budget" placeholder="$5k – $20k" />*/}
                    <Field label="Service" name="service" placeholder="Website / App / AI" />
                  </div>
                  <div className="mt-4">
                    <label className="text-xs font-medium text-muted-foreground">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project…"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send message <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="mt-3 text-[11px] text-muted-foreground text-center">
                    By submitting, you agree to our Privacy Policy.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium text-muted-foreground">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src="/logo.png" alt="CodeBucket" className="h-12 md:h-16 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            CodeBucket is a premium software studio helping teams build, scale
            and automate with modern technology.
          </p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Github, Instagram, Facebook, Twitter].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol
          title="Company"
          links={["About", "Services", "Blog", "Careers", "Contact"]}
        />
        <FooterCol
          title="Legal"
          links={["Privacy Policy", "Terms of Service", "Cookies", "Security"]}
        />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <div>© {new Date().getFullYear()} CodeBucket. All rights reserved.</div>
          <div>Build • Scale • Automate</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Section heading + floating buttons ---------------- */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full bg-foreground text-background shadow-card flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

/* ---------------- Page ---------------- */

function Landing() {
  return (
    <main className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustedBy />
      <Services />
      <Why />
      <Process />
      {/* <Portfolio /> */}
      {/* <Tech /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/*<FAQ />*/}
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
