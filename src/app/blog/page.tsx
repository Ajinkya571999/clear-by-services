"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { ArrowRight } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ltywtxqwuzhtovbqyaiv.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author_name?: string;
  read_time?: string;
  created_at?: string;
  featured_image?: string; 
  is_featured?: boolean;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // Updated categories to match your agency services
  const categories = ['All', 'Web Development', 'AI Automation', 'Performance Marketing', 'UI/UX Design', 'Company News'];

  useEffect(() => {
    async function fetchBlogs() {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        console.error("Error fetching blogs from Supabase:", error);
      } else if (data) {
        setBlogs(data);
      }
      setLoading(false);
    }

    fetchBlogs();
  }, []);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  const featuredPost = blogs.find(p => p.is_featured) || blogs[0];
  const regularBlogs = blogs.filter(p => p.id !== featuredPost?.id);

  const filteredBlogs = activeCategory === "All"
    ? regularBlogs
    : regularBlogs.filter(post => post.category?.trim().toLowerCase() === activeCategory.trim().toLowerCase());

  const displayedBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredBlogs.length;

  return (
    <div className="w-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen font-sans transition-colors duration-300">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
          Insights & <span className="text-[var(--accent-action)]">Strategies</span>
        </h1>
        <p className="text-[var(--text-body)] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Expert perspectives on digital engineering, AI automation, and high-performance marketing. Build, scale, and innovate with Clearby Services.
        </p>
      </section>

      {/* 2. CATEGORY FILTER PILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2.5 text-xs md:text-sm font-bold border rounded-full transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-[var(--accent-action)] text-[var(--bg-primary)] border-[var(--accent-action)] shadow-md' 
                    : 'bg-[var(--card-bg)] text-[var(--text-body)] border-[var(--border-color)] hover:border-[var(--accent-action)] hover:text-[var(--accent-action)] shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full space-y-16">
        
        {/* 3. FEATURED ARTICLE BANNER */}
        {featuredPost && activeCategory === "All" && (
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch group cursor-pointer">
            <div className="lg:col-span-7 bg-[var(--border-color)] min-h-[320px] relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img 
                src={featuredPost.featured_image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"} 
                alt={featuredPost.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between relative z-20">
              <div>
                <span className="inline-block bg-[var(--accent-action)]/10 text-[var(--accent-action)] text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full mb-6 uppercase">
                  Featured Insight
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 leading-tight group-hover:text-[var(--accent-action)] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-sm md:text-base text-[var(--text-body)] leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-[var(--border-color)] pt-6 text-xs text-[var(--text-body)] font-medium">
                <span>
                  {featuredPost.created_at ? new Date(featuredPost.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Oct 24, 2026"} 
                  <span className="mx-2 opacity-50">•</span> 
                  {featuredPost.read_time || "8 min read"}
                </span>
                <Link href={`/blog/${featuredPost.slug}`} className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-action)] uppercase tracking-wider transition-colors flex items-center gap-1.5">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 4. BLOG GRID CARDS */}
        {loading ? (
          <div className="text-center py-20 text-[var(--text-body)] font-bold animate-pulse text-sm">Loading insights...</div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20 text-[var(--text-body)] font-medium text-sm border border-[var(--border-color)] rounded-2xl bg-[var(--card-bg)]">
            No blog posts found for this category.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedBlogs.map((post, idx) => (
                <Link 
                  key={post.id || idx} 
                  href={`/blog/${post.slug}`}
                  className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[var(--accent-action)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="h-56 bg-[var(--border-color)] overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                      <img 
                        src={post.featured_image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <span className="text-[10px] font-bold text-[var(--accent-action)] tracking-widest mb-3 uppercase block">
                        {post.category || "General"}
                      </span>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 leading-tight line-clamp-2 group-hover:text-[var(--accent-action)] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[var(--text-body)] mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0 mt-auto md:px-8 md:pb-8">
                    <div className="border-t border-[var(--border-color)] pt-5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[var(--accent-action)]/10 text-[var(--accent-action)] flex items-center justify-center font-bold text-[10px]">
                          {(post.author_name || "C")[0]}
                        </div>
                        <span className="font-bold text-[var(--text-primary)]">{post.author_name || "Clearby Team"}</span>
                      </div>
                      <span className="text-[var(--accent-action)] transform group-hover:translate-x-1 transition-transform inline-flex items-center">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* LOAD MORE BUTTON */}
            {hasMorePosts && (
              <div className="flex justify-center mt-16">
                <button 
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  className="border-2 border-[var(--accent-action)] text-[var(--accent-action)] font-bold py-3.5 px-8 rounded-lg hover:bg-[var(--accent-action)] hover:text-[var(--bg-primary)] transition-all duration-300 text-sm tracking-wider uppercase"
                >
                  Load More Insights
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* 5. NEWSLETTER CTA (Premium dark-block aesthetic) */}
      <div className="pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <section className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-3xl py-16 px-8 sm:px-12 lg:px-16 shadow-2xl relative overflow-hidden">
          {/* Decorative background aura */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-action)] opacity-15 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">Stay Ahead in Tech & Growth</h2>
              <p className="text-[var(--text-body)] text-sm md:text-base leading-relaxed max-w-md opacity-90">
                Join thousands of founders and executives. Get our monthly editorial on engineering, AI workflows, and scaling strategies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-5 py-4 text-sm text-[var(--text-primary)] placeholder-[var(--text-body)]/50 focus:outline-none focus:border-[var(--accent-action)] focus:ring-1 focus:ring-[var(--accent-action)] rounded-xl transition-all"
              />
              <button className="bg-[var(--accent-action)] text-[var(--bg-primary)] font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap text-sm shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}