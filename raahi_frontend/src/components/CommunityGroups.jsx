import React, { useState } from 'react';
import { MapPin, Users, ShieldCheck, Lock, MessageSquare, Plus, CheckCircle, Search, Filter } from 'lucide-react';
import { CITIES, LANGUAGES, MOCK_COMMUNITY_GROUPS } from '../data/mockData';

export default function CommunityGroups({ user, onJoinGroup, onOpenGroupChat, onOpenAuth }) {
  const [selectedCity, setSelectedCity] = useState(user ? user.city : 'bengaluru');
  const [selectedGenderFilter, setSelectedGenderFilter] = useState('all'); // all, female, male, unisex
  const [searchQuery, setSearchQuery] = useState('');

  // Filter groups based on user login, gender safety, and language match
  const filteredGroups = MOCK_COMMUNITY_GROUPS.filter(group => {
    // City filter
    if (selectedCity !== 'all' && group.cityId !== selectedCity) return false;

    // Search query
    if (searchQuery && !group.name.toLowerCase().includes(searchQuery.toLowerCase()) && !group.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Gender Safety Enforcement Rule (CRITICAL)
    if (user) {
      if (user.gender === 'female' && group.genderPolicy === 'male') {
        return false; // Women cannot see male-only groups
      }
      if (user.gender === 'male' && group.genderPolicy === 'female') {
        return false; // Men cannot see female-only groups
      }
    }

    // Manual gender tab filter
    if (selectedGenderFilter !== 'all' && group.genderPolicy !== selectedGenderFilter) {
      return false;
    }

    return true;
  });

  const handleGroupClick = (group) => {
    if (!user) {
      onOpenAuth('login');
      return;
    }

    // Check language match rule
    const userLangs = user.languages || ['marathi', 'english'];
    const hasMatchingLang = userLangs.includes(group.languageId);

    if (!hasMatchingLang) {
      alert(`This group is for ${group.languageName} speakers. Please add ${group.languageName} to your profile languages to join.`);
      return;
    }

    onOpenGroupChat(group);
  };

  return (
    <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header & City Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-raahi-sage/20 text-raahi-sageDark text-xs font-bold mb-2">
            <ShieldCheck className="w-4 h-4" />
            Gender-Safe & Language Matched Groups
          </div>
          <h2 className="text-3xl font-extrabold text-raahi-dark">
            Explore City Communities
          </h2>
          <p className="text-sm text-raahi-dark/70 mt-1">
            {user ? (
              <span>Showing communities for <strong className="text-raahi-primary">{user.name}</strong> ({user.city})</span>
            ) : (
              <span>Log in to access verified male, female, and unisex language circles.</span>
            )}
          </p>
        </div>

        {/* City Switcher Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2 md:pb-0">
          <button
            onClick={() => setSelectedCity('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedCity === 'all'
                ? 'bg-raahi-primary text-white shadow-soft'
                : 'bg-white text-raahi-dark/70 hover:bg-raahi-sand border border-raahi-primary/10'
            }`}
          >
            All Cities
          </button>
          {CITIES.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCity(c.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCity === c.id
                  ? 'bg-raahi-primary text-white shadow-soft'
                  : 'bg-white text-raahi-dark/70 hover:bg-raahi-sand border border-raahi-primary/10'
              }`}
            >
              <span>{c.icon}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search & Gender Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-raahi-primary/15 shadow-soft mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Search input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-raahi-dark/40 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search group name or language..."
            className="w-full pl-10 pr-4 py-2 bg-raahi-sand/60 rounded-xl text-xs font-medium text-raahi-dark focus:outline-none focus:ring-2 focus:ring-raahi-primary"
          />
        </div>

        {/* Gender Filter Pills */}
        <div className="flex items-center gap-1 bg-raahi-sand p-1 rounded-xl text-xs font-bold self-stretch sm:self-auto justify-center">
          <button
            onClick={() => setSelectedGenderFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedGenderFilter === 'all' ? 'bg-white text-raahi-dark shadow-soft' : 'text-raahi-dark/60'
            }`}
          >
            All
          </button>
          
          {/* Show female filter only if user is female or logged out */}
          {(!user || user.gender === 'female') && (
            <button
              onClick={() => setSelectedGenderFilter('female')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedGenderFilter === 'female' ? 'bg-raahi-primary text-white shadow-soft' : 'text-raahi-dark/60'
              }`}
            >
              Female Groups
            </button>
          )}

          {/* Show male filter only if user is male or logged out */}
          {(!user || user.gender === 'male') && (
            <button
              onClick={() => setSelectedGenderFilter('male')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedGenderFilter === 'male' ? 'bg-raahi-primary text-white shadow-soft' : 'text-raahi-dark/60'
              }`}
            >
              Male Groups
            </button>
          )}

          <button
            onClick={() => setSelectedGenderFilter('unisex')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedGenderFilter === 'unisex' ? 'bg-white text-raahi-dark shadow-soft' : 'text-raahi-dark/60'
            }`}
          >
            Unisex Groups
          </button>
        </div>

      </div>

      {/* GROUPS CARDS GRID */}
      {filteredGroups.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-raahi-primary/10 p-8">
          <Users className="w-12 h-12 text-raahi-primary/30 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-raahi-dark">No community groups found</h3>
          <p className="text-xs text-raahi-dark/60 mt-1 max-w-md mx-auto">
            Try switching cities or updating your profile languages to see matching groups.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map(group => {
            const isUserMatchedLang = user ? (user.languages || []).includes(group.languageId) : false;

            return (
              <div
                key={group.id}
                onClick={() => handleGroupClick(group)}
                className="bg-white rounded-3xl p-6 border border-raahi-primary/15 shadow-soft hover:shadow-warm transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Top Badge: Gender Policy & Language */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-extrabold uppercase px-3 py-1 rounded-full flex items-center gap-1 ${
                      group.genderPolicy === 'female'
                        ? 'bg-pink-100 text-pink-700'
                        : group.genderPolicy === 'male'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-raahi-sage/20 text-raahi-sageDark'
                    }`}>
                      <ShieldCheck className="w-3 h-3" />
                      {group.genderPolicy === 'female' ? 'Female Only' : group.genderPolicy === 'male' ? 'Male Only' : 'Unisex'}
                    </span>

                    <span className="text-[11px] font-bold text-raahi-primary bg-raahi-primary/10 px-2.5 py-0.5 rounded-full">
                      {group.languageName}
                    </span>
                  </div>

                  {/* Group Avatar & Title */}
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={group.avatar}
                      alt={group.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-raahi-primary/20 shadow-soft group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h3 className="text-base font-bold text-raahi-dark group-hover:text-raahi-primary transition-colors leading-snug">
                        {group.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-raahi-dark/60 mt-1">
                        <span>{group.membersCount} Members</span>
                        <span>•</span>
                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                          {group.activeOnlineCount} Online
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-raahi-dark/70 line-clamp-2 leading-relaxed mb-4">
                    {group.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {group.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-raahi-sand text-raahi-dark/80 px-2 py-0.5 rounded font-medium">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-3 border-t border-raahi-primary/10 flex items-center justify-between">
                  {!user ? (
                    <span className="text-xs font-bold text-raahi-primary flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5" /> Log in to join group
                    </span>
                  ) : isUserMatchedLang ? (
                    <span className="text-xs font-bold text-raahi-sageDark flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" /> Open Group Chat
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-amber-600 flex items-center gap-1">
                      Requires {group.languageName} profile tag
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
}
