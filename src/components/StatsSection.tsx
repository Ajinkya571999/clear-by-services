"use client";

import NumberTicker from "./NumberTicker";

export default function StatsSection() {
  return (
    <section className="w-full py-24 bg-[var(--bg-primary)] border-y border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-4 tracking-tight">
            Trusted by founders all over the world
          </h2>
          <p className="text-[var(--text-body)] text-base md:text-lg leading-relaxed opacity-90">
            We are a team of experienced engineers and marketers who are passionate about helping you grow your digital business.
          </p>
        </div>

        {/* 4-Column Ticker Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Stat 1 */}
          <div className="flex flex-col text-left">
            <h3 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
              <NumberTicker value={10} suffix="+" />
            </h3>
            <p className="text-[var(--text-body)] text-sm leading-relaxed">
              Years in the industry helping businesses build their digital presence from the ground up.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col text-left">
            <h3 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
              <NumberTicker value={100} suffix="+" delay={0.1} />
            </h3>
            <p className="text-[var(--text-body)] text-sm leading-relaxed">
              Projects successfully delivered across global markets establishing long-term partnerships.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col text-left">
            <h3 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
              <NumberTicker value={25724} delay={0.2} />
            </h3>
            <p className="text-[var(--text-body)] text-sm leading-relaxed">
              Development hours logged ensuring enterprise-grade security, performance, and scaling.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col text-left">
            <h3 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
              <NumberTicker value={69420} delay={0.3} />
            </h3>
            <p className="text-[var(--text-body)] text-sm leading-relaxed">
              Leads generated through our data-driven performance marketing and SEO campaigns.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}