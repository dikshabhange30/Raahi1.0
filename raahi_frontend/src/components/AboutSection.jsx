import React from 'react';
import { Compass, Heart, ShieldCheck, Users, Globe, Smile, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-raahi-primary bg-raahi-primary/10 px-4 py-1.5 rounded-full inline-block">
            Our Story & Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-raahi-dark">
            Why We Built Raahi ❤️
          </h2>
          <p className="text-base text-raahi-dark/70 leading-relaxed">
            Every year, millions of people pack their bags and move to a new city for work, college, or life transitions. But standing at a bus station or apartment gate without knowing the local language can feel daunting and isolating.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="p-6 rounded-3xl bg-raahi-cream border border-raahi-primary/15 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-raahi-primary/10 text-raahi-primary flex items-center justify-center font-bold">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-raahi-dark">Language Bridge</h3>
            <p className="text-xs text-raahi-dark/70 leading-relaxed">
              We connect you with people who speak your mother tongue in your new city. Translate rental contracts, find food, and navigate local transport together.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-raahi-cream border border-raahi-primary/15 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-raahi-sage/20 text-raahi-sageDark flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-raahi-dark">Gender Privacy Shield</h3>
            <p className="text-xs text-raahi-dark/70 leading-relaxed">
              Strict gender verification policies ensure that women-only and men-only circles remain 100% safe, private, and respected.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-raahi-cream border border-raahi-primary/15 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
              <Heart className="w-6 h-6 fill-amber-500" />
            </div>
            <h3 className="text-lg font-bold text-raahi-dark">Human Warmth</h3>
            <p className="text-xs text-raahi-dark/70 leading-relaxed">
              Raahi isn't just an app — it's a feeling of home. Where a friendly stranger becomes your local guide and lifelong friend.
            </p>
          </div>

        </div>

        {/* Mission Quote Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-raahi-dark via-raahi-primary to-raahi-sageDark text-white text-center shadow-warm relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <Sparkles className="w-8 h-8 text-raahi-clay mx-auto animate-pulse" />
            <p className="text-xl font-bold font-display leading-snug">
              "No companion on a new journey should walk alone."
            </p>
            <span className="text-xs text-white/80 block font-medium">
              — Team Raahi • Built with heart in 2026
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
