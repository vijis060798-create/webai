import { MessageCircle, MessageSquare, Settings, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: 'website-chatbot',
    icon: MessageCircle,
    title: 'Website Chatbot Agent',
    description: 'Handles instant responses and captures leads on your site with intelligent conversation flows.',
    color: 'from-primary-400 to-accent-400',
    image: '/images/Wavy_Tech-20_Single-08.jpg'
  },
  {
    id: 'whatsapp-ai',
    icon: MessageSquare,
    title: 'WhatsApp AI Agent',
    description: 'Engages users 24/7 through WhatsApp for queries, booking, and support with seamless automation.',
    color: 'from-accent-400 to-secondary-400',
    image: '/images/Wavy_Tech-21_Single-04.jpg'
  },
  {
    id: 'custom-ai-agent',
    icon: Settings,
    title: 'Customized AI Agent',
    description: 'Build tailored automations for finance, billing, HR, and operations with a single intelligent agent.',
    color: 'from-secondary-400 to-primary-400',
    image: '/images/GIU AMA 255-02.jpg'
  },
  {
    id: 'helpdesk-agent',
    icon: Headphones,
    title: 'Helpdesk Agent',
    description: 'Provides real-time ticketing, issue resolution, and knowledge base assistance automatically.',
    color: 'from-primary-400 to-secondary-400',
    image: '/images/GIU AMA 255-07.jpg'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }),
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: '0 25px 60px rgba(15, 118, 255, 0.2)'
  }
};

export default function Solutions() {
  const [ref, isInView] = useInView();

  return (
    <section id="solutions" className="relative py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-32 left-1/4 w-96 h-96 bg-primary-500/20 blur-3xl rounded-full"
          animate={{ x: [0, 120, -60, 0], y: [0, -80, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 -right-16 w-[28rem] h-[28rem] bg-accent-500/20 blur-3xl rounded-full"
          animate={{ x: [0, -140, 60, 0], y: [0, 60, -80, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,118,255,0.07),rgba(15,23,42,0))]"
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our AI Solutions
          </h2>
          <p className={`text-xl text-slate-400 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Intelligent automation agents that transform how your business operates
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ solution, index, isInView }: { solution: typeof solutions[0], index: number, isInView: boolean }) {
  const Icon = solution.icon;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover="hover"
      custom={index}
      className="relative group"
    >
      <motion.div
        className="pointer-events-none absolute -inset-1 rounded-[1.6rem] bg-gradient-to-r from-primary-500/40 via-accent-500/20 to-transparent opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
      />
      <Link
        to={`/solution/${solution.id}`}
        className="group relative block h-full overflow-hidden bg-slate-900/60 backdrop-blur-md border border-primary-500/20 rounded-2xl transition-all duration-500 hover:border-primary-500/50"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div className="relative h-48 overflow-hidden">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80"></div>
        </div>

        <div className="relative p-8 flex flex-col gap-4">
          <motion.div
            className="absolute inset-x-0 -top-2 h-[1px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent opacity-0 group-hover:opacity-100"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          <div className={`inline-flex w-fit p-4 bg-gradient-to-br ${solution.color} rounded-xl transform group-hover:rotate-6 transition-transform`}>
            <Icon className="w-8 h-8 text-slate-900" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {solution.title}
            </h3>

            <p className="text-slate-400 leading-relaxed">
              {solution.description}
            </p>
          </div>

          <motion.div
            className="hidden md:flex flex-col gap-3 text-primary-400 font-semibold tracking-wide pt-4"
            initial={{ opacity: 0, x: 12 }}
            whileHover={{ opacity: 1, x: 0 }}
          >
            <span className="uppercase text-sm">Explore</span>
            <span className="text-lg">Learn More</span>
            <motion.span
              className="h-0.5 w-10 bg-primary-400"
              animate={{ width: ['2rem', '3.5rem', '2rem'] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
        <div className="absolute bottom-4 left-8 flex items-center gap-2 text-primary-400 font-semibold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all md:hidden">
          Learn More
          <div className="w-6 h-0.5 bg-primary-400"></div>
        </div>
      </Link>
    </motion.div>
  );
}
