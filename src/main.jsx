import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, ExternalLink, Code2, Sparkles } from "lucide-react";
import "./styles.css";

const projects = [
  { name:"QTify", date:"Jun 2026", type:"React", featured:true, tags:["ReactJS","Swiper","CSS Modules","Flexbox","CSS Variables","Conditional Rendering"], desc:"A modern music browsing interface built with React, reusable components and responsive UI patterns.", github:"https://github.com/yogeshvelmurugan13-cloud/L-square-QTify.git" },
  { name:"QKart Frontend", date:"Jun 2026", type:"React", tags:["React Hooks","Forms","REST","JSON","Error Handling"], desc:"A responsive e-commerce frontend focused on reusable React components, forms, API integration and user flows.", github:"https://github.com/yogeshvelmurugan13-cloud" },
  { name:"XBoard", date:"May 2026", type:"Frontend", tags:["HTML","CSS","Figma","Bootstrap","ES6"], desc:"A responsive news-board interface translated from a design and enhanced with Bootstrap components.", github:"https://github.com/yogeshvelmurugan13-cloud" },
  { name:"QTrip Dynamic", date:"May 2026", type:"Frontend", tags:["HTML","CSS","JavaScript","ES6","Bootstrap"], desc:"A dynamic travel website using JavaScript, APIs, responsive layouts and interactive UI.", github:"https://github.com/yogeshvelmurugan13-cloud" },
  { name:"QTrip Static", date:"Apr 2026", type:"Frontend", tags:["HTML","CSS","Bootstrap","Flexbox","Responsive Design"], desc:"A responsive travel booking interface with clean layouts and mobile-first styling.", github:"https://github.com/yogeshvelmurugan13-cloud" },
  { name:"XCruise", date:"Mar 2026", type:"Frontend", tags:["HTML","CSS","Responsive Design"], desc:"A responsive cruise landing page built with semantic HTML and polished CSS layouts.", github:"https://github.com/yogeshvelmurugan13-cloud" },
  { name:"XProfile", date:"Mar 2026", type:"Frontend", tags:["HTML","CSS","Responsive UI"], desc:"A clean virtual profile card project focused on layout, styling and responsive design.", github:"https://github.com/yogeshvelmurugan13-cloud" }
];

const skills = ["React","JavaScript","HTML","CSS","Bootstrap","REST APIs","Git","Linux","HTTP"];

function App(){
  const [menu,setMenu]=useState(false);
  const [dark,setDark]=useState(true);
  useEffect(()=>{document.documentElement.dataset.theme=dark?"dark":"light"},[dark]);

  const go=(id)=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenu(false)};

  return <div className="app">
    <div className="noise"/>
    <header className="nav">
      <button className="brand" onClick={()=>go("home")}>Y<span>.</span></button>
      <nav className={menu?"open":""}>
        {["About","Skills","Projects","Contact"].map(x=><button key={x} onClick={()=>go(x.toLowerCase())}>{x}</button>)}
        <button className="theme" onClick={()=>setDark(!dark)}>{dark?"☼":"☾"}</button>
      </nav>
      <button className="mobileMenu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="orb orb1"/><div className="orb orb2"/>
        <motion.div className="heroCopy" initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
          <div className="eyebrow"><Sparkles size={15}/> AVAILABLE FOR OPPORTUNITIES</div>
          <h1>Hi, I'm <span>Yogesh.</span><br/>I build <em>digital experiences.</em></h1>
          <p>Frontend-focused developer who enjoys turning ideas and designs into fast, responsive and interactive web applications.</p>
          <div className="actions">
            <button className="primary" onClick={()=>go("projects")}>Explore Projects <ArrowUpRight size={18}/></button>
            <button className="secondary" onClick={()=>go("contact")}>Let's Connect</button>
          </div>
          <div className="socials">
            <a href="https://github.com/yogeshvelmurugan13-cloud" target="_blank"><Github/></a>
            <a href="https://www.linkedin.com/in/yogesh-velmurugan-403b20278" target="_blank"><Linkedin/></a>
            <a href="mailto:yogeshvelmurugan13@gmail.com"><Mail/></a>
          </div>
        </motion.div>
        <motion.div className="codeCard" initial={{opacity:0,x:45}} animate={{opacity:1,x:0}} transition={{duration:.9,delay:.15}}>
          <div className="dots"><i/><i/><i/></div>
          <pre>{`const developer = {
  name: "Yogesh",
  role: "Frontend Developer",
  stack: [
    "React",
    "JavaScript",
    "HTML",
    "CSS"
  ],
  passion: "building cool things"
};`}</pre>
          <div className="floatBadge"><Code2 size={18}/> 100+ DSA Problems</div>
        </motion.div>
      </section>

      <section id="about" className="section about">
        <div className="sectionHead"><span>01</span><h2>About me</h2></div>
        <div className="aboutGrid">
          <div><p className="big">I like building interfaces that feel <span>simple, fast and alive.</span></p></div>
          <div><p>I'm Yogesh, a computer science graduate and frontend-focused developer. I have built multiple industry-style projects through hands-on learning, working with React, JavaScript, HTML, CSS, Bootstrap, REST APIs and Git.</p><p>I enjoy solving problems, learning new technologies and turning a blank screen into a useful product.</p></div>
        </div>
        <div className="stats"><div><strong>9</strong><small>Verified skills</small></div><div><strong>7</strong><small>Professional projects</small></div><div><strong>100<span>+</span></strong><small>DSA problems</small></div></div>
      </section>

      <section id="skills" className="section">
        <div className="sectionHead"><span>02</span><h2>Tech stack</h2></div>
        <div className="skillGrid">{skills.map((s,i)=><motion.div className="skill" key={s} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}><span>{String(i+1).padStart(2,"0")}</span><b>{s}</b></motion.div>)}</div>
      </section>

      <section id="projects" className="section projects">
        <div className="sectionHead"><span>03</span><h2>Selected projects</h2></div>
        <div className="projectGrid">{projects.map((p,i)=><motion.article className={"project "+(p.featured?"featured":"")} key={p.name} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{duration:.5,delay:i*.04}}>
          <div className="projectTop"><span>{p.type}</span><small>{p.date}</small></div>
          <h3>{p.name}</h3><p>{p.desc}</p>
          <div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
          <a className="projectLink" href={p.github} target="_blank">View on GitHub <ArrowUpRight size={17}/></a>
        </motion.article>)}</div>
      </section>

      <section id="contact" className="contact section">
        <div className="contactBox">
          <span className="eyebrow">04 — CONTACT</span>
          <h2>Have a project in mind?<br/><span>Let's build it.</span></h2>
          <p>I'm open to frontend opportunities, collaborations and interesting projects.</p>
          <a className="primary" href="mailto:yogeshvelmurugan13@gmail.com">Say Hello <Mail size={18}/></a>
        </div>
      </section>
    </main>
    <footer><span>© 2026 Yogesh Velmurugan</span><span>Built with React + Framer Motion</span></footer>
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);