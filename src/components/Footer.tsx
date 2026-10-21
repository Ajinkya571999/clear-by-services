import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const pagesAndLegal = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/privacy" },
  ];

  const columnThreeServices = [
    { name: "Web & Full-Stack", href: "/services/web-fullstack" },
    { name: "Mobile App Dev", href: "/services/mobile-apps" },
    { name: "CMS & E-Commerce", href: "/services/cms-ecommerce" },
    { name: "Enterprise & QA", href: "/services/enterprise-qa" },
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "AI Marketing Services", href: "/services/ai-marketing" },
  ];

  const columnFourServices = [
    { name: "Lead Gen & Ads", href: "/services/lead-gen-performance" },
    { name: "Social Media Marketing", href: "/services/social-media" },
    { name: "Search Engine Optimisation", href: "/services/seo" },
    { name: "Influencer Marketing", href: "/services/influencer" },
    { name: "Startup Branding", href: "/services/startup-branding" },
    { name: "UI/UX & Product Design", href: "/services/ui-ux-design" },
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      href: "https://instagram.com", 
      svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> 
    },
    { 
      name: "Facebook", 
      href: "https://facebook.com", 
      svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.75V8z"/></svg> 
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com", 
      svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg> 
    },
    { 
      name: "YouTube", 
      href: "https://youtube.com", 
      svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg> 
    },
    { 
      name: "Pinterest", 
      href: "https://pinterest.com", 
      svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.223 7.462-1.214 0-2.355-.63-2.744-1.379l-.749 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg> 
    },
  ];

  return (
    <footer className="w-full bg-[var(--bg-primary)] border-t border-[var(--border-color)] pt-32 pb-28 md:pt-44 md:pb-40 transition-colors duration-300 relative overflow-hidden">
      
      {/* Giant Background Watermark Text Effect with deep vertical padding buffer */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <span className="text-[14vw] font-black tracking-tighter text-[var(--text-primary)] opacity-[0.03] uppercase whitespace-nowrap">
          Clearby
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-12 mb-20">
          
          {/* COLUMN 1: Logo, Contact Info & Socials */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-start space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/dark-favcon.png" 
                alt="Clearby Services Logo" 
                className="w-10 h-10 object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform block dark:hidden [.dark_&]:hidden" 
              />
              <img 
                src="/light-favcon.png" 
                alt="Clearby Services Logo" 
                className="w-10 h-10 object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform hidden dark:block [.dark_&]:block" 
              />
              <span className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                Clearby <span className="text-[var(--accent-action)]">Services</span>
              </span>
            </Link>

            <div className="space-y-4 text-xs text-[var(--text-body)]">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[var(--accent-action)] shrink-0 mt-0.5" />
                <a href="mailto:contact@clearbyservices.com" className="hover:text-[var(--accent-action)] transition">
                  contact@clearbyservices.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--accent-action)] shrink-0 mt-0.5" />
                <a href="tel:+917020112146" className="hover:text-[var(--accent-action)] transition">
                  +91-7020 112146
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--accent-action)] shrink-0 mt-0.5" />
                <span className="leading-relaxed opacity-90">
                  VJ Indilife Sus-Pashan Road, Vardayani Society, Sutarwadi, Pashan Pune, Maharashtra 411021
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((soc, sIdx) => (
                <a 
                  key={sIdx} 
                  href={soc.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={soc.name}
                  className="p-2 rounded-full bg-[var(--text-primary)]/5 border border-[var(--border-color)] text-[var(--text-body)] hover:text-[var(--accent-action)] hover:border-[var(--accent-action)] transition-all"
                >
                  {soc.svg}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Pages & Legal */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-6 tracking-wide">
              Pages & Legal
            </h3>
            <ul className="space-y-3">
              {pagesAndLegal.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    className="text-xs md:text-sm text-[var(--text-body)] hover:text-[var(--accent-action)] transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Services (Tech & AI) */}
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-6 tracking-wide">
              Services (Tech & AI)
            </h3>
            <ul className="space-y-3">
              {columnThreeServices.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    className="text-xs md:text-sm text-[var(--text-body)] hover:text-[var(--accent-action)] transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Services (Marketing & Design) */}
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-6 tracking-wide">
              Services (Marketing & Design)
            </h3>
            <ul className="space-y-3">
              {columnFourServices.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    className="text-xs md:text-sm text-[var(--text-body)] hover:text-[var(--accent-action)] transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* COPYRIGHT BOTTOM BAR */}
        <div className="border-t border-[var(--border-color)] pt-8 mt-16 flex flex-col sm:flex-row justify-between items-center text-xs text-[var(--text-body)] opacity-80">
          <p>© copyright Clearby Services {new Date().getFullYear()}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Digital agency platform built for high-performance execution.</p>
        </div>

      </div>
    </footer>
  );
}