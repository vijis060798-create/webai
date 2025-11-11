import { Link2, Settings, Rocket, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    icon: Link2,
    title: 'Connect Your Platform',
    description: 'Seamlessly integrate with your existing tools and workflows in minutes.',
    image: '/images/8966026.jpg'
  },
  {
    icon: Settings,
    title: 'Configure Your AI Agent',
    description: 'Customize behavior, responses, and automation rules to match your needs.',
    image: '/images/c511ed6d-f151-477b-8869-3daf41ea26c3.jpg'
  },
  {
    icon: Rocket,
    title: 'Launch Automation Instantly',
    description: 'Go live immediately and watch your AI agent handle tasks effortlessly.',
    image: '/images/Wavy_Tech-20_Single-08.jpg'
  }
];

export default function HowItWorks() {
  const [ref, isInView] = useInView();

  return (
    <section id="how-it-works" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-20" ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            How It Works
          </h2>
          <p className={`text-xl text-slate-400 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Get up and running with AI automation in three simple steps
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent hidden md:block"></div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index, isInView }: { step: typeof steps[0], index: number, isInView: boolean }) {
  const Icon = step.icon;

  return (
    <div className={`relative transition-all duration-1000 ${
      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}
    style={{ transitionDelay: `${index * 200}ms` }}>
      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all group">
        <div className="h-40 overflow-hidden relative">
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60"></div>
        </div>

        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-full flex items-center justify-center font-bold text-xl border-4 border-slate-950">
          {index + 1}
        </div>

        <div className="p-8 text-center space-y-4">
          <div className="inline-flex p-4 bg-primary-500/10 rounded-xl">
            <Icon className="w-10 h-10 text-primary-400" />
          </div>

          <h3 className="text-2xl font-bold">{step.title}</h3>
          <p className="text-slate-400">{step.description}</p>
        </div>

        {index < steps.length - 1 && (
          <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2">
            <ArrowRight className="w-6 h-6 text-primary-500/50 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
