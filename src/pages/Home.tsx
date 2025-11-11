import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-950/30 to-slate-950"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary-400"
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: Math.random() * 5 + "s",
              }}
            />
          ))}
        </div>
      </div>

      <Navigation />

      <main className="relative z-10">
        <Hero />
        <Solutions />
        <HowItWorks />
        <WhyChoose />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-primary-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/logoex.png"
                  alt="Victinet"
                  className="h-10 w-auto hidden sm:block"
                />
                <span className="text-2xl font-semibold tracking-tight">
                  Victinet
                </span>
              </div>
              <p className="text-slate-400 max-w-lg">
                Victinet designs adaptive AI agents that automate customer
                conversations, internal workflows, and decision-making so your
                teams can focus on high-impact work.
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <a
                  href="mailto:enquiry@victinet.com"
                  className="flex items-center gap-2 hover:text-primary-300 transition-colors w-fit">
                  <Mail className="w-4 h-4 text-primary-400" />
                  enquiry@victinet.com
                </a>
                <a
                  href="tel:+919566115611"
                  className="flex items-center gap-2 hover:text-primary-300 transition-colors w-fit">
                  <Phone className="w-4 h-4 text-primary-400" />
                  +91 95661 15611
                </a>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  D.No 31, Arappalayam Cross Road, Madurai, Tamil Nadu 625016,
                  India
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/victinet"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Victinet on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-500/40 text-slate-200 hover:border-primary-400 hover:text-primary-300 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/victinet"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Victinet on X"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-500/40 text-slate-200 hover:border-primary-400 hover:text-primary-300 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@victinet"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Victinet on YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-500/40 text-slate-200 hover:border-secondary-400 hover:text-secondary-300 transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                Navigate
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                <li>
                  <a
                    href="#hero"
                    className="hover:text-primary-300 transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className="hover:text-primary-300 transition-colors">
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-primary-300 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#why-us"
                    className="hover:text-primary-300 transition-colors">
                    Why Victinet
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary-300 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                Spotlight Solutions
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                <li>
                  <Link
                    to="/solution/website-chatbot"
                    className="hover:text-primary-300 transition-colors">
                    Website Chatbot Agent
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solution/whatsapp-ai"
                    className="hover:text-primary-300 transition-colors">
                    WhatsApp AI Agent
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solution/custom-ai-agent"
                    className="hover:text-primary-300 transition-colors">
                    Customized AI Agent
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solution/helpdesk-agent"
                    className="hover:text-primary-300 transition-colors">
                    Helpdesk Agent
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-500/10 pt-8 text-sm text-slate-500 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <p>
              &copy; 2025 Victinet. All rights reserved. Purpose-built with
              responsible AI.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="hover:text-primary-300 transition-colors">
                Book a Strategy Call
              </a>
              <a
                href="mailto:enquiry@victinet.com?subject=Partnership%20Inquiry"
                className="hover:text-primary-300 transition-colors">
                Partnerships
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
