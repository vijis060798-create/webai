import { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot({ solutionType }: { solutionType: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hello! I'm your ${solutionType} assistant. How can I help you today?`,
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Solution-specific responses
    if (solutionType === 'Website Chatbot Agent') {
      if (lowerMessage.includes('feature') || lowerMessage.includes('capability')) {
        return 'Our Website Chatbot Agent offers 24/7 customer support, lead capture, FAQ handling, product recommendations, and seamless integration with your CRM. It can handle multiple languages and learn from every conversation.';
      }
      if (lowerMessage.includes('integration') || lowerMessage.includes('connect')) {
        return 'The chatbot integrates easily with popular platforms like WordPress, Shopify, React, and more. It can connect to your CRM, email marketing tools, and analytics platforms.';
      }
      if (lowerMessage.includes('cost') || lowerMessage.includes('price')) {
        return 'Pricing is flexible based on your needs. We offer monthly subscriptions starting from $99/month. Contact us for a custom quote tailored to your business.';
      }
    } else if (solutionType === 'WhatsApp AI Agent') {
      if (lowerMessage.includes('feature') || lowerMessage.includes('capability')) {
        return 'Our WhatsApp AI Agent can handle order tracking, appointment booking, customer support, payment processing, and automated responses. It works 24/7 and supports multimedia messages.';
      }
      if (lowerMessage.includes('setup') || lowerMessage.includes('install')) {
        return 'Setup is simple! We provide step-by-step guidance. You just need to connect your WhatsApp Business API, configure your preferences, and you\'re ready to go. Usually takes less than 24 hours.';
      }
    } else if (solutionType === 'HRMS Agent') {
      if (lowerMessage.includes('feature') || lowerMessage.includes('capability')) {
        return 'The HRMS Agent handles leave requests, payroll queries, employee onboarding, policy questions, attendance tracking, and performance reviews. It integrates with your existing HR systems.';
      }
      if (lowerMessage.includes('security') || lowerMessage.includes('privacy')) {
        return 'Security is our top priority. All employee data is encrypted, compliant with GDPR and local regulations. Access is role-based and all interactions are logged for audit purposes.';
      }
    } else if (solutionType === 'Helpdesk Agent') {
      if (lowerMessage.includes('feature') || lowerMessage.includes('capability')) {
        return 'Our Helpdesk Agent creates tickets automatically, provides instant solutions from knowledge base, escalates complex issues, tracks resolution times, and integrates with popular ticketing systems like Zendesk and Jira.';
      }
      if (lowerMessage.includes('response') || lowerMessage.includes('time')) {
        return 'The agent responds instantly to common queries. For complex issues, it creates tickets and notifies your team immediately. Average response time is under 2 seconds for standard queries.';
      }
    }

    // Generic responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return `Hello! I'm here to help you learn more about our ${solutionType}. What would you like to know?`;
    }
    if (lowerMessage.includes('help')) {
      return 'I can help you with information about features, pricing, setup, integration, and more. Just ask me anything!';
    }
    if (lowerMessage.includes('demo') || lowerMessage.includes('trial')) {
      return 'Great! You can book a demo by clicking the "Book a Demo" button or contacting us at enquiry@victinet.com. We offer a 14-day free trial.';
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
      return 'You can reach us at enquiry@victinet.com or fill out the contact form on this page. Our team typically responds within 24 hours.';
    }

    return `That's a great question about ${solutionType}! Let me connect you with more detailed information. Would you like to schedule a demo or speak with our team? You can also email us at enquiry@victinet.com.`;
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-110 flex items-center justify-center group"
          aria-label="Open chatbot"
        >
          <Bot className="w-8 h-8 text-white group-hover:animate-bounce" />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-slate-900/95 backdrop-blur-lg border border-primary-500/30 rounded-2xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-primary-500/20 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{solutionType}</h3>
                <p className="text-xs text-slate-400">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-800 transition-colors"
              aria-label="Close chatbot"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-slate-900" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                      : 'bg-slate-800/50 text-slate-200 border border-primary-500/20'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs mt-1 opacity-60">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-primary-500/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-slate-800/50 border border-primary-500/30 rounded-xl focus:outline-none focus:border-primary-500 text-white placeholder-slate-400"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl hover:shadow-lg hover:shadow-primary-500/50 transition-all transform hover:scale-105"
                aria-label="Send message"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

