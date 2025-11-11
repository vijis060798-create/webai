import { MessageSquare, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm">
            Next-Gen AI Technology
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Empower Your Business with{' '}
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent animate-gradient">
              Smart AI Agents
            </span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed">
            Automate communication, HR, and support with Victinet's next-gen AI technology.
            Making business smarter, faster, and more efficient.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105">
              <MessageSquare className="w-5 h-5" />
              Talk to Our AI
              <div className="w-0 group-hover:w-2 h-2 bg-white rounded-full transition-all"></div>
            </button>

            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary-500/50 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary-500/10 transition-all transform hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              Book a Demo
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative w-64 h-64 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl rotate-6 animate-spin-slow opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-secondary-400 rounded-3xl -rotate-6 animate-spin-slow-reverse opacity-20"></div>

              <div className="absolute inset-8 bg-slate-900 rounded-2xl flex items-center justify-center border border-primary-500/30">
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 animate-slide-in"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                      <div className="h-2 bg-primary-500/30 rounded" style={{ width: `${100 + i * 20}px` }}></div>
                    </div>
                  ))}
                </div>
              </div>

              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary-400 rounded-full animate-orbit"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '4s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
