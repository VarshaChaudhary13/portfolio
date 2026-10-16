import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MoveUpRight,
  Play,
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "AI Agent Framework",
    title: "Agent Harness",
    description:
      "A LangGraph-powered multi-agent system with intelligent routing, Text-to-SQL, web search, SQL safety checks, and result verification.",
    tags: ["LLMs", "Python", "Structured extraction"],
    result: "Agent Orchestration",
    note: "personal project",
    githubUrl: "https://github.com/VarshaChaudhary13/Agent-Harness",
    demoUrl: "",
  },
  
  
  {
    number: "02",
    type: "GENERATIVE AI · RETRIEVAL",
    title: "RAG question-answering prototype",
    description:
      "A retrieval-augmented question-answering prototype that grounds generated responses in retrieved reference material.",
    tags: ["RAG", "Llama", "FastAPI"],
    result: "Retrieval + generation workflow",
    note: "Personal project",
    githubUrl: "https://github.com/VarshaChaudhary13/RAG-implementation",
    demoUrl: "",
  },
];

const skills = [
  { title: "Software engineering", items: "Python · C++ · SQL · TypeScript · REST APIs · Git" },
  { title: "AI & machine learning", items: "PyTorch · scikit-learn · Transformers · RAG · LLM applications" },
  { title: "Data systems", items: "PySpark · Databricks · SQL workflows · Data processing" },
  { title: "Backend & cloud", items: "FastAPI · Docker · AWS · CI/CD · Service integration" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Varsha home">VC<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-cta" href="mailto:chaudharyvarsha23@gmail.com">
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy" id="about">
          <div className="eyebrow"><span className="status-dot" /> DATA SCIENCE · APPLIED AI</div>
          <h1>Making complex<br />things <em>make sense.</em></h1>
          <p className="hero-lede">
            Jack of all trades, master of none, but oftentimes better than a master of one. Hey, I’m Varsha! I like teaching machines new tricks while trying to figure out life’s own questionable logic. I’m curious by nature, interested in a little bit of everything, and always up for learning something new. If I don’t know how something works, chances are I’ll end up down a rabbit hole figuring it out. I like building things, solving problems, and collecting random skills along the way — because why stick to one thing when there’s an entire world of things to explore? ✨
          </p>
          <div className="hero-facts">
            <div><small>BASED IN</small><strong>India</strong></div>
            <div><small>FOCUS</small><strong>Data science &amp; applied AI</strong></div>
            <div><small>EDUCATION</small><strong>B.Tech, ECE · NSUT</strong></div>
          </div>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a>
            <a className="text-link" href="mailto:chaudharyvarsha23@gmail.com">Get in touch <MoveUpRight size={15} /></a>
          </div>
          <div className="hero-footnote">
            <span><span className="mini-star">✳</span> Open to software & AI opportunities</span>
            <span>Based in India · Open to global opportunities</span>
          </div>
        </div>
        <div className="hero-photo" aria-label="Portrait of Varsha Chaudhary">
          <div className="hero-photo-frame">
            <Image
              src="/profile.jpg"
              alt="Varsha Chaudhary holding her graduation certificate"
              fill
              sizes="(max-width: 900px) 80vw, 340px"
              className="hero-photo-img"
              priority
            />
          </div>
          <span className="about-photo-caption">VARSHA CHAUDHARY · INDIA</span>
        </div>
      </section>

      <section className="ticker" aria-label="Areas of interest">
        <div className="ticker-track">
          {["SOFTWARE ENGINEERING", "MACHINE LEARNING", "GENERATIVE AI", "DATA SYSTEMS", "RESEARCH", "SOFTWARE ENGINEERING", "MACHINE LEARNING", "GENERATIVE AI"].map((item, i) => (
            <span key={`${item}-${i}`}>{item}<b>✳</b></span>
          ))}
        </div>
      </section>
      <section className="section shell" id="work">
        <div className="section-head">
          <div><div className="eyebrow">SELECTED WORK / 01</div><h2>Built to be <em>useful.</em></h2></div>
          <p>A selection of engineering, machine learning, and research work. Some projects were built in professional settings; the context is labelled clearly.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top"><span>{project.number} / 04</span><a href={project.githubUrl} aria-label={`Learn more about ${project.title}`}><ArrowUpRight size={18} /></a></div>
              <div className="project-visual">
                {project.number === "01" ? <div className="doc-visual"><div className="doc-sheet"><span /><span /><span className="short" /><i>AI</i></div><ArrowUpRight className="visual-arrow" size={25} /></div> :
                 project.number === "02" ? <div className="graph-visual"><div className="graph-line line-a" /><div className="graph-line line-b" /><div className="graph-node n1" /><div className="graph-node n2" /><div className="graph-node n3" /><div className="graph-node n4" /><div className="graph-node n5" /><span className="graph-label">SESSION → SIGNAL → RANK</span></div> :
                 project.number === "03" ? <div className="text-visual"><span>the meaning</span><span className="highlight-word">between</span><span>the lines<span className="cursor">_</span></span><small>EXTRACT · SCORE · SUMMARIZE</small></div> :
                 <div className="rag-visual"><div className="rag-node">QUERY</div><div className="rag-connector">↓</div><div className="rag-node accent">RETRIEVE</div><div className="rag-connector">↓</div><div className="rag-node">GENERATE</div></div>}
              </div>
              <div className="project-body">
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-bottom"><div><strong>{project.result}</strong><small>{project.note}</small></div><a href={project.githubUrl} className="round-link" aria-label={`See ${project.title}`}><ArrowUpRight size={17} /></a></div>
                <div className="project-actions">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action project-action-primary"
                    >
                      <Github size={16} />
                      View Code
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action project-action-secondary"
                    >
                      <Play size={16} />
                      Watch Demo
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="honesty-note">Portfolio note: replace these summaries with public demos, sanitized code, and verified metrics where available. Do not publish confidential employer code or documents.</p>
      </section>

      <section className="experience-section" id="experience">
        <div className="section shell">
          <div className="section-head">
            <div><div className="eyebrow">THE PATH SO FAR / 02</div><h2>Learning by <em>building.</em></h2></div>
            <p>Experience across production engineering, data-driven systems, and applied machine learning.</p>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-date">MAY 2025 — AUG 2026</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-content"><div className="timeline-kicker">SOFTWARE ENGINEERING</div><h3>BlackRock <span>·</span> Software Engineer</h3><p>Worked on AI-assisted document workflows, monitoring and automation initiatives, and SQL migration tooling for financial technology workflows.</p><div className="tag-row"><span>Python</span><span>LLMs</span><span>Automation</span><span>SQL</span></div></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">6-MONTH INTERNSHIP</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-content"><div className="timeline-kicker">SEARCH & MACHINE LEARNING</div><h3>Meesho <span>·</span> Data Science Intern</h3><p>Developed a session-based deep-learning pipeline for product-attribute prediction using behavioural signals, with work integrated into search-ranking infrastructure.</p><div className="tag-row"><span>PySpark</span><span>Databricks</span><span>Transformers</span></div></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">NOV 2023 — APR 2024</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-content"><div className="timeline-kicker">AI / ML INTERNSHIP</div><h3>Blue Berry e-Services <span>·</span> AI/ML Intern</h3><p>Prototyped AI-enabled applications spanning voice interfaces, information extraction, and retrieval-augmented question answering.</p><div className="tag-row"><span>Azure</span><span>FastAPI</span><span>RAG</span></div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="research-shell">
          <div className="research-heading">
            <div className="eyebrow">RESEARCH / 03</div>
            <h2>Questions worth <em>exploring.</em></h2>
          </div>
          <div className="research-gallery">
            <article className="research-paper">
              <a className="research-preview" href="/research/TextSummarisation.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open High-Performing Semantic Rich Text Summarization Using N-Gram and FFT-Based Feature Selection">
                <Image
                  src="/research/TextSummarisation-preview.png"
                  alt="First page of High-Performing Semantic Rich Text Summarization Using N-Gram and FFT-Based Feature Selection"
                  fill
                  sizes="(max-width: 700px) 88vw, 44vw"
                />
                <span className="research-preview-link"><ArrowUpRight size={18} /></span>
              </a>
              <div className="research-paper-copy">
                <h3>High-Performing Semantic Rich Text Summarization Using N-Gram and FFT-Based Feature Selection</h3>
                <div className="research-paper-meta">NSUT · NLP research · 2026</div>
                <p>Combines n-gram and TF-IDF features with Fast Fourier Transform-based sentence selection to create concise summaries of news and instructional text.</p>
                <a className="research-read-link" href="/research/TextSummarisation.pdf" target="_blank" rel="noopener noreferrer">Read paper <ArrowUpRight size={15} /></a>
              </div>
            </article>
            <article className="research-paper">
              <a className="research-preview" href="/research/LegalAI.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Optimized Legal Text Summarization: An FFT and PSO-based approach">
                <Image
                  src="/research/LegalAI-preview.png"
                  alt="First page of Optimized Legal Text Summarization: An FFT and PSO-based approach"
                  fill
                  sizes="(max-width: 700px) 88vw, 44vw"
                />
                <span className="research-preview-link"><ArrowUpRight size={18} /></span>
              </a>
              <div className="research-paper-copy">
                <h3>Optimized Legal Text Summarization: An FFT and PSO-Based Approach</h3>
                <div className="research-paper-meta">NSUT · Legal NLP · 2026</div>
                <p>Explores a hybrid approach using TF-IDF, Particle Swarm Optimization, and FFT to select informative sentences from long legal documents.</p>
                <a className="research-read-link" href="/research/LegalAI.pdf" target="_blank" rel="noopener noreferrer">Read paper <ArrowUpRight size={15} /></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell" id="toolkit">
        <div className="section-head">
          <div><div className="eyebrow">TOOLKIT / 04</div><h2>A practical <em>toolkit.</em></h2></div>
          <p>I like understanding the full path from an idea to a reliable system — data, models, APIs, evaluation, and the user experience.</p>
        </div>
        <div className="skills-grid">{skills.map((skill, i) => <article className="skill-item" key={skill.title}><span className="skill-number">0{i + 1}</span><h3>{skill.title}</h3><p>{skill.items}</p></article>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <div className="eyebrow">HAVE A GOOD PROBLEM? / 05</div>
          <h2>Let&apos;s make<br /><em>something matter.</em></h2>
          <p>For software engineering roles, applied AI opportunities, research conversations, or collaborations — I&apos;d love to hear from you.</p>
          <a className="button button-light" href="mailto:chaudharyvarsha23@gmail.com">Say hello <ArrowUpRight size={17} /></a>
          <div className="contact-decoration">VC<span>.</span></div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="wordmark" href="#home">VC<span>.</span></a>
        <span>Designed with curiosity. Built with code.</span>
        <div className="social-links">
          <a href="https://github.com/VarshaChaudhary13" aria-label="GitHub"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/varshachaudhary13" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href="mailto:chaudharyvarsha23@gmail.com" aria-label="Email"><Mail size={17} /></a>
        </div>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
