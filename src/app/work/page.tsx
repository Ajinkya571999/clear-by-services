import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Our Work | Clearby Services',
  description: 'Explore our portfolio of high-performance web applications, AI automations, and data-driven marketing campaigns.',
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] overflow-hidden pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-24 md:pt-32 pb-16 px-4 max-w-7xl mx-auto text-center flex flex-col items-center">
        
       

        {/* Hero Typography */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-[var(--text-primary)] leading-tight">
          High-performance <span className="text-[var(--accent-action)]">digital engineering</span> & growth
        </h1>
        
        <p className="text-base md:text-xl text-[var(--text-body)] max-w-2xl mb-10 leading-relaxed">
          Explore our portfolio of enterprise-grade web applications, custom AI automations, and data-driven marketing campaigns built for scalable growth.
        </p>

        {/* CTA Button */}
        <Link 
          href="/contact" 
          className="bg-[var(--accent-action)] text-[var(--bg-primary)] px-8 py-4 rounded-sm text-sm md:text-base font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
        >
          Get Free Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* --- TRUSTED BRANDS MARQUEE --- */}
      <section className="py-12 border-y border-[var(--border-color)] bg-[var(--card-bg)] opacity-90 overflow-hidden relative">
        <p className="text-center text-xs md:text-sm font-medium text-[var(--text-body)] mb-8 uppercase tracking-widest">
          Trusted by fast-growing brands
        </p>
        
        {/* Simple infinite scroll container */}
        <div className="flex w-full overflow-hidden relative group">
          <div className="flex space-x-12 md:space-x-24 animate-marquee whitespace-nowrap items-center w-max px-4">
            {/* Duplicate list twice for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex space-x-12 md:space-x-24 items-center opacity-60">
                <span className="text-xl md:text-2xl font-bold font-serif text-[var(--text-primary)]">Gamity</span>
                <span className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">Host IT</span>
                <span className="text-xl md:text-2xl font-bold font-mono text-[var(--text-primary)]">Asteroid Kit</span>
                <span className="text-xl md:text-2xl font-bold tracking-tighter text-[var(--text-primary)]">Acme Corp</span>
                <span className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">Stratos</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STAGGERED IMAGE GRID --- */}
      <section className="pt-16 md:pt-24 px-4 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-start">
          
          {/* Column 1: Marketing & Analytics */}
          <div className="flex flex-col gap-4 md:gap-6 mt-12 md:mt-32">
            <ProjectImage src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" title="Performance Marketing" />
            <ProjectImage src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" title="Data Dashboards" />
          </div>
          
          {/* Column 2: Web Apps & Platforms */}
          <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-16">
            <ProjectImage src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop" title="UI/UX Design" />
            <ProjectImage src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" title="Web Applications" />
          </div>

          {/* Column 3: AI & Tech (Center - Highest) */}
          <div className="flex flex-col gap-4 md:gap-6">
            <ProjectImage src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop" title="AI Automation" />
            <ProjectImage src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop" title="Enterprise Systems" />
            <ProjectImage src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=600&auto=format&fit=crop" title="Brand Identity" />
          </div>

          {/* Column 4: Mobile & E-Commerce */}
          <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-16 hidden md:flex">
            <ProjectImage src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop" title="Mobile App Dev" />
            <ProjectImage src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop" title="E-Commerce Setup" />
          </div>

          {/* Column 5: Branding & Media */}
          <div className="flex flex-col gap-4 md:gap-6 mt-12 md:mt-32 hidden md:flex">
            <ProjectImage src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" title="Content Production" />
            <ProjectImage src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop" title="Business Consulting" />
          </div>
          
        </div>
      </section>
    </div>
  );
}

// Reusable Image Component with Hover Effects
function ProjectImage({ src, title }: { src: string, title: string }) {
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-[var(--border-color)]">
      <img 
        src={src} 
        alt={title} 
        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
        loading="lazy"
      />
      {/* Overlay with Project Title */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
        <span className="text-white text-sm md:text-base font-bold mb-2">{title}</span>
        <span className="text-white/80 text-xs font-medium px-4 py-1.5 border border-white/30 rounded-full backdrop-blur-sm">View Project</span>
      </div>
    </div>
  );
}