import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicesFilters from "@/components/ServicesFilters";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

// 1. ADDED: TypeScript interface for the Supabase row data
interface SupabaseServiceRow {
  slug: string;
  title: string;
  sub_menu?: string;
  category?: string;
  h1?: string;
  intro_paragraphs?: string[];
  menu_order?: number;
}

async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('slug, title, sub_menu, category, h1, intro_paragraphs, menu_order')
    .order('menu_order', { ascending: true });

  if (error) {
    console.error("Error fetching services Details:", JSON.stringify(error, null, 2));
    return [];
  }

  if (!data) return [];

  // 2. FIXED: Replaced 'any' with 'SupabaseServiceRow'
  return data.map((item: SupabaseServiceRow) => ({
    slug: item.slug,
    title: item.sub_menu || item.h1 || item.title,
    category: item.category || "General",
    desc: item.intro_paragraphs?.[0] || "Professional technology and digital marketing services tailored to your business goals.",
  }));
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="w-full flex flex-col bg-[var(--bg-primary)] transition-colors duration-300">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent-action)]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-4 block relative z-10">
          Our Capabilities
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--text-primary)] mb-6 relative z-10 tracking-tight">
          Services & Solutions
        </h1>
        <p className="text-[var(--text-body)] max-w-3xl mx-auto leading-relaxed text-base md:text-lg opacity-90 relative z-10">
          Comprehensive technology and digital marketing solutions, tailored to scale your business. From custom software engineering and AI automation to data-driven performance marketing, our specialists ensure technical precision and high-impact growth.
        </p>
      </section>

      {/* 2 & 3. DYNAMIC CATEGORY FILTERS & SERVICES GRID */}
      <ServicesFilters services={services} />

      {/* 4. STRATEGY & EXECUTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[var(--card-bg)] p-10 border border-[var(--border-color)] rounded-2xl shadow-lg transition-all hover:border-[var(--accent-action)]">
            <h3 className="text-2xl font-serif font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              Strategy & Consulting
            </h3>
            <p className="text-[var(--text-body)] text-sm mb-8 leading-relaxed opacity-90">
              Strategic guidance designed to scale your operations and brand reach. We provide high-level consulting on tech architecture, go-to-market strategies, and brand positioning.
            </p>
            <ul className="space-y-4 text-sm text-[var(--text-primary)] font-bold">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-action)]"></span>
                Digital Transformation Strategy
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-action)]"></span>
                Marketing & Growth Planning
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-action)]"></span>
                Startup Setup Advisory
              </li>
            </ul>
          </div>

          <div className="bg-[var(--card-bg)] p-10 border border-[var(--border-color)] rounded-2xl shadow-lg transition-all hover:border-[var(--accent-action)]">
            <h3 className="text-2xl font-serif font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              Engineering & Execution
            </h3>
            <p className="text-[var(--text-body)] text-sm mb-8 leading-relaxed opacity-90">
              Tactical execution and high-performance delivery. Our dedicated teams build robust software, launch targeted ad campaigns, and automate your workflows for maximum efficiency.
            </p>
            <ul className="space-y-4 text-sm text-[var(--text-primary)] font-bold">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-action)]"></span>
                Custom Software Development
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-action)]"></span>
                AI Workflow Automation
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-action)]"></span>
                Performance Ad Campaigns
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="w-full py-24 bg-[var(--card-bg)] border-t border-[var(--border-color)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-action)]/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text-primary)] mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-[var(--text-body)] text-sm opacity-90 max-w-xl">
              Talk to our digital experts today. We will audit your current setup and provide a custom roadmap for growth.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="bg-[var(--accent-action)] text-[var(--bg-primary)] font-bold py-4 px-8 rounded-xl hover:opacity-90 transition shadow-lg whitespace-nowrap text-sm flex items-center gap-2"
          >
            Schedule a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}