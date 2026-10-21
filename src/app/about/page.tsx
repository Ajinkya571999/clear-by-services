import Link from "next/link";
import { 
  GraduationCap, 
  ShieldCheck, 
  Scale, 
  Lightbulb, 
  Clock, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import VisionCards from "@/components/VisionCards";
import FacultyCards from "@/components/FacultyCards"; // Import the new Faculty Cards

export const metadata = {
  title: 'About Us | E-Clearby Research',
  description: 'Academic consultation and research assistance for scholars, researchers, and PhD candidates.',
};

export default function AboutPage() {
  const coreValues = [
    { title: "Expertise", desc: "Research and methodological consultation tailored to your academic needs.", icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Confidentiality", desc: "Careful handling of your research, data, documents, and intellectual property.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Integrity", desc: "Responsible academic practices that respect originality and research ethics.", icon: <Scale className="w-6 h-6" /> },
    { title: "Clarity", desc: "Clear explanations, practical feedback, and structured academic input.", icon: <Lightbulb className="w-6 h-6" /> },
    { title: "Timeliness", desc: "Reliable communication and delivery aligned with agreed timelines.", icon: <Clock className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] overflow-hidden text-[var(--text-primary)] font-sans">
      
      {/* 1. HEADER & INTRO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-8 text-xs font-bold text-[var(--text-body)] uppercase tracking-widest flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--accent-action)] transition-colors">HOME</Link> 
          <span className="text-[var(--accent-action)]">›</span> 
          <span className="text-[var(--text-primary)]">ABOUT US</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl text-[var(--text-primary)] leading-tight">
          Redefining <span className="text-[var(--accent-action)]">Academic Research</span> & Consultancy
        </h1>
        
        <div className="max-w-3xl space-y-6 text-base md:text-lg text-[var(--text-body)] leading-relaxed">
          <p>
            Research is more than the process of completing an academic requirement. It involves asking meaningful questions, evaluating evidence, making informed methodological decisions, and developing knowledge in a structured and academically rigorous way. For many scholars, navigating this process alongside university requirements, supervisor feedback, data, deadlines, and publication expectations can be challenging.
          </p>
          <p>
            <strong className="text-[var(--text-primary)] font-semibold">E-Clearby Research Consulting Pvt. Ltd.</strong> provides academic consultation and research assistance to PhD scholars, Master&apos;s students, and researchers across different disciplines. Our role is to help you make informed research decisions, strengthen your academic work, and navigate complex stages of the research process with greater clarity and confidence.
          </p>
          <p>
            Our approach is simple: <span className="text-[var(--text-primary)] font-medium">your research remains yours</span>. We provide consultation, review, methodological input, feedback, and recommendations while you remain responsible for developing, interpreting, finalising, and submitting your academic work.
          </p>
        </div>
      </section>

      {/* 2. OUR FOUNDING VISION SECTION - UPGRADED WITH ACETERNITY CARDS */}
      <section className="w-full bg-[var(--card-bg)] py-24 px-4 sm:px-6 lg:px-8 border-y border-[var(--border-color)] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="mb-6 flex flex-col gap-2">
              <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase">A LEGACY OF SCHOLARLY SUPPORT</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">Our Founding Vision</h2>
            </div>
            <p className="text-[var(--text-body)] text-base md:text-lg leading-relaxed mb-6">
              E-Clearby Research was established in response to the growing isolation felt by doctoral candidates in an increasingly fragmented academic landscape. We recognized that while the pursuit of a PhD is a solitary endeavor, the infrastructure of research should never be.
            </p>
            <p className="text-[var(--text-body)] text-base md:text-lg leading-relaxed mb-8">
              Our journey began with a small circle of senior academics who shared a singular goal: to provide the bridge between raw data and profound insight. Today, that vision has expanded into a premier consultancy that serves hundreds of scholars across various continents, maintaining the same personal touch and rigorous standards that defined our inception.
            </p>
            <blockquote className="border-l-2 border-[var(--accent-action)] pl-6 py-2 italic text-lg md:text-xl text-[var(--text-primary)] leading-relaxed font-medium">
              &ldquo;Intellectual progress is the result of shared dedication. We don&apos;t just facilitate research; we nurture the next generation of global thought leaders.&rdquo;
            </blockquote>
          </div>
          
          {/* Framer Motion Drag Cards injected here */}
          <div className="relative w-full h-full flex items-center justify-center">
            <VisionCards />
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH TO ACADEMIC CONSULTANCY */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)]">
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group overflow-hidden rounded-2xl bg-[var(--border-color)] p-1 order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" 
              alt="Clearby Research About" 
              className="w-full h-auto object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
              Our Approach to Academic Consultancy
            </h2>
            <div className="space-y-6 text-[var(--text-body)] text-base md:text-lg leading-relaxed">
              <p>
                Academic research can be an independent journey, but independent research does not have to mean navigating every challenge without expert input. Our consultancy model is designed to give scholars access to structured academic perspectives while preserving their ownership of the research process.
              </p>
              <p>
                We work with the research materials, ideas, data, and objectives provided by the scholar and help identify areas that may require greater clarity, stronger alignment, methodological consideration, or further refinement.
              </p>
              <p>
                Rather than replacing the scholars role, we aim to make the research process more structured and informed—helping scholars understand their options, evaluate academic decisions, and improve their own work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR COMMITMENT TO RESEARCH ETHICS */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--card-bg)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">Commitment to Ethics</h2>
          <p className="text-[var(--text-body)] max-w-2xl mx-auto">Operating with the highest standard of academic integrity and transparency.</p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            { title: "Academic Integrity", desc: "Our services are designed to encourage appropriate research practices, accurate attribution, responsible use of sources, and adherence to applicable university and institutional requirements." },
            { title: "Scholar Ownership", desc: "The research thinking, interpretation, academic arguments, and final decisions remain with the scholar. We provide consultation and feedback; the scholar reviews, finalises, and submits." },
            { title: "Advisory Role", desc: "Our role is to provide academic input—not to replace the researcher. We help scholars understand research concepts, evaluate methodological choices, and strengthen their work." },
            { title: "Transparent Engagement", desc: "We believe scholars should clearly understand what a service includes before beginning an engagement. Our scope, deliverables, timelines, and responsibilities are communicated clearly." },
            { title: "Respect for Guidelines", desc: "Research requirements differ across universities, disciplines, and supervisors. We encourage scholars to follow institutional guidelines and use our consultation within those requirements." }
          ].map((item, idx) => (
            <div key={idx} className="group bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent-action)] p-6 md:p-8 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-start gap-4 shadow-sm">
              <div className="bg-[var(--card-bg)] p-3 rounded-full text-[var(--accent-action)] shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-action)] transition-colors">{item.title}</h3>
                <p className="text-[var(--text-body)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OUR CORE VALUES */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">Our Core Values</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((val, idx) => (
            <div key={idx} className="bg-[var(--card-bg)] p-8 border border-[var(--border-color)] hover:border-[var(--accent-action)] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start group">
              <div className="mb-6 text-[var(--text-body)] group-hover:text-[var(--accent-action)] group-hover:scale-110 transition-all duration-300">
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{val.title}</h3>
              <p className="text-sm text-[var(--text-body)] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ELITE RESEARCH FACULTY (Aceternity UI Style) */}
      <section className="w-full py-32 bg-[var(--bg-primary)] border-y border-[var(--border-color)] overflow-hidden flex flex-col items-center">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-24 relative z-10">
          <span className="text-xs font-bold text-[var(--accent-action)] tracking-widest uppercase mb-4 block">
            OUR EXPERTS
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[var(--text-primary)] mb-6 tracking-tight">
            Elite Research Faculty
          </h2>
        </div>

        {/* Fanning Cards Component */}
        <FacultyCards />

        {/* Section Footer/Story */}
        <div className="max-w-2xl mx-auto px-4 text-center mt-32 relative z-10">
          <p className="text-[var(--text-body)] text-base md:text-lg leading-relaxed opacity-90 mb-8">
            Our consultants are not just advisors; they are seasoned researchers, peer-reviewers, and academic pioneers with decades of cumulative experience across Stanford, Oxford, and Harvard.
          </p>
          <Link 
            href="/contact" 
            className="text-[var(--accent-action)] font-bold text-sm hover:opacity-80 transition inline-flex items-center gap-1 uppercase tracking-wider"
          >
            Work with our experts <span className="text-lg leading-none">→</span>
          </Link>
        </div>

      </section>

      {/* 7. FINAL CTA BANNER */}
      <section className="w-full py-24 bg-[var(--bg-primary)] text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-(--text-primary) mb-6">
            Ready to start your research journey?
          </h2>
          <p className="text-[var(--text-body)] text-base md:text-lg mb-10 leading-relaxed">
            Whether you are at the proposal stage or finalizing your dissertation, our experts are ready to provide the guidance you need to succeed.
          </p>
          <Link 
            href="/contact" 
            className="bg-[var(--accent-action)] text-[var(--bg-primary)] font-bold py-4 px-8 rounded-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-sm md:text-base shadow-lg mb-8"
          >
            Book Your Initial Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="text-xs text-[var(--text-body)] uppercase tracking-[0.2em] font-bold">
            Confidential • Professional • Academic-Focused
          </div>
        </div>
      </section>

    </div>
  );
}