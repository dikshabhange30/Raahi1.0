import React, { useState } from 'react';
import { X, Lock, Check, ShieldCheck, Globe, MapPin, User, LogOut, HeartHandshake, HelpCircle, Sparkles, MessageSquare, Phone, Send, Info, Award, Star } from 'lucide-react';
import { CITIES, LANGUAGES } from '../data/mockData';

export const HELPS_OFFERED_OPTIONS = [
  { id: 'pg_rec', label: 'PG & Flatmate Recommendations', icon: '🏠', desc: 'Verified PG stays, safe flatmate matching & rental agreement tips' },
  { id: 'food_help', label: 'Home Food & Regional Mess Help', icon: '🍱', desc: 'Home-cooked tiffin contacts, regional mess & dhabas' },
  { id: 'commute_help', label: 'Public Transport & Metro Guide', icon: '🚌', desc: 'Bus routes, Namma Metro lines & auto fare negotiation hacks' },
  { id: 'emergency_help', label: 'Emergency & Healthcare Guidance', icon: '🏥', desc: '24/7 hospitals, female-safe doctors & emergency helplines' },
  { id: 'language_help', label: 'Local Language & Dialect Assistance', icon: '🗣️', desc: 'Translating local phrases & auto/vendor bargaining' },
  { id: 'job_college', label: 'College & Workplace Locality Advice', icon: '💼', desc: 'Tech park locations, college onboarding & travel times' },
  { id: 'shopping_help', label: 'Budget Shopping & Furniture Setup', icon: '🛒', desc: 'Flea markets, cheap groceries & secondhand furniture rentals' },
  { id: 'community_meetup', label: 'Weekend Meetups & Coffee Buddy', icon: '☕', desc: 'City sightseeing, weekend coffee hangouts & festival events' }
];

export const HELPS_NEEDED_OPTIONS = [
  { id: 'pg_search', label: 'PG / Flat Accommodation Search', icon: '🏡', desc: 'Looking for safe female/male PGs or room shares' },
  { id: 'food_tiffin', label: 'Regional Home Tiffin Services', icon: '🍲', desc: 'Seeking daily North/South/West Indian home meals' },
  { id: 'commute_route', label: 'Daily Commute & Route Guidance', icon: '🗺️', desc: 'Need route advice for daily office or college travel' },
  { id: 'doctor_rec', label: 'Doctor & Healthcare Recommendations', icon: '🩺', desc: 'Searching for trusted clinics & female health specialists' },
  { id: 'language_learn', label: 'Local Language Phrases Learning', icon: '💬', desc: 'Want to learn key conversation words for daily interaction' },
  { id: 'office_locality', label: 'Office / College Locality Guidance', icon: '🏢', desc: 'Advice on safe neighborhoods near major work hubs' },
  { id: 'furniture_rent', label: 'Furniture & Appliance Rental Advice', icon: '🛋️', desc: 'Looking for budget rental setups & essential buys' }
];

export default function ProfileModal({ user, isOpen, onClose, onUpdateUser, onLogout }) {
  if (!isOpen || !user) return null;

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'offered' | 'needed'
  const [selectedLanguages, setSelectedLanguages] = useState(user.languages || ['marathi', 'english']);
  const [selectedCity, setSelectedCity] = useState(user.city || 'bengaluru');
  const [bio, setBio] = useState(user.bio || 'Recently relocated to the city! Excited to connect with fellow Raahis, share home food leads, and help newcomers settle in.');
  const [contactPref, setContactPref] = useState(user.contactPref || 'chat');
  
  const [helpsOffered, setHelpsOffered] = useState(user.helpsOffered || ['pg_rec', 'food_help', 'commute_help']);
  const [helpsNeeded, setHelpsNeeded] = useState(user.helpsNeeded || ['pg_search', 'food_tiffin']);

  const [showSavedToast, setShowSavedToast] = useState(false);

  const toggleLanguage = (langId) => {
    if (selectedLanguages.includes(langId)) {
      if (selectedLanguages.length > 1) {
        setSelectedLanguages(selectedLanguages.filter(l => l !== langId));
      }
    } else {
      setSelectedLanguages([...selectedLanguages, langId]);
    }
  };

  const toggleHelpsOffered = (id) => {
    if (helpsOffered.includes(id)) {
      setHelpsOffered(helpsOffered.filter(item => item !== id));
    } else {
      setHelpsOffered([...helpsOffered, id]);
    }
  };

  const toggleHelpsNeeded = (id) => {
    if (helpsNeeded.includes(id)) {
      setHelpsNeeded(helpsNeeded.filter(item => item !== id));
    } else {
      setHelpsNeeded([...helpsNeeded, id]);
    }
  };

  const handleSave = () => {
    onUpdateUser({
      ...user,
      city: selectedCity,
      languages: selectedLanguages,
      bio,
      contactPref,
      helpsOffered,
      helpsNeeded
    });
    setShowSavedToast(true);
    setTimeout(() => {
      setShowSavedToast(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-raahi-dark/70 backdrop-blur-md animate-fadeIn">
      
      {/* EXPANDED BIG PROFILE MODAL CONTAINER */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-raahi-primary/20 w-full max-w-4xl max-h-[92vh] flex flex-col relative">
        
        {/* TOP COVER BANNER */}
        <div className="bg-gradient-to-r from-raahi-dark via-raahi-primary to-raahi-sageDark p-6 md:p-8 text-white relative shrink-0">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
            aria-label="Close profile"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2">
            
            {/* User Avatar & Info */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover ring-4 ring-white/30 shadow-2xl"
                />
                <span className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-500 text-white rounded-full shadow-lg" title="Verified Community Companion">
                  <ShieldCheck className="w-4 h-4" />
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{user.name}</h2>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-300 fill-amber-300" /> 4.9 Rating
                  </span>
                </div>

                <p className="text-xs text-white/80 mt-0.5">{user.email}</p>

                <div className="flex items-center gap-2 mt-2 flex-wrap text-xs">
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-raahi-clay" /> {CITIES.find(c => c.id === selectedCity)?.name || selectedCity}
                  </span>
                  
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white font-semibold flex items-center gap-1">
                    <Lock className="w-3 h-3 text-amber-300" /> Gender: {user.gender} (Immutable)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats Badges */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/15 self-stretch md:self-auto justify-around">
              <div className="text-center px-2">
                <div className="text-xl font-extrabold text-white">{helpsOffered.length}</div>
                <div className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Helps Offered</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center px-2">
                <div className="text-xl font-extrabold text-white">{helpsNeeded.length}</div>
                <div className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Helps Needed</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center px-2">
                <div className="text-xl font-extrabold text-raahi-clay">14</div>
                <div className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Community Helps</div>
              </div>
            </div>

          </div>

          {/* Toast Notification Alert */}
          {showSavedToast && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-500 text-white text-xs font-bold flex items-center justify-between shadow-lg animate-fadeIn">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 bg-white text-emerald-600 rounded-full p-0.5" />
                <span>Profile & Help preferences saved successfully!</span>
              </div>
              <button onClick={() => setShowSavedToast(false)} className="text-white/80 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

        {/* TABS NAVIGATION HEADER */}
        <div className="bg-raahi-sand/70 border-b border-raahi-primary/10 px-6 py-3 flex items-center gap-2 overflow-x-auto custom-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-raahi-primary text-white shadow-soft'
                : 'bg-white text-raahi-dark/70 hover:bg-raahi-sand'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Overview & Bio</span>
          </button>

          <button
            onClick={() => setActiveTab('offered')}
            className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'offered'
                ? 'bg-raahi-primary text-white shadow-soft'
                : 'bg-white text-raahi-dark/70 hover:bg-raahi-sand'
            }`}
          >
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            <span>What Help I Can Offer</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === 'offered' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'}`}>
              {helpsOffered.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('needed')}
            className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'needed'
                ? 'bg-raahi-primary text-white shadow-soft'
                : 'bg-white text-raahi-dark/70 hover:bg-raahi-sand'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>What Help I Need</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === 'needed' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'}`}>
              {helpsNeeded.length}
            </span>
          </button>
        </div>

        {/* TAB CONTENTS (SCROLLABLE AREA) */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          {/* TAB 1: OVERVIEW & BIO */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* SAFETY NOTICE CARD */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                <Lock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-0.5">Gender Policy & Community Protection</strong>
                  <span>Your gender selection (<strong>{user.gender}</strong>) is permanently locked to protect gender-safe women-only & men-only community groups on Raahi.</span>
                </div>
              </div>

              {/* RELOCATION CITY & LANGUAGES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Relocation City */}
                <div className="bg-raahi-sand/40 p-4 rounded-2xl border border-raahi-primary/10">
                  <label className="block text-xs font-bold text-raahi-dark mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-raahi-primary" /> Current Relocation City
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-3 pr-4 py-2.5 rounded-xl border border-raahi-primary/20 bg-white text-sm font-medium text-raahi-dark focus:outline-none focus:ring-2 focus:ring-raahi-primary appearance-none cursor-pointer"
                  >
                    {CITIES.map(c => (
                      <option key={c.id} value={c.id}>{c.icon} {c.name} ({c.state})</option>
                    ))}
                  </select>
                  <p className="text-[11px] text-raahi-dark/60 mt-2">
                    Changing your city filters available community groups & local helpers.
                  </p>
                </div>

                {/* Preferred Contact Method */}
                <div className="bg-raahi-sand/40 p-4 rounded-2xl border border-raahi-primary/10">
                  <label className="block text-xs font-bold text-raahi-dark mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-raahi-primary" /> Preferred Contact Option
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'chat', label: 'In-App Chat', icon: <MessageSquare className="w-3.5 h-3.5" /> },
                      { id: 'whatsapp', label: 'WhatsApp', icon: <Send className="w-3.5 h-3.5" /> },
                      { id: 'call', label: 'Voice Call', icon: <Phone className="w-3.5 h-3.5" /> }
                    ].map(option => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setContactPref(option.id)}
                        className={`py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1 transition-all border ${
                          contactPref === option.id
                            ? 'bg-raahi-primary text-white border-raahi-primary shadow-soft'
                            : 'bg-white text-raahi-dark/70 border-raahi-primary/10 hover:bg-raahi-sand'
                        }`}
                      >
                        {option.icon}
                        <span>{option.label}</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-raahi-dark/60 mt-2">
                    Controls how fellow companions reach out for help or offers.
                  </p>
                </div>

              </div>

              {/* SPOKEN LANGUAGES MULTI-SELECT */}
              <div className="bg-raahi-sand/40 p-4 rounded-2xl border border-raahi-primary/10">
                <label className="block text-xs font-bold text-raahi-dark mb-2 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-raahi-primary" /> Spoken Languages (Unlocks language-matched groups)
                </label>
                <div className="flex flex-wrap gap-2 p-3 bg-white rounded-xl border border-raahi-primary/15 max-h-36 overflow-y-auto custom-scrollbar">
                  {LANGUAGES.map(l => {
                    const isSelected = selectedLanguages.includes(l.id);
                    return (
                      <button
                        key={l.id}
                        type="button"
                        onClick={() => toggleLanguage(l.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-raahi-sageDark text-white shadow-soft'
                            : 'bg-raahi-sand/60 text-raahi-dark/80 hover:bg-raahi-clay/30'
                        }`}
                      >
                        <span>{l.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* USER BIO TEXTAREA */}
              <div className="bg-raahi-sand/40 p-4 rounded-2xl border border-raahi-primary/10">
                <label className="block text-xs font-bold text-raahi-dark mb-2 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-raahi-primary" /> Bio & Relocation Story
                </label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Share a short bio about yourself, how long you've lived in the city, your profession, and how you'd like to engage with fellow Raahis..."
                  className="w-full p-3 rounded-xl border border-raahi-primary/20 bg-white text-xs font-medium text-raahi-dark focus:outline-none focus:ring-2 focus:ring-raahi-primary"
                />
              </div>

            </div>
          )}

          {/* TAB 2: WHAT HELP I CAN OFFER */}
          {activeTab === 'offered' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm font-bold text-emerald-900 mb-0.5">How Can You Help Fellow Newcomers?</strong>
                  <span>Select all the categories where you are willing to provide advice, PG recommendations, food leads, or guidance to community members in your city.</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                {HELPS_OFFERED_OPTIONS.map(option => {
                  const isSelected = helpsOffered.includes(option.id);
                  return (
                    <div
                      key={option.id}
                      onClick={() => toggleHelpsOffered(option.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-emerald-50/80 border-emerald-400 shadow-soft ring-1 ring-emerald-300'
                          : 'bg-white border-raahi-primary/15 hover:border-raahi-primary/40 hover:bg-raahi-sand/30'
                      }`}
                    >
                      <div className="text-2xl p-2 rounded-xl bg-white shadow-warm shrink-0">
                        {option.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-xs font-extrabold text-raahi-dark">{option.label}</h4>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all ${
                            isSelected ? 'bg-emerald-500 text-white' : 'border border-gray-300 bg-gray-50'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                        <p className="text-[11px] text-raahi-dark/70 leading-relaxed">{option.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: WHAT HELP I NEED */}
          {activeTab === 'needed' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm font-bold text-amber-900 mb-0.5">What Help Are You Currently Looking For?</strong>
                  <span>Select the areas where you need guidance (PGs, home tiffins, bus routes, doctors). Local guides in your community will be matched to assist you.</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                {HELPS_NEEDED_OPTIONS.map(option => {
                  const isSelected = helpsNeeded.includes(option.id);
                  return (
                    <div
                      key={option.id}
                      onClick={() => toggleHelpsNeeded(option.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-amber-50/80 border-amber-400 shadow-soft ring-1 ring-amber-300'
                          : 'bg-white border-raahi-primary/15 hover:border-raahi-primary/40 hover:bg-raahi-sand/30'
                      }`}
                    >
                      <div className="text-2xl p-2 rounded-xl bg-white shadow-warm shrink-0">
                        {option.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-xs font-extrabold text-raahi-dark">{option.label}</h4>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all ${
                            isSelected ? 'bg-amber-500 text-white' : 'border border-gray-300 bg-gray-50'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                        <p className="text-[11px] text-raahi-dark/70 leading-relaxed">{option.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* BOTTOM ACTION FOOTER */}
        <div className="p-4 md:p-6 bg-raahi-sand/50 border-t border-raahi-primary/10 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onLogout}
            className="px-4 py-3 rounded-2xl text-xs font-bold bg-white text-red-600 hover:bg-red-50 border border-red-200 transition-all flex items-center gap-1.5 shadow-soft"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-2xl text-xs font-bold bg-white text-raahi-dark/70 hover:bg-raahi-sand border border-raahi-primary/15 transition-all"
            >
              Close
            </button>

            <button
              onClick={handleSave}
              className="px-6 py-3 rounded-2xl text-xs font-bold bg-raahi-primary text-white shadow-warm hover:bg-raahi-primaryHover transition-all flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>Save Profile Preferences</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
