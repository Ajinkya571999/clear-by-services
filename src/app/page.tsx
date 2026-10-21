"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import NumberTicker from "@/components/NumberTicker";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const typewriterWords = [
    "Web Experiences",
    "Mobile Apps",
    "AI Solutions",
    "Blockchain dApps",
    "Performance Marketing"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(130);

  useEffect(() => {
    const fullText = typewriterWords[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(80);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
          setTypingSpeed(130);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const coreServices = [
    {
      title: "Development",
      tagline: "Build. Scale. Dominate.",
      desc: "Websites, web applications and mobile apps, built to scale with your business.",
      link: "/services",
      disciplines: ["Web Development", "Mobile App Development", "AI & Machine Learning", "Cloud & DevOps", "Cybersecurity"]
    },
    {
      title: "Digital Marketing",
      tagline: "Grow. Engage. Convert.",
      desc: "Search, paid, social and creator marketing, measured on what it returns, including SEO, AEO & GEO.",
      link: "/services",
      disciplines: ["SEO, AEO & GEO", "Performance Marketing", "Social Media Management", "Influencer Marketing"]
    },
    {
      title: "Blockchain & Web3",
      tagline: "The Future Is Decentralized.",
      desc: "Decentralized applications, smart contracts and digital asset platforms, audited for security.",
      link: "/services",
      disciplines: ["Smart Contracts", "dApps", "NFT Platforms", "Security Audits"]
    },
    {
      title: "Designing",
      tagline: "Design That Gets Remembered.",
      desc: "From the logo up: brand identity, interface design and everyday marketing collateral.",
      link: "/services",
      disciplines: ["UI/UX Design", "Brand Identity & Logo Design", "Graphic Design", "Website Design"]
    }
  ];

  return (
    <main className="flex flex-col w-full bg-[var(--bg-primary)] text-[var(--text-body)] overflow-x-hidden font-sans transition-colors duration-300 min-h-screen">
      
      <style jsx global>{`
        /* Dynamic gradient that automatically uses your CSS variables via color-mix */
        .landing-hero {
          position: relative;
          background: radial-gradient(ellipse 80% 60% at 50% -10%, color-mix(in srgb, var(--text-primary) 5%, transparent) 0%, color-mix(in srgb, var(--text-primary) 2%, transparent) 50%, transparent 100%), var(--bg-primary);
        }

        .typewriter-cursor {
          display: inline-block;
          width: 2.5px;
          height: 1.1em;
          background-color: var(--accent-action);
          margin-left: 2px;
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="landing-hero py-24 sm:py-32 overflow-hidden flex items-center min-h-[90vh] relative">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--accent-action)]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[var(--text-primary)]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* LEFT COLUMN: Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Soft translucent pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--text-primary)]/5 border border-[var(--border-color)] text-[var(--text-primary)] mb-8 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[var(--accent-action)] animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">
                Comprehensive Tech & Digital Marketing
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-[var(--text-primary)]">
              Transform Your <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent-action)] bg-clip-text text-transparent italic pr-2">Digital Future,</span><br/>
              <span className="inline-block min-w-[20px]">{currentText}</span>
              <span className="typewriter-cursor"></span>
            </h1>

            <p className="text-[var(--text-body)] text-base md:text-lg mb-10 max-w-xl leading-relaxed opacity-90 font-medium">
              Your trusted partner for <strong>Web & Mobile Apps</strong>, <strong>Blockchain & AI</strong>, and expert <strong>Performance Marketing</strong>.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-12 w-full">
              <Link 
                href="/contact" 
                className="bg-[var(--accent-action)] text-[var(--bg-primary)] font-bold py-4 px-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:opacity-90 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 text-sm flex items-center gap-2 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services" 
                className="bg-[var(--text-primary)]/5 hover:bg-[var(--text-primary)]/10 border border-[var(--border-color)] text-[var(--text-primary)] font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-sm backdrop-blur-sm shadow-sm"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-4 bg-[var(--text-primary)]/5 px-6 py-4 rounded-2xl border border-[var(--border-color)] backdrop-blur-sm">
              <div className="flex -space-x-3">
                {[12, 32, 44].map((id, index) => (
                  <img key={index} src={`https://i.pravatar.cc/150?u=${id}`} alt="Client" className="w-8 h-8 rounded-full border-2 border-[var(--bg-primary)]" />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-0.5">Trusted by 50+ Brands</span>
                <span className="text-[11px] text-[var(--text-body)] opacity-80">Accepting new projects this month.</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Floating Logo Centerpiece */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center items-center w-full mt-12 lg:mt-0 h-full min-h-[400px]"
          >
            {/* Inner Floating Animation */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-20 flex items-center justify-center w-full max-w-sm lg:max-w-md aspect-square group"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-[var(--accent-action)]/20 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-[var(--text-primary)]/10 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Main Glassmorphic Logo Container */}
              <div className="relative w-3/4 h-3/4 bg-[var(--bg-primary)]/40 rounded-full p-12 border border-[var(--border-color)] backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden group-hover:border-[var(--accent-action)]/50 transition-colors duration-500">
                
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-action)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* LIGHT MODE LOGO (Hides instantly when .dark is present) */}
                <img 
                  src="/light-favcon.png" 
                  alt="Clearby Services" 
                  className="w-full h-full object-contain drop-shadow-xl relative z-10 transform group-hover:scale-110 transition-transform duration-500 block dark:hidden [.dark_&]:hidden" 
                />
                
                {/* DARK MODE LOGO (Shows instantly when .dark is present) */}
                <img 
                  src="/dark-favcon.png" 
                  alt="Clearby Services" 
                  className="w-full h-full object-contain drop-shadow-xl relative z-10 transform group-hover:scale-110 transition-transform duration-500 hidden dark:block [.dark_&]:block" 
                />
              </div>

              {/* Floating Decorative Badges (Tech Stack / Services) */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 -right-4 bg-[var(--card-bg)] border border-[var(--border-color)] px-4 py-2 rounded-xl shadow-lg backdrop-blur-md"
              >
                <span className="text-xs font-bold text-[var(--text-primary)]">🚀 Web3 Ready</span>
              </motion.div>

              <motion.div 
                animate={{ y: [5, -5, 5] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-16 -left-8 bg-[var(--card-bg)] border border-[var(--border-color)] px-4 py-2 rounded-xl shadow-lg backdrop-blur-md"
              >
                <span className="text-xs font-bold text-[var(--accent-action)]">AI Automation</span>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="w-full bg-[var(--text-primary)]/5 text-[var(--text-primary)] py-16 border-y border-[var(--border-color)] transition-colors backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 80, suffix: "+", label: "Projects Delivered", decimals: 0 },
            { value: 50, suffix: "+", label: "Clients Worldwide", decimals: 0 },
            { value: 4.9, suffix: "", label: "Client Rating", decimals: 1 },
            { value: 24, suffix: " hrs", label: "Response Time", decimals: 0 }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
                {/* Ticker Replaces Static Number */}
                <NumberTicker 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals}
                  delay={idx * 0.15} // Staggers the counting start time
                />
              </h3>
              <p className="text-xs uppercase tracking-widest text-[var(--text-body)] opacity-80 font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES GRID */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] transition-colors">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block">WHAT WE DO</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Powerful solutions we create
          </h2>
          <p className="text-[var(--text-body)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">From MVPs to enterprise platforms, here is what we are equipped to build. Each project is customized to your exact requirements.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreServices.map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[var(--text-primary)]/5 backdrop-blur-sm p-8 md:p-10 border border-[var(--border-color)] shadow-sm hover:shadow-xl hover:border-[var(--accent-action)] transition-all duration-300 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase bg-[var(--accent-action)]/10 px-3 py-1 rounded-full">
                    0{idx + 1} / {srv.title}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-action)] transition-colors">{srv.title}</h3>
                <p className="text-sm md:text-base text-[var(--text-primary)] font-bold mb-4">{srv.tagline}</p>
                <p className="text-sm text-[var(--text-body)] opacity-90 mb-8 leading-relaxed">{srv.desc}</p>
                
                <div className="border-t border-[var(--border-color)] pt-6 mb-8">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-body)] mb-3">Key Disciplines:</p>
                  <div className="flex flex-wrap gap-2">
                    {srv.disciplines.map((disc, dIdx) => (
                      <span key={dIdx} className="text-xs font-medium bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-1.5 rounded-full text-[var(--text-body)] shadow-sm">
                        {disc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Link href={srv.link} className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-action)] uppercase tracking-wider transition-colors inline-flex items-center gap-2 mt-auto">
                Explore {srv.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--text-primary)]/5 border-y border-[var(--border-color)] transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-8 leading-tight">
              Why Businesses Choose Clearby Services
            </h2>
            <div className="space-y-6 text-base md:text-lg text-[var(--text-body)]">
              {[
                "Modern Tech Expertise: React, Next.js, Node, Python & Blockchain",
                "Competitive Pricing: Premium quality with transparent cost structures",
                "Fast Delivery: Agile sprints and weekly progress updates",
                "Dedicated Support: Direct access to developers, no middlemen"
              ].map((item, i) => (
                <div key={i} className="border-b border-[var(--border-color)] pb-5 flex items-start gap-4 transition-colors hover:text-[var(--accent-action)] font-medium group">
                  <div className="bg-[var(--accent-action)]/10 p-1 rounded-full shrink-0 group-hover:bg-[var(--accent-action)] transition-colors mt-0.5">
                     <CheckCircle2 className="w-5 h-5 text-[var(--accent-action)] group-hover:text-[var(--bg-primary)]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-primary)] p-4 border border-[var(--border-color)] shadow-xl rounded-3xl overflow-hidden group"
          >
            <img src="/Why-Choose.png" alt="Clearby Services Why Choose Us" className="w-full h-auto object-cover rounded-2xl filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
          </motion.div>
        </div>
      </section>

      {/* 5. ABOUT COMPANY */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-[var(--text-primary)]/5 p-4 border border-[var(--border-color)] shadow-xl rounded-3xl overflow-hidden group order-2 lg:order-1">
            <img src="/About.png" alt="Clearby Services About" className="w-full h-auto object-cover rounded-2xl filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block">ABOUT CLEARBY SERVICES</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6 leading-tight">
              Digital Engineering & Growth Partner
            </h2>
            <p className="text-[var(--text-body)] text-base md:text-lg leading-relaxed mb-6">
              Clearby Services is a full-service digital agency delivering high-performance web development, mobile apps, AI automation, and performance marketing. We combine technical rigor with strategic marketing to build products that drive measurable business growth.
            </p>
            <p className="text-[var(--text-body)] text-base md:text-lg leading-relaxed">
              From planning through launch and ongoing optimization, our team works closely with you via weekly progress updates and live staging environments.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK (4-STEP PROCESS) */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--text-primary)]/5 border-t border-[var(--border-color)] transition-colors">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block">PROCESS</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">How a project moves</h2>
          <p className="text-[var(--text-body)] text-base md:text-lg max-w-2xl mx-auto">Four steps, weekly progress updates and a live staging environment.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery & Strategy", desc: "Requirements gathering, market research, and timeline planning." },
            { step: "02", title: "Design & Prototype", desc: "UI/UX wireframes, interactive mockups, and system design." },
            { step: "03", title: "Development & Testing", desc: "Clean typed code, sprint updates, automated testing, and QA." },
            { step: "04", title: "Launch & Support", desc: "Deployment setup, performance optimization, and 3 months free support." },
          ].map((st, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-[var(--bg-primary)] p-8 border border-[var(--border-color)] rounded-3xl relative flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[var(--accent-action)] transition-all duration-300"
            >
              <div>
                <span className="text-5xl font-bold text-[var(--text-primary)]/5 absolute top-6 right-6 select-none">{st.step}</span>
                <span className="text-[10px] font-bold text-[var(--accent-action)] tracking-widest block mb-4">STAGE {idx + 1}</span>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 relative z-10">{st.title}</h3>
                <p className="text-sm text-[var(--text-body)] leading-relaxed relative z-10">{st.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] transition-colors">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-3 block text-center">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          {/* Minimalist Accordion List */}
          <div className="space-y-2">
            {[
              {
                q: "What services does Clearby Services provide?",
                a: "Clearby Services provides full-service IT solutions including web and mobile app development, AI & machine learning, blockchain & web3, cloud DevOps, cybersecurity, and digital marketing."
              },
              {
                q: "What is your typical project timeline?",
                a: "Timelines depend on scope and complexity. We break every project into sprints with demo checkpoints so you see real progress throughout via live staging environments."
              },
              {
                q: "Does Clearby Services offer post-launch support?",
                a: "Yes, every project includes a complimentary three-month post-launch support window covering bug fixes, minor adjustments, and performance monitoring."
              },
              {
                q: "How do I get started?",
                a: "Simply schedule a free consultation or fill out our project enquiry form. We'll discuss your goals and provide a detailed proposal within 24 hours."
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="border-b border-[var(--border-color)] last:border-b-0 group"
              >
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full py-6 text-left flex justify-between items-center cursor-pointer"
                  aria-expanded={openFaq === idx}
                >
                  <span className={`text-lg font-medium transition-colors duration-300 pr-8 ${openFaq === idx ? "text-[var(--accent-action)]" : "text-[var(--text-primary)] group-hover:text-[var(--accent-action)]"}`}>
                    {faq.q}
                  </span>
                  
                  {/* Animated + / - Icon */}
                  <div className="relative w-4 h-4 flex items-center justify-center shrink-0">
                    {/* Horizontal Line (Always stays flat) */}
                    <span 
                      className={`absolute w-full h-[2px] rounded-full transition-colors duration-300 ${
                        openFaq === idx ? "bg-[var(--accent-action)]" : "bg-[var(--text-body)] group-hover:bg-[var(--accent-action)]"
                      }`}
                    ></span>
                    
                    {/* Vertical Line (Rotates 90 degrees to form a minus sign when open) */}
                    <span 
                      className={`absolute w-full h-[2px] rounded-full transition-all duration-300 ${
                        openFaq === idx 
                          ? "bg-[var(--accent-action)] rotate-0" 
                          : "bg-[var(--text-body)] rotate-90 group-hover:bg-[var(--accent-action)]"
                      }`}
                    ></span>
                  </div>
                </button>
                
                {/* Smooth Expandable Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === idx ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base text-[var(--text-body)] leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 8. FINAL BOTTOM CTA BANNER WITH LAMP EFFECT */}
      <LampContainer>
        <motion.div 
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center max-w-4xl mx-auto px-4 relative z-50"
        >
          {/* Note: Keeping explicit white text here because the Lamp Container creates a dark glowing background internally */}
          <span className="text-xs font-bold text-white/70 tracking-widest uppercase block mb-4">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Lets build something together
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your project. Free consultation, no obligation, and a reply within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link 
              href="/contact" 
              className="bg-[var(--accent-action)] text-[var(--bg-primary)] font-bold py-4 px-10 rounded-full hover:opacity-90 transition-opacity text-sm shadow-[0_0_20px_rgba(2,132,199,0.4)] flex items-center gap-2 group"
            >
              Get Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services" 
              className="border border-white/30 text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-colors text-sm backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </LampContainer>

    </main>
  );
}