import React from 'react';
import { Search, Heart, ShieldCheck, Users, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ user, onActionClick, onExploreClick }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Decorative Organic Shapes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <div className="absolute top-0 right-10 w-96 h-96 bg-raahi-clay/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-raahi-sage/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-raahi-cream border border-raahi-primary/20 shadow-soft text-xs font-semibold text-raahi-primary">
            <Sparkles className="w-4 h-4 text-raahi-primary" />
            <span>Human-Centered City Relocation & Language Companion</span>
          </div>

          {/* Big Tagline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-raahi-dark tracking-tight leading-tight">
            Never feel lost in a new city. <br />
            <span className="bg-gradient-to-r from-raahi-primary via-amber-600 to-raahi-sageDark bg-clip-text text-transparent">
              Feel at Home, Anywhere.
            </span>
          </h1>

          {/* Short Intro Tagline */}
          <p className="text-lg sm:text-xl text-raahi-dark/80 font-normal leading-relaxed">
            Shifted to a new city where you don't know the local language? <strong className="text-raahi-dark font-semibold">Raahi</strong> connects you with verified local language helpers, home tiffins, and gender-safe community groups — so every new city feels like home.
          </p>

          {/* Main Action Cards: FIND HELP & GIVE HELP */}
          <div className="pt-8 grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            
            {/* FIND HELP Card */}
            <div 
              onClick={() => onActionClick('find_help')}
              className="group p-6 rounded-3xl bg-white border border-raahi-primary/20 shadow-warm hover:shadow-float hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-raahi-primary/10 text-raahi-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-raahi-dark group-hover:text-raahi-primary transition-colors flex items-center justify-between">
                Find Help
                <ArrowRight className="w-5 h-5 text-raahi-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-sm text-raahi-dark/70 mt-2 leading-relaxed">
                Looking for Marathi, Hindi or English speakers in your city? Find housing guidance, local food, and everyday help.
              </p>
              <div className="mt-4 inline-flex items-center text-xs font-bold text-raahi-primary">
                Browse Helper Communities &rarr;
              </div>
            </div>

            {/* GIVE HELP Card */}
            <div 
              onClick={() => onActionClick('give_help')}
              className="group p-6 rounded-3xl bg-white border border-raahi-sage/30 shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-raahi-sage/20 text-raahi-sageDark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 fill-raahi-sageDark" />
              </div>
              <h3 className="text-xl font-bold text-raahi-dark group-hover:text-raahi-sageDark transition-colors flex items-center justify-between">
                Give Help
                <ArrowRight className="w-5 h-5 text-raahi-sageDark opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-sm text-raahi-dark/70 mt-2 leading-relaxed">
                Know your city well? Be a Raahi guide! Help newcomers translate, find PGs, or settle down comfortably.
              </p>
              <div className="mt-4 inline-flex items-center text-xs font-bold text-raahi-sageDark">
                Join as a Local Helper &rarr;
              </div>
            </div>

          </div>

          {/* Quick Trust Indicators */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-raahi-dark/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-raahi-sageDark" />
              <span>Gender-Protected Communities</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-raahi-primary" />
              <span>Language-Matched Groups</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-amber-600" />
              <span>Direct 1-on-1 Safe Chat</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
