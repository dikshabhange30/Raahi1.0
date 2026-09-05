import React from 'react';
import { Compass, Bell, MessageSquare, User, LogIn, UserPlus, Heart } from 'lucide-react';

export default function Navbar({
  user,
  onOpenAuth,
  activeTab,
  setActiveTab,
  onOpenNotifications,
  unreadCount,
  onOpenDirectMessages,
  onOpenProfile
}) {
  const handleNavClick = (tabName) => {
    if (!user && (tabName === 'find_help' || tabName === 'give_help' || tabName === 'explore')) {
      // If not logged in, clicking interactive links opens login modal
      onOpenAuth('login');
    } else {
      setActiveTab(tabName);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-raahi-cream/90 backdrop-blur-md border-b border-raahi-primary/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT: Brand Logo & Name */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-raahi-primary to-raahi-clay flex items-center justify-center text-white shadow-warm group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-2xl tracking-tight text-raahi-dark">
                  Raahi
                </span>
                <Heart className="w-4 h-4 text-raahi-primary fill-raahi-primary" />
              </div>
              <span className="text-[10px] tracking-wider font-semibold uppercase text-raahi-sageDark block -mt-1">
                City Relocation Companion
              </span>
            </div>
          </div>

          {/* MIDDLE: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-raahi-sand/60 p-1.5 rounded-full border border-raahi-primary/10">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeTab === 'home'
                  ? 'bg-white text-raahi-primary shadow-soft font-semibold'
                  : 'text-raahi-dark/70 hover:text-raahi-dark hover:bg-white/50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('explore')}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeTab === 'explore'
                  ? 'bg-white text-raahi-primary shadow-soft font-semibold'
                  : 'text-raahi-dark/70 hover:text-raahi-dark hover:bg-white/50'
              }`}
            >
              Explore Communities
            </button>

            <button
              onClick={() => handleNavClick('find_help')}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeTab === 'find_help'
                  ? 'bg-white text-raahi-primary shadow-soft font-semibold'
                  : 'text-raahi-dark/70 hover:text-raahi-dark hover:bg-white/50'
              }`}
            >
              Find Help
            </button>

            <button
              onClick={() => handleNavClick('give_help')}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeTab === 'give_help'
                  ? 'bg-white text-raahi-primary shadow-soft font-semibold'
                  : 'text-raahi-dark/70 hover:text-raahi-dark hover:bg-white/50'
              }`}
            >
              Give Help
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeTab === 'about'
                  ? 'bg-white text-raahi-primary shadow-soft font-semibold'
                  : 'text-raahi-dark/70 hover:text-raahi-dark hover:bg-white/50'
              }`}
            >
              About
            </button>
          </nav>

          {/* RIGHT: Auth Buttons OR Notifications + Messages + Profile */}
          <div className="flex items-center gap-3">
            {!user ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAuth('login')}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-raahi-dark hover:text-raahi-primary hover:bg-raahi-sand transition-all duration-200"
                >
                  <LogIn className="w-4 h-4" />
                  Log In
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold bg-raahi-primary text-white shadow-warm hover:bg-raahi-primaryHover hover:shadow-lg transition-all duration-200 active:scale-95"
                >
                  <UserPlus className="w-4 h-4" />
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                {/* Notifications Bell */}
                <button
                  onClick={onOpenNotifications}
                  className="relative p-2.5 rounded-full bg-raahi-sand text-raahi-dark hover:bg-raahi-clay/30 transition-all duration-200"
                  title="Notifications"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-raahi-primary text-white text-[11px] font-bold rounded-full flex items-center justify-center animate-bounce">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Messages Button */}
                <button
                  onClick={onOpenDirectMessages}
                  className="p-2.5 rounded-full bg-raahi-sand text-raahi-dark hover:bg-raahi-clay/30 transition-all duration-200 relative"
                  title="Personal Messages"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-raahi-sage rounded-full ring-2 ring-white"></span>
                </button>

                {/* Profile Pill */}
                <button
                  onClick={onOpenProfile}
                  className="flex items-center gap-2.5 pl-2 pr-3.5 py-1.5 rounded-full bg-white border border-raahi-primary/20 shadow-soft hover:shadow-warm transition-all duration-200"
                >
                  <img
                    src={user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-raahi-primary/30"
                  />
                  <div className="text-left hidden sm:block">
                    <div className="text-xs font-bold text-raahi-dark leading-tight">{user.name}</div>
                    <div className="text-[10px] text-raahi-sageDark font-medium capitalize">
                      {user.city} • {user.gender}
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}
