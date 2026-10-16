import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Github, Menu, X,
  ChartNoAxesCombined, Hotel, ShieldAlert, TrendingUp,
  Sparkles, MoveUpRight,
} from "lucide-react";

type Category = "All" | "Classification" | "Regression" | "Clustering";
type Project = {
  number: string; title: string; category: Exclude<Category, "All">;
  description: string; image: string; accent: string; metric: string;
  metricLabel: string; tools: string[]; icon: typeof Hotel; repo?: string;
};

const projects: Project[] = [
  {
    number: "01", title: "Hotel Reservation Cancellation", category: "Classification",
    description: "Predict booking cancellations early so hospitality teams can plan inventory, reduce avoidable revenue loss, and make smarter retention decisions.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
    accent: "#7dbbff", metric: "Classification", metricLabel: "Prediction workflow",
    tools: ["Python", "Scikit-learn", "Pandas"], icon: Hotel,
    repo: "https://github.com/Rohan-Rg30/RohanHQ",
  },
  {
    number: "02", title: "Company Bankruptcy Prediction", category: "Classification",
    description: "A financial-risk modeling workflow using company indicators to help identify distress signals and support more informed risk assessment.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=85",
    accent: "#54e2e0", metric: "Risk analysis", metricLabel: "Financial indicators",
    tools: ["Python", "XGBoost", "Model evaluation"], icon: TrendingUp,
    repo: "https://github.com/Rohan-Rg30/RohanHQ",
  },
  {
    number: "03", title: "Shooting Incident Fatality", category: "Classification",
    description: "Explore historical incident data to classify fatal and non-fatal outcomes and examine patterns associated with higher-risk events.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=85",
    accent: "#a5e8ff", metric: "Incident analysis", metricLabel: "Historical data",
    tools: ["Python", "EDA", "Classification"], icon: ShieldAlert,
    repo: "https://github.com/Rohan-Rg30/RohanHQ",
  },

];

const skills = ["Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Power BI", "Tableau", "Streamlit", "Exploratory Data Analysis", "Feature Engineering", "Model Evaluation"];
const rise = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } } };

export default function Home() {
  const [filter, setFilter] = useState<Category>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Rohan Gaikwad home"><span className="wordmark-mark">R</span><span>ROHAN GAIKWAD<span className="wordmark-dot">.</span></span></a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Projects <span className="nav-count">03</span></a><a href="#approach" onClick={closeMenu}>Approach</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-grid" aria-hidden="true"><span/><span/><span/><span/><span/><span/><span/><span/><span/></div>
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={rise}>
            <p className="eyebrow"><span className="status-dot"/> DATA SCIENCE · MACHINE LEARNING · ANALYTICS</p>
            <h1>I turn data<br/>into <em>direction.</em></h1>
            <p className="hero-description">I’m Rohan Gaikwad — a data science enthusiast building thoughtful machine learning projects and analytics that connect technical work to real-world questions.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="button button-quiet" href="https://github.com/Rohan-Rg30/RohanHQ" target="_blank" rel="noreferrer"><Github size={17}/> GitHub profile <ArrowUpRight size={15}/></a></div>
            <div className="hero-footnote"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>01 / 04</span></div>
          </motion.div>
          <motion.div className="hero-art" initial={reduceMotion ? false : { opacity: 0, scale: .94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .15 }}>
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
            <div className="art-core"><span className="core-kicker">SIGNAL / NOISE</span><ChartNoAxesCombined size={76} strokeWidth={1.15}/><span className="core-caption">FIND THE<br/>MEANING</span></div>
            <div className="float-card float-card-top"><span className="float-icon"><Sparkles size={15}/></span><span><b>Curiosity first</b><small>Ask better questions</small></span></div>
            <div className="float-card float-card-bottom"><span className="float-pulse"/><span><b>From data to decisions</b><small>Explore · Model · Communicate</small></span></div>
            
          </motion.div>
          <div className="hero-index"><span>PORTFOLIO / 2026</span><span>INDEPENDENT WORK & EXPERIMENTS</span></div>
        </section>

        <section className="ticker" aria-label="Areas of focus"><div className="ticker-track">{[0,1].map((n) => <div className="ticker-set" key={n}><span>DATA SCIENCE</span><i>✳</i><span>MACHINE LEARNING</span><i>✳</i><span>BUSINESS INTELLIGENCE</span><i>✳</i><span>MEANINGFUL METRICS</span><i>✳</i></div>)}</div></section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-label"><span>01 — ABOUT</span><span className="label-rule"/></div>
          <div className="about-layout"><div><h2>Analytical<br/><em>by nature.</em></h2><p className="about-aside">I’m interested in the space between a messy dataset and a useful decision.</p></div><div className="about-copy"><p className="about-lead">Good data work is more than a model score. It’s understanding the question, preparing trustworthy data, testing assumptions, and communicating what the result actually means.</p><p>I enjoy the full workflow: exploration, feature engineering, model evaluation, and clear visual storytelling. My projects are practical experiments in applying these skills to problems with a real-world context.</p><a className="text-link" href="#approach">How I approach a problem <ArrowUpRight size={16}/></a></div></div>
          <div className="stat-strip"><div><strong>03</strong><small>FEATURED PROJECTS</small></div><div><strong>01</strong><small>VISIBLE PROJECT CATEGORY</small></div><div><strong>01</strong><small>QUESTION AT A TIME</small></div><p>Progress over buzzwords.<br/>Evidence over assumptions.</p></div>
        </section>

        <section className="work section-wrap section-pad" id="work">
          <div className="section-label"><span>02 — SELECTED WORK</span><span className="label-rule"/><span className="section-index">PROJECTS / 03</span></div>
          <div className="work-heading"><h2>Built in the<br/><em>real world.</em></h2><p>Each project is a small proof of how I think: structured analysis, careful modeling, and a result that has a reason to exist.</p></div>
          <div className="filter-row" role="group" aria-label="Filter projects">{(["All", "Classification", "Regression", "Clustering"] as Category[]).map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? "filter-chip active" : "filter-chip"} aria-pressed={filter === item}>{item}</button>)}<span className="result-count">{String(filtered.length).padStart(2, "0")} PROJECTS</span></div>
          <motion.div layout className="project-grid">{filtered.map((project) => {
            const Icon = project.icon;
            return <motion.article layout key={project.number} className="project-card" variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} transition={{ duration: .45 }}>
              <div className="project-image" style={{ "--project-accent": project.accent } as React.CSSProperties}><img src={project.image} alt={`${project.title} visual`} loading="lazy"/><div className="image-overlay"/><span className="project-number">{project.number} <i/> {project.category}</span><span className="project-image-icon"><Icon size={23} strokeWidth={1.4}/></span><a className="image-arrow" href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open GitHub profile for ${project.title}`}><ArrowUpRight size={20}/></a></div>
              <div className="project-content"><div className="project-meta"><span>CASE STUDY / {project.number}</span><span className="meta-dot"/></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tools">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><a className="project-link" href={project.repo} target="_blank" rel="noreferrer"><span>Explore GitHub profile</span><MoveUpRight size={16}/></a></div>
            </motion.article>;
          })}</motion.div>
          <p className="project-disclaimer">Only three project titles were visible in the supplied screenshots. Link each card to its exact repository and add verified metrics before presenting it as a detailed case study.</p>
        </section>

        <section className="approach section-wrap section-pad" id="approach">
          <div className="section-label"><span>03 — THE PROCESS</span><span className="label-rule"/></div><div className="approach-heading"><h2>From question<br/>to <em>clarity.</em></h2><p>A good workflow is repeatable, explainable, and honest about its limits.</p></div>
          <div className="process-grid">{[{n:"01",title:"Frame the question",desc:"Define the decision, the target, and what success should mean before reaching for an algorithm."},{n:"02",title:"Understand the data",desc:"Inspect quality, distributions, missingness, leakage risks, and the assumptions hiding in the dataset."},{n:"03",title:"Build & evaluate",desc:"Create a sensible baseline, compare suitable models, and evaluate with metrics that match the problem."},{n:"04",title:"Explain the outcome",desc:"Communicate what the model suggests, where it is uncertain, and what a stakeholder can do next."}].map((step) => <motion.div className="process-step" key={step.n} variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }}><span className="process-number">{step.n}</span><div className="process-symbol"><ArrowUpRight size={18}/></div><h3>{step.title}</h3><p>{step.desc}</p></motion.div>)}</div>
        </section>

        <section className="toolkit section-wrap section-pad">
          <div className="section-label"><span>04 — TOOLKIT</span><span className="label-rule"/></div><div className="toolkit-layout"><h2>The tools are<br/><em>the means.</em></h2><div><p className="toolkit-intro">A practical toolkit for exploring data, building models, and making findings easier to act on.</p><div className="skill-cloud">{skills.map((skill, i) => <span key={skill} style={{ "--skill-delay": `${i * 35}ms` } as React.CSSProperties}>{skill}</span>)}</div><p className="toolkit-note"><Sparkles size={15}/> Skills listed reflect the portfolio’s intended focus; keep only tools you can confidently discuss in an interview.</p></div></div>
        </section>

        <section className="contact section-wrap" id="contact"><div className="contact-glow"/><div className="section-label"><span>05 — NEXT CHAPTER</span><span className="label-rule"/></div><div className="contact-layout"><div><p className="eyebrow">HAVE A QUESTION, PROJECT, OR OPPORTUNITY?</p><h2>Let’s make<br/><em>something matter.</em></h2></div><div className="contact-side"><p>I’m open to conversations about data, analytics, machine learning, and opportunities to keep learning through meaningful work.</p><a className="button button-primary" href="https://github.com/Rohan-Rg30/RohanHQ" target="_blank" rel="noreferrer">Connect on GitHub <Github size={16}/></a><div className="social-links"><a href="https://github.com/Rohan-Rg30/RohanHQ" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a></div></div></div></section>
      </main>
      <footer className="site-footer section-wrap"><a className="wordmark" href="#home"><span className="wordmark-mark">R</span><span>ROHAN GAIKWAD<span className="wordmark-dot">.</span></span></a><span>DESIGNED WITH INTENTION · BUILT TO KEEP LEARNING</span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a><span className="copyright">© {new Date().getFullYear()} ROHAN GAIKWAD</span></footer>
    </div>
  );
}
