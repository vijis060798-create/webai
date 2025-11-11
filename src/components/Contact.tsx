import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="text-center mb-16" ref={ref}>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Let's Build Your Custom AI Agent
          </h2>
          <p
            className={`text-xl text-slate-400 transition-all duration-1000 delay-100 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Our team is ready to help you deploy AI across your business
          </p>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/20 rounded-3xl blur-xl"></div>

          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-950/50 border border-primary-500/30 rounded-xl focus:outline-none focus:border-primary-500 transition-colors text-white"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-950/50 border border-primary-500/30 rounded-xl focus:outline-none focus:border-primary-500 transition-colors text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-950/50 border border-emerald-500/30 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors text-white"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-emerald-500/30 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors text-white resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-primary-500/20">
              <div className="flex items-center justify-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>or email us directly at </span>
                <a
                  href="mailto:enquiry@victinet.com"
                  className="text-primary-400 hover:underline font-semibold">
                  enquiry@victinet.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
