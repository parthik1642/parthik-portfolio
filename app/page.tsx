'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Github, Linkedin, Mail, Sun, Moon, Menu, X, Download, MoveUpRight, Asterisk, Plus, Minus } from 'lucide-react';


const projects = [
  {
    number: '01',
    name: 'Intelligent Compliance',
    subtitle: 'Turning complex laboratory documents into accurate, traceable decisions.',
    kind: 'AI / DOCUMENT INTELLIGENCE',
    stack: 'Python · FastAPI · OCR · RAG · PostgreSQL',
    color: 'lime',
    symbol: '◎',
    description: 'An AI-powered compliance platform that analyzes purchase orders, technical specifications, and laboratory reports. Combines intelligent document extraction, automated validation, and evidence-based reasoning to streamline compliance verification.'
  },
  {
    number: '02',
    name: 'AI PDF Study Assistant',
    subtitle: 'Transforming static documents into intelligent, searchable knowledge.',
    kind: 'RAG / PRODUCT ENGINEERING',
    stack: 'Python · LangChain · ChromaDB · Streamlit',
    color: 'violet',
    symbol: '↗',
    description: 'A RAG-powered document assistant that enables natural-language conversations with PDFs. Uses document parsing, vector embeddings, and semantic retrieval to generate context-aware answers grounded in uploaded content.'
  },
  {
    number: '03',
    name: 'Real Estate Intelligence',
    subtitle: 'Connecting real estate operations with intelligent AI-driven workflows.',
    kind: 'FULL STACK / AI AGENTS',
    stack: 'Django · React Native · PostgreSQL · Redis',
    color: 'orange',
    symbol: '⌘',
    description: 'An AI-native brokerage management platform connecting agents, clients, properties, and business operations. Integrates intelligent lead assignment, workflow automation, property matching, and an AI copilot for smarter decision-making.'
  },
  {
    number: '04',
    name: 'Application Digital Twin',
    subtitle: 'Building AI agents that explore, understand, and analyze applications.',
    kind: 'MULTI-AGENT SYSTEMS / IN PROGRESS',
    stack: 'Next.js · FastAPI · Agents · Kubernetes',
    color: 'blue',
    symbol: '✳',
    description: 'An in-development autonomous application intelligence platform that uses specialized AI agents to explore web applications, map navigation and workflows, and construct a queryable digital model for technical analysis and recommendations.'
  }
];

const projectDetails = [
 {challenge:'Lab jobs contain purchase orders, job instructions and test reports that must be checked against one another.',approach:'Extract document requirements with OCR and structured parsing, then combine rule-based checks with AI-assisted review and evidence tracing.',features:['Cross-document test coverage','Traceable review decisions','Human review for ambiguous cases'],stack:['Python','FastAPI','OCR','RAG','PostgreSQL','React']},
 {challenge:'Finding a precise answer inside long PDFs can take significant manual effort.',approach:'Parse and chunk documents, index vector embeddings, retrieve relevant passages and generate answers grounded in the retrieved context.',features:['Upload and parse PDFs','Semantic retrieval','Conversational document Q&A'],stack:['Python','LangChain','ChromaDB','FAISS','Streamlit']},
 {challenge:'Brokerage teams manage leads, properties, agents and follow-ups across disconnected workflows.',approach:'Bring operations into one application and use intelligent matching and an AI copilot to support daily decisions.',features:['Role-based workflows','Lead and property matching','Context-aware AI assistance'],stack:['Django','React Native','PostgreSQL','Redis','RAG']},
 {challenge:'Understanding a complex application often requires manually exploring its screens, paths and workflows.',approach:'Develop an agent-based exploration system that maps application behavior into a queryable model with supporting evidence.',features:['Application discovery agents','Workflow mapping','Queryable application model'],stack:['Next.js','FastAPI','Multi-agent AI','Redis','Kubernetes']}
];

const experienceDetails = [
  {
    period: 'Jan 2026 — Present',
    points: [
      'Architected scalable Python/FastAPI microservices for high-volume telemetry processing and cloud observability.',
      'Built RAG-powered investigation workflows combining logs, traces, vector embeddings, and semantic search.',
      'Integrated AI agents using OpenAI APIs and LangChain, with monitoring for model latency, errors, and execution traces.',
      'Designed Kafka and Apache Spark pipelines for large-scale telemetry processing and analytics.',
      'Optimized PostgreSQL, Redis, and DynamoDB access patterns to improve backend performance and reliability.',
      'Deployed cloud-native services using AWS, Docker, and Kubernetes, with automated CI/CD pipelines.',
      'Improved production reliability through PyTest, integration testing, Prometheus, Grafana, and structured logging.'
    ],
    tools: 'Python · FastAPI · RAG · LangChain · OpenAI API · Kafka · Spark · PostgreSQL · Redis · AWS · Docker · Kubernetes · Prometheus'
  },
  {
    period: 'Jan 2021 — Jul 2024',
    points: [
      'Developed enterprise backend applications and REST APIs using Python, TypeScript, and Node.js.',
      'Designed event-driven microservices and Kafka pipelines for enterprise data processing and integrations.',
      'Built machine learning workflows using Scikit-learn and XGBoost for classification, forecasting, and predictive analytics.',
      'Applied NLP and document extraction techniques to automate processing of unstructured business documents.',
      'Prototyped RAG-based document search using vector embeddings and semantic retrieval.',
      'Optimized PostgreSQL, MySQL, and MongoDB queries for scalable reporting and application workloads.',
      'Supported AWS deployments, Docker, Kubernetes, CI/CD automation, and integration testing.'
    ],
    tools: 'Python · TypeScript · Node.js · REST APIs · Kafka · Scikit-learn · XGBoost · NLP · RAG · PostgreSQL · AWS · Docker'
  }
];

const skills = [
 {label:'BUILD',title:'Backend & Systems',items:'Python, FastAPI, Node.js, REST APIs, Kafka, Distributed Systems'},
 {label:'THINK',title:'AI & Intelligence',items:'LLMs, RAG, LangChain, LangGraph, AI Agents, NLP'},
 {label:'SHIP',title:'Cloud & DevOps',items:'AWS, Azure, Docker, Kubernetes, Terraform, CI/CD'},
 {label:'DESIGN',title:'Interfaces & Data',items:'React, Next.js, TypeScript, PostgreSQL, Redis, MongoDB'}
];
export default function Home(){
 const [openExperience,setOpenExperience]=useState<number|null>(null); const [dark,setDark]=useState(false); const [menu,setMenu]=useState(false); const [openProject,setOpenProject]=useState<number|null>(null); const [time,setTime]=useState(''); const [mouse,setMouse]=useState({x:0,y:0});
 useEffect(()=>{const saved=localStorage.getItem('pp-theme');if(saved==='dark')setDark(true);const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));const tick=()=>setTime(new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date()));tick();const timer=setInterval(tick,60000);return()=>{obs.disconnect();clearInterval(timer)}},[]);
 useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('pp-theme',dark?'dark':'light')},[dark]);
 return <main onPointerMove={e=>setMouse({x:e.clientX,y:e.clientY})}>
 <header className="topbar"><a className="wordmark" href="#home" aria-label="Back to top">PP<span className="dot">.</span><span className="wordmark-caption">PORTFOLIO / 2026</span></a><nav className={menu?'nav nav-open':'nav'} aria-label="Main navigation"><a onClick={()=>setMenu(false)} href="#work">Work</a><a onClick={()=>setMenu(false)} href="#about">About</a><a onClick={()=>setMenu(false)} href="#experience">Experience</a><a onClick={()=>setMenu(false)} href="#contact">Contact</a></nav><div className="top-actions"><button className="theme-toggle" onClick={()=>setDark(v=>!v)} aria-label="Toggle color theme">{dark?<Sun size={18}/>:<Moon size={18}/>}</button><button className="menu-toggle" onClick={()=>setMenu(v=>!v)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button></div></header>
 <section id="home" className="hero"><div className="hero-topline"><span><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES</span><span>BASED IN NEW JERSEY, USA <span className="clock">{time} ET</span></span></div><div className="hero-body"><p className="eyebrow reveal">HELLO, I'M PARTHIK PRAJAPATI <span className="scribble">↘</span></p><h1 className="hero-heading reveal">I BUILD<br/><span className="outlined">THINGS</span> THAT<br/><span className="hero-last">MAKE <em>SENSE<span className="period">.</span></em></span></h1><div className="hero-bottom"><div className="hero-asterisk" aria-hidden="true" style={{transform:`rotate(${mouse.x*.025}deg)`}}>✳</div><div className="hero-intro"><p>Software engineer turning complex problems into <strong>reliable systems</strong>, useful AI, and thoughtful digital products.</p><a className="text-link" href="#work">Explore selected work <ArrowDownRight size={19}/></a></div></div></div><div className="marquee" aria-label="Areas of expertise"><div className="marquee-track">{Array.from({length:4},(_,i)=><span key={i}>SOFTWARE ENGINEERING <b>✳</b> AI SYSTEMS <b>✳</b> BACKEND DEVELOPMENT <b>✳</b> CREATIVE PROBLEM SOLVING <b>✳</b> </span>)}</div></div></section>
 <section id="work" className="work section-pad"><div className="section-heading reveal"><div><span className="section-index">01 / SELECTED WORK</span><h2>Not just<br/><em>side projects.</em></h2></div><p>Ideas turned into systems. A selection of what I've built, explored, and engineered.</p></div><div className="project-list">{projects.map((p,i)=><article key={p.number} className={`project project-${p.color} is-visible ${openProject===i?'project-open':''}`}><button className="project-button" onClick={()=>setOpenProject(openProject===i?null:i)} aria-expanded={openProject===i}><div className="project-number">{p.number} <span>/ 04</span></div><div className="project-copy"><span className="project-kind">{p.kind}</span><h3>{p.name}</h3><p>{p.subtitle}</p></div><div className="project-art" aria-hidden="true"><div className="art-ring"/><span>{p.symbol}</span></div><span className="project-arrow">{openProject===i?<Minus size={23}/>:<Plus size={23}/>}</span></button>{openProject===i&&<div className="project-detail project-detail-rich"><div className="project-detail-intro"><p>{p.description}</p><span className="detail-label">THE CHALLENGE</span><p>{projectDetails[i].challenge}</p><span className="detail-label">THE APPROACH</span><p>{projectDetails[i].approach}</p></div><div className="project-detail-side"><span className="detail-label">HIGHLIGHTS</span><ul>{projectDetails[i].features.map(f=><li key={f}>{f}</li>)}</ul><span className="detail-label">TECHNOLOGIES</span><div className="tech-pills">{projectDetails[i].stack.map(t=><span key={t}>{t}</span>)}</div><a className="detail-github" href="https://github.com/parthik1642" target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={17}/></a><small>Specific repository links can be added once confirmed.</small></div></div>}</article>)}</div><div className="all-work"><a href="https://github.com/parthik1642" target="_blank" rel="noreferrer">More experiments on GitHub <ArrowUpRight size={19}/></a></div></section>
 <section id="about" className="about section-pad"><div className="about-label reveal"><span className="section-index">02 / THE HUMAN PART</span><span className="small-flower">✳</span></div><div className="about-grid"><h2 className="reveal">CURIOUS<br/>BY <span>DEFAULT.</span></h2><div className="about-copy reveal"><p className="about-lead">I like the messy middle between <em>“what if?”</em> and <em>“it works.”</em></p><p>I'm a software engineer with 4+ years of experience across backend engineering, distributed services, and AI-powered applications. I enjoy building systems that are practical, maintainable, and genuinely useful.</p><p>From FastAPI microservices to retrieval pipelines and cloud infrastructure, I care about both how a system works and why it matters.</p><a className="pill-link" href="/Parthik-Prajapati-Resume.pdf" download>Download resume <Download size={17}/></a></div></div><div className="skill-grid">{skills.map(s=><div className="skill-tile reveal" key={s.label}><span>{s.label} ↗</span><h3>{s.title}</h3><p>{s.items}</p></div>)}</div></section>
 <section id="experience" className="experience section-pad"><div className="section-heading reveal"><div><span className="section-index">03 / EXPERIENCE</span><h2>Where I've<br/><em>been building.</em></h2></div><p>A little bit of the journey so far.</p></div><div className="timeline">{[{company:'Datadog',period:'2026 — PRESENT',role:'Software Engineer',summary:'Backend services, telemetry workflows, AI-assisted investigation, and production observability.'},{company:'Mphasis',period:'2021 — 2024',role:'Software Engineer',summary:'Enterprise APIs, event-driven pipelines, machine learning workflows, and cloud deployments.'}].map((job,i)=><div key={job.company} className="timeline-entry reveal"><button className="timeline-row timeline-button" onClick={()=>setOpenExperience(openExperience===i?null:i)} aria-expanded={openExperience===i}><span className="date">{job.period}</span><div><h3>{job.company}</h3><p>{job.role}</p></div><div className="timeline-desc">{job.summary}</div>{openExperience===i?<Minus size={22}/>:<Plus size={22}/>}</button>{openExperience===i&&<div className="experience-expanded"><span className="detail-label">{experienceDetails[i].period} / WHAT I WORKED ON</span><ul>{experienceDetails[i].points.map(point=><li key={point}>{point}</li>)}</ul><p><strong>TECH:</strong> {experienceDetails[i].tools}</p></div>}</div>)}</div><div className="education reveal"><span className="section-index">ALSO, THE CLASSROOM</span><p>M.S. Computer Science <span>— Montclair State University</span></p><p>B.E. Computer Engineering <span>— Sai Institute of Technology & Engineering Research</span></p></div></section>
 <section id="contact" className="contact section-pad"><div className="contact-top"><span className="section-index">04 / SAY HELLO</span><span>HAVE AN IDEA? LET'S TALK.</span></div><h2 className="reveal">LET'S MAKE<br/><span>SOMETHING</span><br/>HAPPEN<span className="contact-dot">.</span></h2><a className="contact-email" href="mailto:0501parthik@gmail.com">0501parthik@gmail.com <MoveUpRight size={30}/></a><div className="footer"><span>© {new Date().getFullYear()} PARTHIK PRAJAPATI</span><div><a href="https://github.com/parthik1642" target="_blank" rel="noreferrer"><Github size={18}/> GITHUB</a><a href="https://www.linkedin.com/in/parthik-prajapati/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LINKEDIN</a><a href="mailto:0501parthik@gmail.com"><Mail size={18}/> EMAIL</a></div><a href="#home">BACK TO TOP ↑</a></div></section>
 </main>
}
