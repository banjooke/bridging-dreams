import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Compass,
  HeartHandshake,
  GraduationCap,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  School,
  Lightbulb
} from "lucide-react";
import "./styles.css";

const pages = ["Home", "Services", "About", "Immigrant Support", "Contact"];

const services = [
  {
    icon: GraduationCap,
    title: "Academic Coaching",
    text: "Personalized support to improve performance, strengthen study habits, and build confidence."
  },
  {
    icon: Users,
    title: "Immigrant Student Support",
    text: "Culturally responsive guidance that helps students adapt, thrive, and feel seen."
  },
  {
    icon: Compass,
    title: "Education & Career Guidance",
    text: "Helping students discover strengths, set goals, and navigate academic pathways."
  },
  {
    icon: HeartHandshake,
    title: "Well-being & Confidence",
    text: "Empowering students to build resilience, self-esteem, and a positive mindset."
  },
  {
    icon: School,
    title: "School & Family Collaboration",
    text: "Partnering with parents and schools to create strong support networks for student success."
  },
  {
    icon: Lightbulb,
    title: "Learning Strategy Sessions",
    text: "Practical tools for motivation, organization, goal-setting, and independent learning."
  }
];

function Button({ children, variant = "solid", onClick, className = "" }) {
  return (
    <button onClick={onClick} className={`btn ${variant === "outline" ? "btn-outline" : "btn-solid"} ${className}`}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function Logo() {
  return (
    <div className="logo">
      <div className="logo-mark"><Sparkles size={20} /></div>
      <div>
        <p className="logo-title">Bridging Dreams</p>
        <p className="logo-subtitle">Consulting</p>
      </div>
    </div>
  );
}

function Header({ activePage, setActivePage }) {
  const [open, setOpen] = useState(false);

  const goTo = (page) => {
    setActivePage(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header-inner">
        <button onClick={() => goTo("Home")} className="logo-button"><Logo /></button>

        <nav className="nav">
          {pages.map((page) => (
            <button key={page} onClick={() => goTo(page)} className={activePage === page ? "active" : ""}>
              {page}
            </button>
          ))}
        </nav>

        <Button onClick={() => goTo("Contact")} className="desktop-cta">Book a Consultation</Button>

        <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          {pages.map((page) => (
            <button key={page} onClick={() => goTo(page)}>{page}</button>
          ))}
        </div>
      )}
    </header>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="glow glow-right" />
      <div className="page-hero-content">
        <p className="eyebrow amber">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

function Home({ setActivePage }) {
  return (
    <main>
      <section className="hero">
        <div className="glow glow-right" />
        <div className="glow glow-left" />

        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow">Education • Empowerment • Opportunity</p>
            <h1>Empowering Minds. <span>Inspiring Potential.</span></h1>
            <p className="hero-text">
              Consulting and coaching services that help students—especially from immigrant communities—achieve academic success, build confidence, and create brighter futures.
            </p>
            <div className="button-row">
              <Button onClick={() => setActivePage("Contact")}>
                Start the Conversation <ArrowRight size={18} />
              </Button>
              <Button onClick={() => setActivePage("Services")} variant="outline">
                Explore Services
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="hero-image-wrap">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Diverse students learning together with a mentor"
              />
            </div>
            <Card className="quote-card">
              <p>Every Student. Every Story. Every Dream Matters.</p>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="container section">
        <div className="feature-grid">
          {["Personalized Guidance", "Culturally Responsive Support", "Transformative Results"].map((item) => (
            <Card key={item}>
              <CheckCircle2 className="icon" />
              <h3>{item}</h3>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Support for students, families, and schools"
        text="Practical, compassionate consulting designed to help learners feel equipped, encouraged, and understood."
      />
      <section className="container section-tight">
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="service-card">
                <div className="service-icon"><Icon /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Experience that makes a difference"
        text="Bridging Dreams Consulting brings over 20 years of achieving transformative results by empowering students and strengthening communities."
      />
      <section className="container about-grid section-tight">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
            alt="Teacher supporting students in a classroom"
          />
        </div>
        <Card className="about-card">
          <p className="eyebrow amber">Our Approach</p>
          <h2>Rooted in care, expertise, and possibility.</h2>
          <p>
            With a strong foundation in science, environmental engineering, educational services, and international school teaching, the consultancy offers a thoughtful blend of academic strategy, emotional encouragement, and cultural understanding.
          </p>
          <div className="check-list">
            {["Student-centered coaching", "Support for immigrant and internationally mobile families", "Partnership with schools and parents", "Confidence-building academic planning"].map((item) => (
              <p key={item}><CheckCircle2 /> {item}</p>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}

function ImmigrantSupport() {
  return (
    <main>
      <PageHero
        eyebrow="Immigrant Student Support"
        title="Helping students belong, adapt, and thrive"
        text="Specialized support for students navigating new school systems, cultures, languages, expectations, and identities."
      />
      <section className="container section-tight">
        <div className="support-grid">
          {[
            ["Transition Support", "Helping students adjust to new academic environments and expectations."],
            ["Family Guidance", "Supporting parents as they navigate school communication, choices, and resources."],
            ["Confidence & Belonging", "Creating space for students to feel understood, capable, and valued."]
          ].map(([title, text]) => (
            <Card key={title}>
              <Globe2 className="icon large" />
              <h3>{title}</h3>
              <p>{text}</p>
            </Card>
          ))}
        </div>
        <div className="statement">
          <h2>Every background is a strength.</h2>
          <p>
            The goal is not only academic improvement, but also helping students recognize their story, culture, and resilience as assets in their learning journey.
          </p>
        </div>
      </section>
    </main>
  );
}

function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation about your child’s future"
        text="Online and in-person consultations are available for families, students, and schools."
      />

      <section className="container contact-grid section-tight">

        <Card className="contact-card">
          <h2>Contact Details</h2>

          <div className="contact-details">
            <p>
              <Mail />
              hello@bridgingdreamsconsulting.com
            </p>

            <p>
              <Phone />
              +1 (555) 123-4567
            </p>

            <p>
              <MapPin />
              Online & in-person consultations
            </p>
          </div>
        </Card>

        <Card className="contact-card">
          <h2>Request a Consultation</h2>

          <form
            action="https://formspree.io/f/meedzljy"
            class="fs-form"
            target="_top"
            method="POST"
          >
            <div class="fs-field">
              <label class="fs-label" for="name">Your Name</label>
              <input class="fs-input" id="name" name="name" required />
            </div>
            <div class="fs-field">
              <label class="fs-label" for="email">Email</label>
              <input class="fs-input" id="email" name="email" required />
              <p class="fs-description">
                This will help me respond to your query via an email.
              </p>
            </div>
            <div class="fs-field">
              <label class="fs-label" for="message">Message</label>
              <textarea
                class="fs-textarea"
                id="message"
                name="message"
                required
              ></textarea>
              <p class="fs-description">What would you like to discuss?</p>
            </div>
            <div class="fs-button-group">
              <button class="fs-button" type="submit">Submit</button>
            </div>
          </form>
        </Card>

      </section>
    </main>
  );
}

function Footer({ setActivePage }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Logo />
        <div className="footer-links">
          {pages.map((page) => (
            <button key={page} onClick={() => setActivePage(page)}>{page}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="site">
      <Header activePage={activePage} setActivePage={setActivePage} />
      {activePage === "Home" && <Home setActivePage={setActivePage} />}
      {activePage === "Services" && <Services />}
      {activePage === "About" && <About />}
      {activePage === "Immigrant Support" && <ImmigrantSupport />}
      {activePage === "Contact" && <Contact />}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
