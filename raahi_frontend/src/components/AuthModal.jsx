import React, { useState } from 'react';
import { X, Lock, ShieldAlert, Heart, Check, Sparkles, User, Mail, Globe, MapPin, Compass, Eye, EyeOff } from 'lucide-react';
import { CITIES, LANGUAGES } from '../data/mockData';

export default function AuthModal({ isOpen, onClose, initialMode = 'login', onLoginSuccess }) {
  const [mode, setMode] = useState(initialMode); // 'login' or 'signup'
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [city, setCity] = useState('bengaluru');
  const [gender, setGender] = useState('female');
  const [selectedLanguages, setSelectedLanguages] = useState(['marathi', 'english']);
  const [role, setRole] = useState('both'); // need, give, both
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const toggleLanguage = (langId) => {
    if (selectedLanguages.includes(langId)) {
      if (selectedLanguages.length > 1) {
        setSelectedLanguages(selectedLanguages.filter(l => l !== langId));
      }
    } else {
      setSelectedLanguages([...selectedLanguages, langId]);
    }
  };

  const passwordValidation = {
    minLength: password.length >= 8,
    hasUpper: /[A-Z]/.test(password),
    hasLower: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[^A-Za-z0-9]/.test(password),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'signup' && !name) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!email || !password) {
      setErrorMsg('Please fill in email and password');
      return;
    }
    if (mode === 'signup' && (!passwordValidation.minLength || !passwordValidation.hasUpper || !passwordValidation.hasLower || !passwordValidation.hasNumber || !passwordValidation.hasSpecial)) {
      setErrorMsg('Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.');
      return;
    }

    // Create user object
    const mockUser = {
      id: 'usr_' + Date.now(),
      name: mode === 'signup' ? name : 'Ananya Deshmukh',
      email,
      city: mode === 'signup' ? city : 'bengaluru',
      gender: mode === 'signup' ? gender : 'female',
      languages: mode === 'signup' ? selectedLanguages : ['marathi', 'english'],
      role: mode === 'signup' ? role : 'both',
      avatar: gender === 'female'
        ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    };

    onLoginSuccess(mockUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-raahi-dark/60 backdrop-blur-md animate-fadeIn">
      
      {/* Container Box: Split Screen on MD+ */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-float border border-raahi-primary/20 w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-raahi-sand text-raahi-dark hover:bg-raahi-primary hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT HALF: About Raahi Mission Showcase */}
        <div className="md:w-1/2 bg-gradient-to-br from-raahi-dark via-raahi-primary to-raahi-sageDark p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                <Compass className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight">Raahi</span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight mb-4">
              Step Into Your Warm Home in Every New City
            </h2>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Raahi is built with a deep human-centered purpose: ensuring newcomers never feel isolated, helpless, or lost due to local language barriers.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-raahi-clay">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Gender-Safe Protected Community Groups</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-raahi-clay">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Native Language-Matched Helpers & Buddies</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-raahi-clay">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>1-on-1 Direct Messaging & Safety Reporting</span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-white/20 flex items-center gap-2 text-xs text-raahi-sand">
            <Heart className="w-4 h-4 text-raahi-clay fill-raahi-clay" />
            <span>Join 10,000+ newcomers & verified local guides</span>
          </div>

        </div>

        {/* RIGHT HALF: Form (Log In / Sign Up) */}
        <div className="md:w-1/2 p-6 md:p-10 overflow-y-auto custom-scrollbar flex flex-col justify-between">
          <div>
            
            {/* Header Tabs */}
            <div className="flex items-center justify-between mb-6 border-b border-raahi-primary/10 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-raahi-dark">
                  {mode === 'login' ? 'Welcome Back' : 'Create Your Account'}
                </h3>
                <p className="text-xs text-raahi-dark/60 mt-1">
                  {mode === 'login' ? 'Log in to connect with your community' : 'Join Raahi to find or offer help in your city'}
                </p>
              </div>

              <div className="flex items-center gap-1 bg-raahi-sand p-1 rounded-full text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={`px-3 py-1.5 rounded-full transition-all ${
                    mode === 'login' ? 'bg-white text-raahi-primary shadow-soft' : 'text-raahi-dark/60'
                  }`}
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className={`px-3 py-1.5 rounded-full transition-all ${
                    mode === 'signup' ? 'bg-white text-raahi-primary shadow-soft' : 'text-raahi-dark/60'
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                {errorMsg}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Full Name (Sign Up only) */}
              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-bold text-raahi-dark mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-raahi-dark/40 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-raahi-primary/20 bg-raahi-sand/50 text-sm font-medium text-raahi-dark focus:outline-none focus:ring-2 focus:ring-raahi-primary"
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-raahi-dark mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-raahi-dark/40 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-raahi-primary/20 bg-raahi-sand/50 text-sm font-medium text-raahi-dark focus:outline-none focus:ring-2 focus:ring-raahi-primary"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-raahi-dark mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-raahi-dark/40 absolute left-3.5 top-3" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-raahi-primary/20 bg-raahi-sand/50 text-sm font-medium text-raahi-dark focus:outline-none focus:ring-2 focus:ring-raahi-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 p-1 text-raahi-dark/40 hover:text-raahi-primary transition-colors focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Password Requirements Indicator (Sign Up only) */}
                {mode === 'signup' && (
                  <div className="mt-2 p-2.5 rounded-xl bg-raahi-sand/60 border border-raahi-primary/10 text-[11px] space-y-1.5 animate-fadeIn">
                    <p className="font-bold text-raahi-dark/80 text-[11px]">Password requirements:</p>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-raahi-dark/70">
                      <div className={`flex items-center gap-1.5 transition-colors ${passwordValidation.minLength ? 'text-emerald-700 font-semibold' : ''}`}>
                        <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${passwordValidation.minLength ? 'bg-emerald-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                          {passwordValidation.minLength ? '✓' : '•'}
                        </div>
                        <span>8+ characters</span>
                      </div>

                      <div className={`flex items-center gap-1.5 transition-colors ${passwordValidation.hasUpper ? 'text-emerald-700 font-semibold' : ''}`}>
                        <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${passwordValidation.hasUpper ? 'bg-emerald-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                          {passwordValidation.hasUpper ? '✓' : '•'}
                        </div>
                        <span>1 uppercase (A-Z)</span>
                      </div>

                      <div className={`flex items-center gap-1.5 transition-colors ${passwordValidation.hasLower ? 'text-emerald-700 font-semibold' : ''}`}>
                        <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${passwordValidation.hasLower ? 'bg-emerald-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                          {passwordValidation.hasLower ? '✓' : '•'}
                        </div>
                        <span>1 lowercase (a-z)</span>
                      </div>

                      <div className={`flex items-center gap-1.5 transition-colors ${passwordValidation.hasNumber ? 'text-emerald-700 font-semibold' : ''}`}>
                        <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${passwordValidation.hasNumber ? 'bg-emerald-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                          {passwordValidation.hasNumber ? '✓' : '•'}
                        </div>
                        <span>1 number (0-9)</span>
                      </div>

                      <div className={`flex items-center gap-1.5 col-span-2 transition-colors ${passwordValidation.hasSpecial ? 'text-emerald-700 font-semibold' : ''}`}>
                        <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${passwordValidation.hasSpecial ? 'bg-emerald-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                          {passwordValidation.hasSpecial ? '✓' : '•'}
                        </div>
                        <span>1 special character (@, #, $, %, etc.)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* SIGN UP ADDITIONAL MANDATORY FIELDS */}
              {mode === 'signup' && (
                <>
                  {/* City Selection */}
                  <div>
                    <label className="block text-xs font-bold text-raahi-dark mb-1">Which city are you moving to?</label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-raahi-dark/40 absolute left-3.5 top-3" />
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-raahi-primary/20 bg-raahi-sand/50 text-sm font-medium text-raahi-dark focus:outline-none focus:ring-2 focus:ring-raahi-primary appearance-none cursor-pointer"
                      >
                        {CITIES.map(c => (
                          <option key={c.id} value={c.id}>{c.name} ({c.state})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Gender Selection WITH SAFETY RULE ALERT */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-bold text-raahi-dark">Select Your Gender</label>
                      <span className="text-[10px] text-raahi-primary font-bold flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Immutable
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {['female', 'male', 'other'].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGender(g)}
                          className={`py-2 rounded-xl text-xs font-bold capitalize transition-all border ${
                            gender === g
                              ? 'bg-raahi-primary text-white border-raahi-primary shadow-soft'
                              : 'bg-raahi-sand text-raahi-dark/70 border-raahi-primary/10 hover:bg-white'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>

                    {/* IMMUTABILITY SAFETY WARNING */}
                    <div className="mt-2 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-[11px] flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Privacy Notice:</strong> For the safety & integrity of female and male community groups, your gender selection <strong>cannot be changed</strong> after signup.
                      </span>
                    </div>
                  </div>

                  {/* Languages Multi-select */}
                  <div>
                    <label className="block text-xs font-bold text-raahi-dark mb-1">
                      Languages You Know (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto custom-scrollbar p-2 bg-raahi-sand/50 rounded-xl border border-raahi-primary/20">
                      {LANGUAGES.map(l => {
                        const isSelected = selectedLanguages.includes(l.id);
                        return (
                          <button
                            key={l.id}
                            type="button"
                            onClick={() => toggleLanguage(l.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                              isSelected
                                ? 'bg-raahi-sageDark text-white shadow-soft'
                                : 'bg-white text-raahi-dark/70 hover:bg-raahi-clay/30'
                            }`}
                          >
                            {l.name}
                            {isSelected && <Check className="w-3 h-3 text-white" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Role Option */}
                  <div>
                    <label className="block text-xs font-bold text-raahi-dark mb-1">Your Primary Goal on Raahi</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'need', label: 'Need Help' },
                        { id: 'give', label: 'Offer Help' },
                        { id: 'both', label: 'Both' }
                      ].map((r) => (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => setRole(r.id)}
                          className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                            role === r.id
                              ? 'bg-raahi-dark text-white border-raahi-dark shadow-soft'
                              : 'bg-raahi-sand text-raahi-dark/70 border-raahi-primary/10'
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl text-sm font-bold bg-raahi-primary text-white shadow-warm hover:bg-raahi-primaryHover transition-all mt-4"
              >
                {mode === 'login' ? 'Log In to Raahi' : 'Complete Sign Up & Join Communities'}
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}
