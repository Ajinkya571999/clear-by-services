"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Code, Megaphone, Palette, Cpu, Rocket, Camera, Briefcase, Layout, Layers, ArrowRight 
} from "lucide-react";

interface ServiceItem {
  slug: string;
  title: string;
  category: string;
  desc: string;
}

export default function ServicesFilters({ services = [] }: { services?: ServiceItem[] }) {
  const safeServices = Array.isArray(services) ? services : [];
  const [activeFilter, setActiveFilter] = useState("All");

  // Extract unique categories safely
  const uniqueCategories = Array.from(new Set(safeServices.map(s => s.category).filter(Boolean)));
  const filters = ['All', ...uniqueCategories];

  // Filter services safely handling case sensitivity
  const filteredServices = activeFilter === 'All' 
    ? safeServices 
    : safeServices.filter(service => service.category?.trim().toLowerCase() === activeFilter.trim().toLowerCase());

  // Dynamically assign icons based on the category name
  const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("tech") || cat.includes("dev") || cat.includes("web") || cat.includes("app")) return <Code className="w-5 h-5" />;
    if (cat.includes("market") || cat.includes("seo") || cat.includes("lead")) return <Megaphone className="w-5 h-5" />;
    if (cat.includes("ai") || cat.includes("automation") || cat.includes("data")) return <Cpu className="w-5 h-5" />;
    if (cat.includes("startup") || cat.includes("setup")) return <Rocket className="w-5 h-5" />;
    if (cat.includes("graphic") || cat.includes("print")) return <Palette className="w-5 h-5" />;
    if (cat.includes("ui") || cat.includes("ux") || cat.includes("design")) return <Layout className="w-5 h-5" />;
    if (cat.includes("photo") || cat.includes("video") || cat.includes("media")) return <Camera className="w-5 h-5" />;
    if (cat.includes("consult")) return <Briefcase className="w-5 h-5" />;
    return <Layers className="w-5 h-5" />;
  };

  return (
    <>
      {/* 2. CATEGORY FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 text-xs font-semibold border rounded-full transition-all duration-300 shadow-sm cursor-pointer ${
                activeFilter === filter 
                  ? 'bg-[var(--accent-action)] text-[var(--bg-primary)] border-[var(--accent-action)] shadow-md scale-105' 
                  : 'bg-[var(--card-bg)] text-[var(--text-primary)] border-[var(--border-color)] hover:border-[var(--accent-action)] hover:text-[var(--accent-action)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-[var(--card-bg)] p-8 border border-[var(--border-color)] shadow-xl rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-[var(--accent-action)] hover:shadow-2xl hover:-translate-y-1.5 group relative overflow-hidden"
              >
                {/* Subtle background glow effect on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-action)]/5 rounded-full blur-3xl group-hover:bg-[var(--accent-action)]/10 transition-colors pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent-action)] flex items-center justify-center rounded-xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {getCategoryIcon(service.category)}
                  </div>
                  <span className="text-[10px] font-bold text-[var(--accent-action)] tracking-widest mb-3 uppercase block">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-action)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-body)] mb-8 leading-relaxed opacity-90 line-clamp-3">
                    {service.desc}
                  </p>
                </div>
                
                <Link 
                  href={`/services/${service.slug}`} 
                  className="relative z-10 inline-flex items-center gap-2 text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-action)] transition-colors mt-auto pt-5 border-t border-[var(--border-color)] w-full"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-[var(--text-body)] text-sm bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl">
              No services found for this category. Check back soon.
            </div>
          )}
        </div>
      </section>
    </>
  );
}