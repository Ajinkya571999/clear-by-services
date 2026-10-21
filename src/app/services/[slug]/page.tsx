import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

interface ServiceData {
  slug: string;
  title: string;
  subMenu?: string;
  category: string;
  h1: string;
  introParagraphs: string[];
  featuresSection: {
    title: string;
    intro?: string;
    list: { title: string; desc: string }[];
    outro?: string;
  };
  subServices?: { title: string; desc: string }[];
  comparisonSection?: {
    title: string;
    data: { feature: string; generic: string; clearby: string }[];
  };
  faqs?: { q: string; a: string }[];
  
  ctaSection: {
    title: string;
    text: string;
    buttonText: string;
  };
}

async function getService(slug: string): Promise<ServiceData | null> {
  const decodedSlug = decodeURIComponent(slug).trim();

  const { data: initialData, error } = await supabase
    .from('services')
    .select('*')
    .eq('slug', decodedSlug)
    .single();
  let data = initialData;

  if (error || !data) {
    const { data: fallbackData } = await supabase
      .from('services')
      .select('*')
      .ilike('slug', `%${decodedSlug}%`)
      .limit(1);

    if (fallbackData && fallbackData.length > 0) {
      data = fallbackData[0];
    }
  }

  if (!data) {
    return null;
  }

  return {
    slug: data.slug,
    title: data.title,
    subMenu: data.sub_menu,
    category: data.category,
    h1: data.h1 || data.title,
    introParagraphs: data.intro_paragraphs || [],
    featuresSection: data.features_section || { title: "", list: [] },
    subServices: data.sub_services || [],
    comparisonSection: data.comparison_section,
    faqs: data.faqs || [],
    ctaSection: data.cta_section || { title: "Ready to Get Started?", text: "Connect with our experts today.", buttonText: "Enquire Now" },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = await getService(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbLabel = service.subMenu || service.h1 || service.title;

  return (
    <div className="w-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-4 text-[11px] font-bold text-[var(--text-body)] opacity-80 uppercase tracking-widest">
          <Link href="/" className="hover:text-[var(--accent-action)]">Home</Link> <span className="text-[var(--accent-action)]">›</span> <Link href="/services" className="hover:text-[var(--accent-action)]">Services</Link> <span className="text-[var(--accent-action)]">›</span> <span className="text-[var(--text-primary)]">{breadcrumbLabel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-[var(--accent-action)] uppercase tracking-widest block mb-2">{service.category}</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-6 leading-tight">
              {service.h1}
            </h1>

            <div className="space-y-4 mb-8 max-w-2xl">
              {service.introParagraphs.map((para, idx) => (
                <p key={idx} className="text-[var(--text-body)] text-base leading-relaxed opacity-95">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <ContactForm variant="hero" />
          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES GRID */}
      {service.featuresSection && service.featuresSection.list && service.featuresSection.list.length > 0 && (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[var(--card-bg)] border-t border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[var(--text-primary)] mb-3">
              {service.featuresSection.title}
            </h2>
            {service.featuresSection.intro && (
              <p className="text-[var(--text-body)] text-sm max-w-xl mx-auto opacity-85">{service.featuresSection.intro}</p>
            )}
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.featuresSection.list.map((feat, idx) => (
              <div key={idx} className="bg-[var(--bg-primary)] p-8 border border-[var(--border-color)] rounded-2xl shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--accent-action)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-serif font-bold text-[var(--text-primary)] mb-2">{feat.title}</h3>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed opacity-85">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {service.featuresSection.outro && (
            <p className="max-w-3xl mx-auto text-center text-sm text-[var(--text-body)] mt-12 opacity-90">
              {service.featuresSection.outro}
            </p>
          )}
        </section>
      )}

      {/* 3. SUB-SERVICES */}
      {service.subServices && service.subServices.length > 0 && (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[var(--text-primary)] mb-3">Sub-Services</h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.subServices.map((sub, idx) => (
              <div key={idx} className="bg-[var(--card-bg)] p-6 border border-[var(--border-color)] rounded-2xl shadow-sm transition-all hover:border-[var(--accent-action)]/50">
                <h3 className="font-serif font-bold text-[var(--text-primary)] mb-2">{sub.title}</h3>
                <p className="text-xs text-[var(--text-body)] leading-relaxed opacity-85">{sub.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. COMPARISON TABLE */}
      {service.comparisonSection && service.comparisonSection.data && service.comparisonSection.data.length > 0 && (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[var(--card-bg)] border-t border-[var(--border-color)] text-[var(--text-primary)]">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-3">{service.comparisonSection.title}</h2>
            <p className="text-[var(--text-body)] text-sm opacity-85">See how our professional academic advisory compares to generic online alternatives.</p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[var(--border-color)] text-[var(--accent-action)]">
                  <th className="py-4 px-6 uppercase tracking-wider text-xs font-bold">Feature</th>
                  <th className="py-4 px-6 uppercase tracking-wider text-xs font-bold">Generic Online Services</th>
                  <th className="py-4 px-6 uppercase tracking-wider text-xs font-bold">E-Clearby Research Consulting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)] text-xs md:text-sm text-[var(--text-body)]">
                {service.comparisonSection.data.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[var(--bg-primary)]/40 transition">
                    <td className="py-4 px-6 font-bold text-[var(--text-primary)]">{row.feature}</td>
                    <td className="py-4 px-6 opacity-70">{row.generic}</td>
                    <td className="py-4 px-6 text-[var(--accent-action)] font-semibold">{row.clearby}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 5. FAQ SECTION */}
      <FaqAccordion faqs={service.faqs} />

      {/* 7. BOTTOM CTA */}
      <section className="w-full py-20 bg-[var(--card-bg)] border-t border-[var(--border-color)] text-[var(--text-primary)] px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{service.ctaSection.title}</h2>
          <p className="text-[var(--text-body)] text-sm max-w-xl mx-auto mb-8 leading-relaxed opacity-90">
            {service.ctaSection.text}
          </p>
          <a 
            href="/contact" 
            className="bg-[var(--accent-action)] text-[var(--bg-primary)] font-bold py-3.5 px-8 rounded-xl hover:opacity-90 transition inline-block text-xs uppercase tracking-wider shadow-lg"
          >
            {service.ctaSection.buttonText} <ArrowRight className="inline ml-1 w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
}