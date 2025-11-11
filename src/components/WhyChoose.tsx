import { Zap, Shield, Wrench, Network } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: Zap,
    title: 'Real-time Automation',
    description: 'Instant responses and actions powered by advanced AI algorithms',
    image: '/images/Wavy_Tech-20_Single-08.jpg'
  },
  {
    icon: Shield,
    title: 'Secure APIs',
    description: 'Enterprise-grade security with encrypted data transmission',
    image: '/images/GIU AMA 255-02.jpg'
  },
  {
    icon: Wrench,
    title: 'Custom AI Workflows',
    description: 'Tailored automation sequences designed for your unique processes',
    image: '/images/Wavy_Tech-21_Single-04.jpg'
  },
  {
    icon: Network,
    title: 'Multi-platform Integration',
    description: 'Connect seamlessly with all your favorite business tools',
    image: '/images/GIU AMA 255-07.jpg'
  }
];

export default function WhyChoose() {
  const [ref, isInView] = useInView();

  return (
    <section id="why-us" className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f720_1px,transparent_1px),linear-gradient(to_bottom,#a855f720_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-20" ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Why Choose Victinet
          </h2>
          <p className={`text-xl text-slate-400 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Built for scale, security, and seamless integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} isInView={isInView} />
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 blur-2xl opacity-50"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8 max-w-3xl">
              <p className="text-lg text-slate-300 leading-relaxed">
                "Victinet's AI agents have transformed our operations, reducing response times by 80%
                and freeing our team to focus on high-value tasks. The ROI was immediate."
              </p>
              <div className="mt-4 text-primary-400 font-semibold">— Global Enterprise Client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, isInView }: { feature: typeof features[0], index: number, isInView: boolean }) {
  const Icon = feature.icon;

  return (
    <div className={`group relative transition-all duration-1000 ${
      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl hover:border-primary-500/50 transition-all overflow-hidden">
        <div className="h-32 overflow-hidden">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div className="relative p-6 space-y-4">
          <div className="inline-flex p-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl group-hover:scale-110 transition-transform">
            <Icon className="w-8 h-8 text-primary-400" />
          </div>

          <h3 className="text-xl font-bold">{feature.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </div>
  );
}
