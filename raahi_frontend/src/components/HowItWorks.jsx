import React from 'react';
import { UserCheck, MapPin, Users, MessageCircleHeart, Sparkles, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onStartExploring }) {
  const steps = [
    {
      step: '01',
      icon: UserCheck,
      title: 'Quick Sign Up & Language Selection',
      description: 'Create your account in seconds. Select the languages you speak (e.g. Marathi, Hindi, English) and your gender to customize your experience.'
    },
    {
      step: '02',
      icon: MapPin,
      title: 'Enter Your Relocation City',
      description: 'Choose your new city (Bengaluru, Mumbai, Pune, Delhi, etc.) to discover tailored local guidance and neighborhood options.'
    },
    {
      step: '03',
      icon: Users,
      title: 'Join Matched Community Groups',
      description: 'Access verified language groups tailored to your profile (Male, Female, or Unisex groups) ensuring strict privacy & comfort.'
    },
    {
      step: '04',
      icon: MessageCircleHeart,
      title: 'Chat & Connect with Local Helpers',
      description: 'Engage in group discussions or initiate 1-on-1 personal chats with experienced local guides to get housing tips, local food, and everyday support.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white/70 backdrop-blur-sm border-y border-raahi-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-raahi-primary bg-raahi-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Simple & Social
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-raahi-dark">
            How Raahi Works for You
          </h2>
          <p className="mt-3 text-raahi-dark/70 text-base">
            From stepping off the train to feeling completely settled — here is how Raahi accompanies you every step of the way.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="relative bg-raahi-cream p-6 rounded-3xl border border-raahi-primary/15 shadow-soft hover:shadow-warm transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-raahi-primary to-raahi-clay text-white flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-raahi-primary/30 font-display">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-raahi-dark mb-2 group-hover:text-raahi-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-raahi-dark/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartExploring}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-raahi-primary text-white shadow-warm hover:bg-raahi-primaryHover hover:shadow-float hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
          >
            <Sparkles className="w-5 h-5" />
            Start Exploring Now
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-raahi-dark/50 mt-3 font-medium">
            Free forever • 100% Privacy & Safety Guaranteed
          </p>
        </div>

      </div>
    </section>
  );
}
