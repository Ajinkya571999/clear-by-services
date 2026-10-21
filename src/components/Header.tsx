"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, PhoneCall, Sun, Moon, ArrowRight } from "lucide-react";

// Helper component for desktop dropdown links
const MenuLink = ({ href, title, desc }: { href: string, title: string, desc: string }) => (
  <Link href={href} className="group block mb-5 last:mb-0">
    <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-action)] transition-colors">
      {title}
    </div>
    <div className="text-[11px] text-[var(--text-body)] opacity-80 mt-1">
      {desc}
    </div>
  </Link>
);

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  // Sync state with HTML root class on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setDarkMode(isDark);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Fast theme toggle
  const toggleTheme = () => {
    const root = document.documentElement;
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)] sticky top-0 z-[100] transition-colors duration-200 flex flex-col">
      
      {/* --- DIV 1: TOP ACTION BAR --- */}
      <div className="hidden xl:flex justify-end items-center gap-6 px-4 sm:px-6 lg:px-8 py-2.5 border-b border-[var(--border-color)] bg-[var(--card-bg)]">
        <a 
          href="tel:+917020112146" 
          className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent-action)] transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[var(--accent-action)] animate-pulse" />
          <span>+91-7020112146</span>
        </a>

        <div className="h-4 w-px bg-[var(--border-color)]"></div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-[var(--text-primary)] hover:opacity-70 transition cursor-pointer flex items-center gap-2 text-xs font-semibold"
          aria-label="Toggle Theme"
        >
          {darkMode ? (
            <><Sun className="w-3.5 h-3.5" /> Light Mode</>
          ) : (
            <><Moon className="w-3.5 h-3.5 text-[var(--accent-action)]" /> Dark Mode</>
          )}
        </button>

        <div className="h-4 w-px bg-[var(--border-color)]"></div>

        <Link 
          href="/contact" 
          className="bg-[var(--accent-action)] text-[var(--bg-primary)] px-4 py-1.5 text-xs font-bold hover:opacity-90 transition rounded-sm shadow-sm"
        >
          Get Free Consultation
        </Link>
      </div>

      {/* --- DIV 2: MAIN NAVIGATION BAR --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src={darkMode ? "/dark-favcon.png" : "/light-favcon.png"} 
                alt="Clearby Services Logo" 
                className="w-14 h-14 object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform" 
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-serif font-bold text-[var(--text-primary)] leading-tight group-hover:text-[var(--accent-action)] transition">
                  Clearby <span className="text-[var(--accent-action)]">Services</span>
                </span>
                <span className="text-[10px] tracking-widest text-[var(--text-body)] uppercase font-sans">Digital Marketing Agency</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-8 text-sm font-medium text-[var(--text-body)]">
            <Link 
              href="/" 
              className={`transition py-2 ${isActive("/") ? "text-[var(--text-primary)] font-semibold border-b-2 border-[var(--accent-action)]" : "hover:text-[var(--accent-action)]"}`}
            >
              Home
            </Link>

            {/* Menu 1: Engineering & AI */}
            <div className="relative group py-8 -my-8 cursor-pointer">
              <span className="transition flex items-center gap-1 hover:text-[var(--accent-action)]">
                Engineering & AI
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </span>
              <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-[500px] bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-2xl rounded-b-lg hidden group-hover:block z-[110] overflow-hidden">
                <div className="p-6 grid grid-cols-2 gap-x-6 bg-[var(--card-bg)] text-left">
                  <div>
                    <MenuLink href="/services/web-fullstack" title="Web & Full-Stack" desc="React, Next.js, Node.js & Cloud DevOps." />
                    <MenuLink href="/services/mobile-apps" title="Mobile App Dev" desc="Flutter, Native iOS/Android & ASO." />
                    <MenuLink href="/services/cms-ecommerce" title="CMS & E-Commerce" desc="Shopify, WooCommerce & Headless CMS." />
                    <MenuLink href="/services/enterprise-systems" title="Enterprise Systems" desc="Custom CRM, ERP & SaaS Products." />
                  </div>
                  <div>
                    <MenuLink href="/services/ai-automation" title="AI & Automation" desc="Custom LLMs, RAG & Workflow Bots." />
                    <MenuLink href="/services/data-cybersecurity" title="Data & Security" desc="BI Dashboards & Penetration Testing." />
                    <MenuLink href="/services/blockchain-web3" title="Blockchain & Web3" desc="Smart Contracts & dApp Development." />
                  </div>
                </div>
              </div>
            </div>

            {/* Menu 2: Marketing & Growth */}
            <div className="relative group py-8 -my-8 cursor-pointer">
              <span className="transition flex items-center gap-1 hover:text-[var(--accent-action)]">
                Marketing & Growth
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </span>
              <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-[320px] bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-2xl rounded-b-lg hidden group-hover:block z-[110] overflow-hidden">
                <div className="p-6 flex flex-col bg-[var(--card-bg)] text-left">
                  <MenuLink href="/services/lead-gen-ads" title="Lead Gen & Performance" desc="Meta Ads, WhatsApp & Voice Calls." />
                  <MenuLink href="/services/social-media-influencer" title="Social & Influencers" desc="Profile Growth & Viral Campaigns." />
                  <MenuLink href="/services/seo-services" title="Search Engine Optimisation" desc="Data-Driven SEO for maximum reach." />
                  <MenuLink href="/services/ai-marketing" title="AI Marketing Services" desc="AI Callers, Videos & Graphics." />
                  <MenuLink href="/services/business-consulting" title="Business Consulting" desc="Strategy, Pitch Decks & Growth Planning." />
                </div>
              </div>
            </div>

            {/* Menu 3: Design & Media */}
            <div className="relative group py-8 -my-8 cursor-pointer">
              <span className="transition flex items-center gap-1 hover:text-[var(--accent-action)]">
                Design & Media
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </span>
              <div className="absolute top-[calc(100%-8px)] right-0 w-[320px] bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-2xl rounded-b-lg hidden group-hover:block z-[110] overflow-hidden">
                <div className="p-6 flex flex-col bg-[var(--card-bg)] text-left">
                  <MenuLink href="/services/startup-branding" title="Startup Branding" desc="Logo, GMB & Business Identity Setup." />
                  <MenuLink href="/services/ui-ux-design" title="UI/UX & Product Design" desc="Figma, Wireframing & Design Systems." />
                  <MenuLink href="/services/graphic-printing" title="Graphic & Printing" desc="Brochures, Profiles & Corporate Collateral." />
                  <MenuLink href="/services/photography-video" title="Photography & Video" desc="Model Shoots, TV Ads & Event Media." />
                  <MenuLink href="/services/ar-vr-spatial" title="AR / VR Experiences" desc="Virtual Tours & 3D Web Experiences." />
                </div>
              </div>
            </div>

            <Link href="/work" className={`transition py-2 ${isActive("/work") ? "text-[var(--text-primary)] font-semibold border-b-2 border-[var(--accent-action)]" : "hover:text-[var(--accent-action)]"}`}>Work</Link>
            <Link href="/blog" className={`transition py-2 ${isActive("/blog") ? "text-[var(--text-primary)] font-semibold border-b-2 border-[var(--accent-action)]" : "hover:text-[var(--accent-action)]"}`}>Blog</Link>
            <Link href="/about" className={`transition py-2 ${isActive("/about") ? "text-[var(--text-primary)] font-semibold border-b-2 border-[var(--accent-action)]" : "hover:text-[var(--accent-action)]"}`}>About</Link>
            <Link href="/contact" className={`transition py-2 ${isActive("/contact") ? "text-[var(--text-primary)] font-semibold border-b-2 border-[var(--accent-action)]" : "hover:text-[var(--accent-action)]"}`}>Contact</Link>
          </nav>

          {/* Mobile Controls (Only visible on small screens) */}
          <div className="flex xl:hidden items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--card-bg)] text-[var(--text-primary)] cursor-pointer border border-[var(--border-color)] hover:border-[var(--accent-action)]"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[var(--accent-action)]" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--text-primary)] p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)] shadow-2xl max-h-[85vh] overflow-y-auto px-6 py-6 space-y-4 z-[110] text-[var(--text-primary)]">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold py-1 hover:text-[var(--accent-action)]">Home</Link>

          {/* Mobile Accordion 1 */}
          <div>
            <button 
              onClick={() => toggleSection("engineering")}
              className="w-full flex justify-between items-center text-sm font-semibold py-1 hover:text-[var(--accent-action)] cursor-pointer"
            >
              <span>Engineering & AI</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "engineering" ? "rotate-180" : ""}`} />
            </button>
            {openSection === "engineering" && (
              <div className="pl-4 pt-2 space-y-3 border-l-2 border-[var(--accent-action)] ml-2 my-2 text-xs">
                <Link href="/services/web-fullstack" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">Web & Full-Stack Dev</Link>
                <Link href="/services/mobile-apps" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">Mobile App Development</Link>
                <Link href="/services/cms-ecommerce" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">CMS & E-Commerce</Link>
                <Link href="/services/enterprise-systems" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">Enterprise Systems</Link>
                <Link href="/services/ai-automation" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">AI & Automation</Link>
                <Link href="/services/data-cybersecurity" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">Data & Cybersecurity</Link>
                <Link href="/services/blockchain-web3" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">Blockchain & Web3</Link>
              </div>
            )}
          </div>

          {/* Mobile Accordion 2 */}
          <div>
            <button 
              onClick={() => toggleSection("marketing")}
              className="w-full flex justify-between items-center text-sm font-semibold py-1 hover:text-[var(--accent-action)] cursor-pointer"
            >
              <span>Marketing & Growth</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "marketing" ? "rotate-180" : ""}`} />
            </button>
            {openSection === "marketing" && (
              <div className="pl-4 pt-2 space-y-3 border-l-2 border-[var(--accent-action)] ml-2 my-2 text-xs">
                <Link href="/services/lead-gen-ads" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">Lead Gen & Ads</Link>
                <Link href="/services/social-media-influencer" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">Social & Influencers</Link>
                <Link href="/services/seo-services" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">Search Engine Optimisation</Link>
                <Link href="/services/ai-marketing" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">AI Marketing Services</Link>
                <Link href="/services/business-consulting" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">Business Consulting</Link>
              </div>
            )}
          </div>

          {/* Mobile Accordion 3 */}
          <div>
            <button 
              onClick={() => toggleSection("design")}
              className="w-full flex justify-between items-center text-sm font-semibold py-1 hover:text-[var(--accent-action)] cursor-pointer"
            >
              <span>Design & Media</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "design" ? "rotate-180" : ""}`} />
            </button>
            {openSection === "design" && (
              <div className="pl-4 pt-2 space-y-3 border-l-2 border-[var(--accent-action)] ml-2 my-2 text-xs">
                <Link href="/services/startup-branding" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">Startup Branding</Link>
                <Link href="/services/ui-ux-design" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">UI/UX & Product Design</Link>
                <Link href="/services/graphic-printing" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">Graphic & Printing</Link>
                <Link href="/services/photography-video" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">Photography & Video</Link>
                <Link href="/services/ar-vr-spatial" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[var(--accent-action)]">AR / VR Experiences</Link>
              </div>
            )}
          </div>

          <Link href="/work" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold py-1 hover:text-[var(--accent-action)] mt-2">Work</Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold py-1 hover:text-[var(--accent-action)]">Blog</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold py-1 hover:text-[var(--accent-action)]">About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold py-1 hover:text-[var(--accent-action)]">Contact</Link>

          <div className="pt-4 pb-2 space-y-3">
            <a 
              href="tel:+917020112146" 
              className="flex items-center justify-center gap-2 w-full bg-[var(--card-bg)] border border-[var(--border-color)] py-2.5 text-xs font-semibold rounded-sm text-[var(--text-primary)] hover:border-[var(--accent-action)] transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[var(--accent-action)]" />
              <span>Call: +91-7020112146</span>
            </a>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-center bg-[var(--accent-action)] text-[var(--bg-primary)] py-3 text-sm font-semibold rounded-sm shadow-md"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}