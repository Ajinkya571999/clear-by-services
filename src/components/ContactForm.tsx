"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

interface ServiceItem {
  sub_menu?: string;
  menu_order?: number;
}

interface ContactFormProps {
  variant?: "hero" | "contact";
}

export default function ContactForm({ variant = "hero" }: ContactFormProps) {
  const router = useRouter();
  const [subMenuOptions, setSubMenuOptions] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  // Fetch sub_menu data ordered by menu_order from Supabase on mount
  useEffect(() => {
    async function fetchSubMenu() {
      const { data, error } = await supabase
        .from('services')
        .select('sub_menu, menu_order')
        .order('menu_order', { ascending: true });

      if (!error && data && data.length > 0) {
        const options: string[] = [];

        data.forEach((item: ServiceItem) => {
          if (item.sub_menu && !options.includes(item.sub_menu)) {
            options.push(item.sub_menu);
          }
        });

        setSubMenuOptions(options);

        if (options.length > 0) {
          setFormData((prev) => ({
            ...prev,
            service: options[0],
          }));
        }
      }
    }

    fetchSubMenu();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const submissionData = {
      ...formData,
      phone: `${formData.countryCode} ${formData.phone}`,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // -----------------------------------------------------------
  // 1. HERO VARIANT (Used on Home/Landing pages)
  // -----------------------------------------------------------
  if (variant === "hero") {
    return (
      <div className="bg-[var(--text-primary)]/5 backdrop-blur-md border border-[var(--border-color)] text-[var(--text-primary)] p-8 rounded-2xl shadow-sm relative hover:border-[var(--accent-action)] transition-colors duration-300">
        <h3 className="text-2xl font-bold mb-1">Get Expert Guidance</h3>
        <p className="text-xs text-[var(--text-body)] mb-6">Start your journey to a successful project today.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-1">Name</label>
            <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" 
              className="w-full border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent-action)] focus:ring-1 focus:ring-[var(--accent-action)] rounded-lg placeholder-[var(--text-body)]/40 bg-transparent text-[var(--text-primary)] transition-all" />
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-2">Phone Number</label>
            <div className="flex group focus-within:ring-1 focus-within:ring-[var(--accent-action)] rounded-lg">
              <select 
                name="countryCode" 
                value={formData.countryCode} 
                onChange={handleChange}
                className="border border-r-0 border-[var(--border-color)] bg-[var(--text-primary)]/10 text-[var(--text-primary)] text-xs sm:text-sm rounded-l-lg font-medium px-2 py-3 focus:outline-none focus:border-[var(--accent-action)] transition-all"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+971">🇦🇪 +971</option>
              </select>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="7020112146" 
                className="w-full border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent-action)] rounded-r-lg placeholder-[var(--text-body)]/40 bg-transparent text-[var(--text-primary)] transition-all" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-1">Email</label>
            <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="j.doe@company.com" 
              className="w-full border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent-action)] focus:ring-1 focus:ring-[var(--accent-action)] rounded-lg placeholder-[var(--text-body)]/40 bg-transparent text-[var(--text-primary)] transition-all" />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-1">Select Services</label>
            <select name="service" value={formData.service} onChange={handleChange} 
              className="w-full border border-[var(--border-color)] px-3 py-3 text-sm focus:outline-none focus:border-[var(--accent-action)] focus:ring-1 focus:ring-[var(--accent-action)] rounded-lg bg-transparent text-[var(--text-primary)] transition-all [&>option]:bg-[var(--bg-primary)]">
              <option value="" disabled>Select a service...</option>
              {subMenuOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-1">Message</label>
            <textarea required name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us about your requirements..." 
              className="w-full border border-[var(--border-color)] px-3 py-3 text-sm focus:outline-none focus:border-[var(--accent-action)] focus:ring-1 focus:ring-[var(--accent-action)] rounded-lg resize-none placeholder-[var(--text-body)]/40 bg-transparent text-[var(--text-primary)] transition-all"></textarea>
          </div>

          {status === "error" && <p className="text-red-500 text-xs">Failed to send. Please try again.</p>}
          
          <button type="submit" disabled={status === "loading"} 
            className="w-full bg-[var(--accent-action)] text-[var(--bg-primary)] font-bold py-3.5 text-sm hover:opacity-90 transition-opacity rounded-lg shadow-md disabled:opacity-70 mt-2">
            {status === "loading" ? "SUBMITTING..." : "SUBMIT REQUEST"}
          </button>
        </form>
      </div>
    );
  }

  // -----------------------------------------------------------
  // 2. CONTACT PAGE VARIANT (Blends smoothly into theme containers)
  // -----------------------------------------------------------
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-2">Full Name</label>
            <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" 
              className="w-full border border-[var(--border-color)] px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent-action)] focus:ring-1 focus:ring-[var(--accent-action)] rounded-lg placeholder-[var(--text-body)]/40 bg-transparent text-[var(--text-primary)] transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-2">Email Address</label>
            <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="j.doe@company.com" 
              className="w-full border border-[var(--border-color)] px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent-action)] focus:ring-1 focus:ring-[var(--accent-action)] rounded-lg placeholder-[var(--text-body)]/40 bg-transparent text-[var(--text-primary)] transition-all" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-2">Phone Number</label>
            <div className="flex group focus-within:ring-1 focus-within:ring-[var(--accent-action)] rounded-lg transition-all">
              <select 
                name="countryCode" 
                value={formData.countryCode} 
                onChange={handleChange}
                className="border border-r-0 border-[var(--border-color)] bg-[var(--text-primary)]/5 text-[var(--text-primary)] text-sm rounded-l-lg font-medium px-3 py-3.5 focus:outline-none focus:border-[var(--accent-action)] transition-all"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+971">🇦🇪 +971</option>
              </select>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="7020112146" 
                className="w-full border border-[var(--border-color)] px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent-action)] rounded-r-lg placeholder-[var(--text-body)]/40 bg-transparent text-[var(--text-primary)] transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-2">Enquiry Service</label>
            <select name="service" value={formData.service} onChange={handleChange} 
              className="w-full border border-[var(--border-color)] px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent-action)] focus:ring-1 focus:ring-[var(--accent-action)] rounded-lg bg-transparent text-[var(--text-primary)] transition-all [&>option]:bg-[var(--bg-primary)]">
              {subMenuOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-2">Research Brief / Message</label>
          <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Describe your project requirements..." 
            className="w-full border border-[var(--border-color)] px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent-action)] focus:ring-1 focus:ring-[var(--accent-action)] rounded-lg resize-none placeholder-[var(--text-body)]/40 bg-transparent text-[var(--text-primary)] transition-all"></textarea>
        </div>

        {status === "error" && <p className="text-red-500 text-xs font-medium">Failed to send enquiry. Please try again.</p>}

        <button type="submit" disabled={status === "loading"} 
          className="bg-[var(--accent-action)] text-[var(--bg-primary)] font-bold py-4 px-8 hover:opacity-90 transition-colors rounded-lg shadow-md text-xs uppercase tracking-wider disabled:opacity-70 mt-2">
          {status === "loading" ? "SUBMITTING..." : "SUBMIT ENQUIRY"}
        </button>
      </form>
    </div>
  );
}