import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header class="site-header">
      <a class="wordmark" href="#home" aria-label="Mostafa Abdulazeez home">MA<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
      </nav>
      <a class="header-link" href="mailto:mostafaaglan6@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
    </header>

    <main id="home">
      <section class="hero wrap">
        <div class="hero-copy">
          <p class="eyebrow"><span class="status-dot"></span> OPEN TO JUNIOR BACKEND OPPORTUNITIES</p>
          <h1>Building useful<br><span>things behind</span><br>the scenes.</h1>
          <p class="hero-intro">I’m Mostafa, a junior backend developer focused on Node.js, Express, and MongoDB. I build practical APIs with clear structure, thoughtful validation, and reliable authentication.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
            <a class="button button-outline" href="/Mostafa-Abdulazeez-CV.pdf" download="Mostafa-Abdulazeez-CV.pdf">Download CV <span aria-hidden="true">↗</span></a>
          </div>
          <div class="social-links">
            <a href="https://github.com/azeez26" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/mostafa-abdulazeez-1544a9349/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <div class="orbit-label label-api">API <span>●</span></div><div class="orbit-label label-db">DATABASE <span>●</span></div>
          <div class="code-card"><div class="code-top"><span></span><span></span><span></span><small>developer.js</small></div><pre><span class="code-purple">const</span> developer = (
  name: <span class="code-green">'Mostafa'</span>,
  focus: <span class="code-green">'backend'</span>,
  tools: [
    <span class="code-green">'Node.js'</span>,
    <span class="code-green">'Express'</span>,
    <span class="code-green">'MongoDB'</span>
  ],
  learning: <span class="code-orange">true</span>
);</pre><div class="code-foot"><span class="status-dot"></span> building steadily <span>line 12, col 1</span></div></div>
          <div class="art-caption">Thoughtful APIs.<br><span>Solid foundations.</span></div>
        </div>
        <div class="scroll-note"><span></span> SCROLL TO EXPLORE</div>
      </section>

      <section id="about" class="section wrap about-section">
        <div class="section-heading"><p class="eyebrow">01 / A LITTLE ABOUT ME</p><h2>Backend-minded.<br><span>Curious by nature.</span></h2></div>
        <div class="about-copy"><p>I completed an intensive MEAN Stack program at the National Telecommunication Institute, where I built REST APIs with Node.js, Express, and MongoDB. My project work includes backend features for a team graduation project and two personal APIs.</p><p>Before software, I worked as a radiology technician. That experience shaped how I approach careful, detail-oriented work. I also have a graphic design background, which gives me an eye for clear and considered interfaces.</p><div class="location"><span aria-hidden="true">⌖</span> Tanta, Egypt <span class="location-divider">·</span> Learning and building</div></div>
      </section>

      <section id="skills" class="section skills-section">
        <div class="wrap"><div class="section-heading"><p class="eyebrow">02 / WHAT I WORK WITH</p><h2>Tools for building<br><span>from the inside out.</span></h2></div>
          <div class="skills-grid">
            <article class="skill-group"><div class="skill-icon">API</div><h3>Backend & APIs</h3><p>Node.js · Express.js · REST APIs · Middleware</p></article>
            <article class="skill-group"><div class="skill-icon">◉</div><h3>Data & security</h3><p>MongoDB · Mongoose · MySQL (basic) · JWT · OAuth 2.0 · bcrypt</p></article>
            <article class="skill-group"><div class="skill-icon">⌘</div><h3>Languages & tools</h3><p>JavaScript · TypeScript · Git · GitHub · Postman · Joi · Multer</p></article>
            <article class="skill-group"><div class="skill-icon">◇</div><h3>Frontend foundations</h3><p>Angular basics from practical MEAN Stack training</p></article>
          </div>
        </div>
      </section>

      <section id="projects" class="section wrap projects-section">
        <div class="projects-title"><div class="section-heading"><p class="eyebrow">03 / SELECTED PROJECTS</p><h2>Work in<br><span>progress & practice.</span></h2></div><p>Personal builds and team project work that reflect how I’m growing as a backend developer.</p></div>
        <article class="project-card featured-project"><div class="project-number">01</div><div class="project-content"><div class="project-meta"><span class="project-type">TEAM GRADUATION PROJECT</span><span class="project-status"><i></i> Live frontend</span></div><h3>Gheras</h3><p class="project-summary">A plant care platform. I built backend modules for plants, diseases, fertilizers, and their relationships; connected and managed the wiki; and contributed to the store and Angular frontend features.</p><ul class="feature-list"><li>OAuth 2.0 sign-in and registration</li><li>Email verification with OTP and Multer uploads</li><li>Plant, disease, fertilizer, and wiki APIs</li></ul><div class="tags"><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Angular</span></div></div><a class="project-link" href="https://gheras-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="View Gheras live frontend">↗</a></article>
        <div class="project-grid">
          <article class="project-card"><div class="project-number">02</div><div class="project-content"><div class="project-meta"><span class="project-type">PERSONAL BACKEND PROJECT</span><span class="project-status status-building"><i></i> In progress</span></div><h3>AG-Shop</h3><p class="project-summary">An e-commerce REST API for users, products, orders, and categories. Built as a personal project and currently unfinished.</p><ul class="feature-list"><li>JWT sign-up and login with bcrypt hashing</li><li>Centralized error handling middleware</li></ul><div class="tags"><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Mongoose</span></div></div><a class="project-link" href="https://github.com/azeez26/AG-Shop" target="_blank" rel="noopener noreferrer" aria-label="View AG-Shop source on GitHub">↗</a></article>
          <article class="project-card"><div class="project-number">03</div><div class="project-content"><div class="project-meta"><span class="project-type">PERSONAL BACKEND PROJECT</span><span class="project-status status-building"><i></i> Almost complete</span></div><h3>Habit Tracker</h3><p class="project-summary">A REST API for tracking scheduled habits, user progress, streaks, and daily or monthly statistics.</p><ul class="feature-list"><li>Timezone-aware habits, logs, and analytics</li><li>JWT auth, Joi validation, and rate limiting</li><li>Soft delete with preserved habit history</li></ul><div class="tags"><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Joi</span></div></div><a class="project-link" href="https://github.com/azeez26/habit-tracker" target="_blank" rel="noopener noreferrer" aria-label="View Habit Tracker source on GitHub">↗</a></article>
        </div>
      </section>

      <section class="section experience-section"><div class="wrap"><div class="section-heading"><p class="eyebrow">04 / THE PATH SO FAR</p><h2>Learning through<br><span>real work.</span></h2></div><div class="timeline"><article><div class="timeline-date">DEC 2025 — APR 2026</div><div><h3>Backend Developer Trainee <span>· NTI</span></h3><p>Completed an intensive MEAN Stack program. Built REST APIs with Node.js, Express, and Mongoose; implemented JWT authentication; and practiced MVC structure and team collaboration with Git.</p></div></article><article><div class="timeline-date">NOV 2021 — 2025</div><div><h3>Radiology Technician <span>· Tanta University Hospital</span></h3><p>Performed diagnostic imaging procedures with a focus on accuracy and patient safety in a high-pressure clinical environment.</p></div></article><article><div class="timeline-date">2018 — 2020</div><div><h3>Diploma in Radiology Technology <span>· Health Technical Institute</span></h3><p>Graduated with Excellent GPA.</p></div></article></div></div></section>

      <section id="contact" class="contact-section"><div class="wrap contact-inner"><p class="eyebrow">05 / GET IN TOUCH</p><h2>Have a role or<br><span>project in mind?</span></h2><p class="contact-note">I’m open to junior backend opportunities and conversations about building useful software.</p><a class="contact-email" href="mailto:mostafaaglan6@gmail.com">mostafaaglan6&#64;gmail.com <span aria-hidden="true">↗</span></a><div class="contact-links"><a href="https://github.com/azeez26" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/mostafa-abdulazeez-1544a9349/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="/Mostafa-Abdulazeez-CV.pdf" download="Mostafa-Abdulazeez-CV.pdf">Download CV ↓</a></div></div></section>
    </main>
    <footer class="site-footer wrap"><a class="wordmark" href="#home">MA<span>.</span></a><p>Designed & built with care · 2026</p><a href="#home">Back to top ↑</a></footer>
  `
})
export class AppComponent {
}



