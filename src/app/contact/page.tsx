"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Zap, Shield } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can we start a project?",
      a: "Once you submit your enquiry, our team will get back to you within 24 hours to schedule a discovery call. From there, depending on the project scope, we can usually begin onboarding and kickoff within 3 to 5 business days.",
    },
    {
      q: "What is your pricing structure?",
      a: "We offer both milestone-based project pricing and monthly retainers depending on your needs. A custom proposal with transparent pricing will be provided after our initial consultation call.",
    },
    {
      q: "Do you offer post-launch support and maintenance?",
      a: "Absolutely. We provide comprehensive post-launch support, continuous optimization, and retainer packages to ensure your web applications and marketing campaigns perform at their peak.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans min-h-screen transition-colors duration-300">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-12 w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Get in Touch
        </h1>
        <p className="text-[var(--text-body)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Our digital engineers and growth strategists are ready to assist you. Expect a detailed response to your enquiry within 24 business hours.
        </p>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Side: Softer Form Container using your theme variables (No pure white) */}
          <div className="lg:col-span-7 bg-[var(--text-primary)]/5 backdrop-blur-sm border border-[var(--border-color)] rounded-2xl p-6 md:p-10 shadow-sm flex flex-col transition-colors duration-300">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Send an Enquiry</h3>
            
            <div className="flex-grow">
              <ContactForm variant="contact" />
            </div>
            
            {/* Value Props Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-[var(--border-color)] text-xs font-semibold text-[var(--text-body)]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--accent-action)]" /> Strictly Confidential
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[var(--accent-action)]" /> 24-Hour Response
              </div>
            </div>
          </div>

          {/* Right Side: Office Card matching the form's soft background */}
          <div className="lg:col-span-5">
            <div className="bg-[var(--text-primary)]/5 backdrop-blur-sm border border-[var(--border-color)] p-8 md:p-10 shadow-sm rounded-2xl h-full flex flex-col justify-between transition-colors duration-300">
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-color)]">
                  Headquarters
                </h3>
                
                <div className="space-y-6 text-sm mb-8">
                  
                  {/* Email Enquiry */}
                  <div className="flex items-start gap-4 group">
                    <div className="bg-[var(--accent-action)]/10 p-2.5 rounded-lg shrink-0 text-[var(--accent-action)]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-body)] mb-1">Email</p>
                      <a href="mailto:contact@clearbyservices.com" className="text-[var(--text-primary)] hover:text-[var(--accent-action)] transition font-medium text-sm">
                        contact@clearbyservices.com
                      </a>
                    </div>
                  </div>

                  {/* Direct Line */}
                  <div className="flex items-start gap-4 group">
                    <div className="bg-[var(--accent-action)]/10 p-2.5 rounded-lg shrink-0 text-[var(--accent-action)]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-body)] mb-1">Phone</p>
                      <a href="tel:+917020112146" className="text-[var(--text-primary)] hover:text-[var(--accent-action)] transition font-medium text-sm">
                        +91-7020 112146
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="bg-[var(--accent-action)]/10 p-2.5 rounded-lg shrink-0 text-[var(--accent-action)]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-body)] mb-1">Location</p>
                      <address className="text-[var(--text-primary)] not-italic leading-relaxed text-sm">
                        VJ Indilife Sus-Pashan Road,<br />
                        Vardayani Society, Sutarwadi,<br />
                        Pashan Pune, Maharashtra 411021
                      </address>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4 group">
                    <div className="bg-[var(--accent-action)]/10 p-2.5 rounded-lg shrink-0 text-[var(--accent-action)]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-body)] mb-1">Operating Hours</p>
                      <p className="text-[var(--text-primary)] font-bold text-sm">10:00 - 19:00 IST</p>
                      <p className="text-[10px] text-[var(--text-body)] mt-1">Mon - Fri (Closed National Holidays)</p>
                    </div>
                  </div>

                </div>

                {/* Embedded Map Inside the Card */}
                <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-body)]">Location Map</span>
                    <a 
                      href="https://maps.google.com/?q=VJ+Indilife+Sus-Pashan+Road+Pashan+Pune" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] text-[var(--text-body)] hover:text-[var(--accent-action)] underline transition"
                    >
                      View Larger →
                    </a>
                  </div>
                  <div className="w-full h-48 rounded-xl overflow-hidden border border-[var(--border-color)] shadow-inner filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <iframe
                      title="Clearby Services Office Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.553952778749!2d73.7918!3d18.5521!2m3!1f0!2f0!3f0!3m2!1f1024!2f768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsMzMnMTcuNiJOIDczwrA0NyduMy4zIkU!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMON ENQUIRIES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
          Common Enquiries
        </h2>
        
        {/* Minimalist Accordion List */}
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border-b border-[var(--border-color)] last:border-b-0 group"
            >
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
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
      </section>
    </div>
  );
}