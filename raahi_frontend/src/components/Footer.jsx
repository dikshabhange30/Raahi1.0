import React from 'react';
import { Compass, Heart, Globe, Mail, Shield, Lock, FileText } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-raahi-dark text-white pt-16 pb-12 border-t border-raahi-primary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">
          
          {/* Col 1 & 2: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-raahi-primary flex items-center justify-center text-white shadow-warm">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                Raahi
              </span>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Raahi is a human-centered relocation and language companion. We ensure no newcomer ever feels isolated or helpless in a new city.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-raahi-clay">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-raahi-sage" />
                Available across 6+ major Indian metros
              </span>
            </div>
          </div>

          {/* Col 3: Explore */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-raahi-clay mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <button onClick={() => onNavigate('explore')} className="hover:text-raahi-primary transition-colors">
                  Language Communities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('find_help')} className="hover:text-raahi-primary transition-colors">
                  Find Local Helpers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('give_help')} className="hover:text-raahi-primary transition-colors">
                  Give Help & Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('partners')} className="hover:text-raahi-primary transition-colors">
                  Affordable PGs & Mess
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-raahi-clay mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-raahi-primary transition-colors">
                  About Raahi Story
                </button>
              </li>
              <li>
                <a href="#mission" className="hover:text-raahi-primary transition-colors">
                  Our Human Mission
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-raahi-primary transition-colors">
                  Gender & Safety Shield
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-raahi-primary transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Privacy */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-raahi-clay mb-4">
              Legal & Privacy
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#privacy" className="hover:text-raahi-primary transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-raahi-sage" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-raahi-primary transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-raahi-sage" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#safety-rules" className="hover:text-raahi-primary transition-colors flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-raahi-sage" />
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Single Line Divider */}
        <div className="h-px w-full bg-white/10 my-6"></div>

        {/* Copyright Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-1">
            <span>&copy; 2026 Raahi. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-1.5 text-sm font-medium text-raahi-sand">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-raahi-primary fill-raahi-primary animate-pulse" />
            <span>for every newcomer across the world</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
