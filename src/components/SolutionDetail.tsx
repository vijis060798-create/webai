import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Zap, Shield, Globe, Clock, Users, MessageSquare, Headphones, MessageCircle, Settings } from 'lucide-react';
import Chatbot from './Chatbot';

type SolutionDetailContent = {
  title: string;
  icon: any;
  description: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  integrations: string[];
  examples: {
    title: string;
    summary: string;
    outcome: string;
  }[];
  color: string;
  heroImage: string;
};

const solutionDetails: Record<string, SolutionDetailContent> = {
  'website-chatbot': {
    title: 'Website Chatbot Agent',
    icon: MessageCircle,
    description: 'Transform your website into a 24/7 customer engagement powerhouse with our intelligent chatbot agent. Capture leads, answer queries, and provide instant support to every visitor.',
    features: [
      '24/7 automated customer support',
      'Intelligent lead capture and qualification',
      'Multi-language support',
      'Seamless CRM integration',
      'Product recommendations',
      'FAQ handling and knowledge base',
      'Conversation analytics',
      'Customizable conversation flows'
    ],
    benefits: [
      'Reduce response time from hours to seconds',
      'Capture 3x more leads automatically',
      'Handle unlimited conversations simultaneously',
      'Reduce support costs by up to 60%',
      'Improve customer satisfaction scores',
      'Scale support without hiring'
    ],
    useCases: [
      'E-commerce product inquiries and recommendations',
      'Lead qualification and form filling',
      'Appointment scheduling and bookings',
      'Technical support and troubleshooting',
      'Order tracking and status updates',
      'Content discovery and navigation help'
    ],
    integrations: [
      'WordPress, Shopify, React, Vue',
      'Salesforce, HubSpot, Zoho CRM',
      'Mailchimp, SendGrid',
      'Google Analytics, Mixpanel',
      'Stripe, PayPal',
      'Zendesk, Freshdesk'
    ],
    examples: [
      {
        title: 'Lead Capture Boost',
        summary: 'A SaaS company deployed the chatbot to greet visitors and qualify them automatically.',
        outcome: 'Qualified leads increased by 42% in the first month while response time dropped to under 10 seconds.'
      },
      {
        title: '24/7 Support Desk',
        summary: 'An e-commerce store routed after-hours support questions through the chatbot with guided workflows.',
        outcome: 'Night-time tickets resolved without human intervention rose to 78%, keeping CSAT above 4.6/5.'
      }
    ],
    color: 'from-primary-400 to-accent-400',
    heroImage: '/images/Wavy_Tech-20_Single-08.jpg'
  },
  'whatsapp-ai': {
    title: 'WhatsApp AI Agent',
    icon: MessageSquare,
    description: 'Engage customers on their favorite messaging platform. Our WhatsApp AI Agent handles queries, bookings, support, and transactions 24/7 through WhatsApp Business API.',
    features: [
      'WhatsApp Business API integration',
      '24/7 automated messaging',
      'Order tracking and updates',
      'Appointment booking',
      'Payment processing',
      'Multimedia message support',
      'Group chat management',
      'Broadcast messaging'
    ],
    benefits: [
      'Reach customers where they already are',
      '98% message open rate',
      'Instant customer engagement',
      'Automated order confirmations',
      'Reduce manual support workload',
      'Increase customer retention'
    ],
    useCases: [
      'Customer support and inquiries',
      'Order confirmations and tracking',
      'Appointment scheduling',
      'Product recommendations',
      'Payment reminders',
      'Customer feedback collection'
    ],
    integrations: [
      'WhatsApp Business API',
      'Shopify, WooCommerce',
      'Stripe, Razorpay',
      'Google Calendar, Calendly',
      'Zendesk, Freshdesk',
      'CRM systems'
    ],
    examples: [
      {
        title: 'Appointment Concierge',
        summary: 'A dental clinic automated appointment reminders, confirmations, and rescheduling on WhatsApp.',
        outcome: 'No-show rates fell by 33% while staff saved four hours per day previously spent on phone calls.'
      },
      {
        title: 'Order Status Bot',
        summary: 'A D2C brand deployed auto-responses for order tracking, returns, and FAQs via WhatsApp.',
        outcome: 'Support volume dropped 55% and customer satisfaction improved with real-time updates.'
      }
    ],
    color: 'from-accent-400 to-secondary-400',
    heroImage: '/images/Wavy_Tech-21_Single-04.jpg'
  },
  'custom-ai-agent': {
    title: 'Customized AI Agent',
    icon: Settings,
    description: 'Design a unified AI agent that adapts to your finance, billing, HR, and operational workflows. Deliver tailored automations with enterprise-grade security and governance.',
    features: [
      'Drag-and-drop workflow builder for every department',
      'Finance approvals, reconciliations, and variance alerts',
      'Billing dispute resolution and payment reminders',
      'HR knowledge base and employee self-service',
      'Role-based access, audit trails, and governance',
      'Secure connectors to ERP, CRM, and HRIS systems',
      'Centralized knowledge orchestration across teams',
      'Embedded analytics and performance dashboards'
    ],
    benefits: [
      'Unify departmental automations in a single AI layer',
      'Reduce manual processing time by up to 65%',
      'Improve compliance with traceable decisions',
      'Deliver consistent answers across finance, HR, and ops',
      'Accelerate change requests with reusable templates',
      'Scale support without expanding headcount'
    ],
    useCases: [
      'Finance close checklists and variance escalations',
      'Billing and subscription management workflows',
      'HR onboarding, payroll, and policy assistance',
      'Expense approvals with data validation',
      'Vendor or partner onboarding journeys',
      'Compliance attestations and audit preparations'
    ],
    integrations: [
      'SAP, Oracle, Microsoft Dynamics',
      'QuickBooks, Xero, FreshBooks',
      'Workday, BambooHR, ADP',
      'Salesforce, HubSpot, Zoho CRM',
      'Stripe, Razorpay, PayPal',
      'Slack, Microsoft Teams, Email platforms'
    ],
    examples: [
      {
        title: 'Finance Control Center',
        summary: 'A multi-entity enterprise automated reconciliations, approvals, and variance tracking with role-based routing.',
        outcome: 'Month-end close shortened by four days while compliance exceptions dropped 38%.'
      },
      {
        title: 'People Operations Concierge',
        summary: 'A global workforce received a unified assistant for onboarding, pay slips, and policy guidance across channels.',
        outcome: 'HR inquiries deflected by 72% and employee satisfaction scores climbed to 4.7/5.'
      }
    ],
    color: 'from-secondary-400 to-primary-400',
    heroImage: '/images/GIU AMA 255-02.jpg'
  },
  'helpdesk-agent': {
    title: 'Helpdesk Agent',
    icon: Headphones,
    description: 'Revolutionize your support operations with an AI agent that creates tickets, resolves issues, and escalates complex problems automatically.',
    features: [
      'Automatic ticket creation',
      'Instant issue resolution',
      'Knowledge base integration',
      'Smart ticket routing',
      'Escalation management',
      'SLA tracking',
      'Customer satisfaction surveys',
      'Multi-channel support'
    ],
    benefits: [
      'Resolve 80% of tickets automatically',
      'Reduce average resolution time',
      'Improve first response time',
      'Scale support without scaling costs',
      '24/7 availability',
      'Consistent support quality'
    ],
    useCases: [
      'Technical support tickets',
      'Bug reports and tracking',
      'Feature requests',
      'Account issues',
      'Billing inquiries',
      'General customer support'
    ],
    integrations: [
      'Zendesk, Freshdesk, Jira',
      'ServiceNow, Jira Service Desk',
      'Intercom, Drift',
      'Slack, Microsoft Teams',
      'Email systems',
      'Knowledge base platforms'
    ],
    examples: [
      {
        title: 'Instant Triage',
        summary: 'A SaaS helpdesk connected the agent to categorize and resolve repetitive tickets automatically.',
        outcome: 'First response time improved by 71% and resolution SLAs were met 95% of the time.'
      },
      {
        title: 'Proactive Escalation',
        summary: 'The agent monitored sentiment and escalated critical incidents with full context to specialists.',
        outcome: 'Escalation handoff time dropped from 45 minutes to under five minutes with higher customer trust.'
      }
    ],
    color: 'from-primary-400 to-secondary-400',
    heroImage: '/images/GIU AMA 255-07.jpg'
  }
};

const gridPatternSvg = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="rgba(148,163,184,0.08)" stroke-width="1"><path d="M200 0v400M0 200h400"/><circle cx="200" cy="200" r="120"/></g></svg>`;
const GRID_PATTERN = `data:image/svg+xml,${encodeURIComponent(gridPatternSvg)}`;

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: index * 0.05, ease: 'easeOut' }
  })
};

export default function SolutionDetail() {
  const { id } = useParams<{ id: string }>();
  const solution = id ? solutionDetails[id] : null;

  // Scroll to top when component mounts or route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
          <Link to="/" className="text-primary-400 hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const Icon = solution.icon;

  return (
    <div className="relative bg-slate-950 text-white min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-950/30 to-slate-950"></div>
        <motion.div
          className="absolute -top-32 left-10 md:left-32 w-[28rem] h-[28rem] rounded-full bg-primary-500/15 blur-3xl"
          animate={{ x: [0, 80, -40, 0], y: [0, -60, 20, 0], opacity: [0.45, 0.75, 0.5] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10rem] right-[-6rem] w-[32rem] h-[32rem] rounded-full bg-secondary-500/10 blur-[120px]"
          animate={{ x: [0, -90, 30, 0], y: [0, 70, -40, 0], opacity: [0.3, 0.6, 0.35] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url("${GRID_PATTERN}")` }}
          animate={{ backgroundPosition: ['0px 0px', '40px 40px', '0px 0px'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-primary-500/20 bg-slate-950/80 backdrop-blur-lg">
          <motion.div
            className="max-w-7xl mx-auto px-4 py-6"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4">
              <div className={`p-4 bg-gradient-to-br ${solution.color} rounded-2xl`}>
                <Icon className="w-12 h-12 text-slate-900" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{solution.title}</h1>
                <p className="text-xl text-slate-400">{solution.description}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <motion.div
          className="relative h-96 overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={solution.heroImage}
            alt={solution.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-40"></div>
        </motion.div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-primary-400" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {solution.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    className="flex items-start gap-3"
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index}
                  >
                    <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-accent-400" />
                Benefits
              </h2>
              <ul className="space-y-3">
                {solution.benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    className="flex items-start gap-3"
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index}
                  >
                    <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Use Cases */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-secondary-400" />
                Use Cases
              </h2>
              <ul className="space-y-3">
                {solution.useCases.map((useCase, index) => (
                  <motion.li
                    key={useCase}
                    className="flex items-start gap-3"
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index}
                  >
                    <CheckCircle className="w-6 h-6 text-secondary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{useCase}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Example Scenarios */}
            <motion.div
              className="md:col-span-2"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary-300" />
                Real-World Examples
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {solution.examples.map((example, index) => (
                  <motion.div
                    key={example.title}
                    className="relative overflow-hidden p-6 bg-slate-900/60 border border-primary-500/30 rounded-2xl transition-colors"
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index}
                    whileHover={{ translateY: -8, borderColor: 'rgba(59, 130, 246, 0.6)' }}
                  >
                    <motion.div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <h3 className="relative text-2xl font-semibold mb-3 text-white">
                      {example.title}
                    </h3>
                    <p className="relative text-slate-300 mb-3">
                      {example.summary}
                    </p>
                    <p className="relative text-primary-300 font-semibold">
                      Outcome: {example.outcome}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={4}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-primary-400" />
                Integrations
              </h2>
              <div className="flex flex-wrap gap-2">
                {solution.integrations.map((integration, index) => (
                  <motion.span
                    key={integration}
                    className="px-4 py-2 bg-slate-800/50 border border-primary-500/20 rounded-lg text-slate-300"
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                  >
                    {integration}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            variants={heroVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="relative inline-block p-8 bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-2xl overflow-hidden"
              whileHover={{ translateY: -6, boxShadow: '0 25px 60px rgba(15, 118, 255, 0.2)' }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(59,130,246,0.2),rgba(236,72,153,0.1),rgba(59,130,246,0.2))] opacity-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-slate-400 mb-6">
                  Book a demo or contact us to learn how {solution.title} can transform your business
                </p>
                <div className="flex gap-4 justify-center">
                  <Link
                    to="/#contact"
                    className="px-8 py-4 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all transform hover:scale-105"
                  >
                    Contact Us
                  </Link>
                  <a
                    href="mailto:enquiry@victinet.com"
                    className="px-8 py-4 border-2 border-primary-500/50 rounded-full font-semibold hover:bg-primary-500/10 transition-all"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot solutionType={solution.title} />
    </div>
  );
}

