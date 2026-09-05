import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import TrustedPartners from './components/TrustedPartners';
import CommunityGroups from './components/CommunityGroups';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import GroupChatModal from './components/GroupChatModal';
import DirectMessageModal from './components/DirectMessageModal';
import ProfileModal from './components/ProfileModal';
import NotificationsDrawer from './components/NotificationsDrawer';
import { MOCK_NOTIFICATIONS } from './data/mockData';

export default function App() {
  const [user, setUser] = useState(null); // null = unauthenticated
  const [activeTab, setActiveTab] = useState('home'); // home, explore, find_help, give_help, about

  // Modals state
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authInitialMode, setAuthInitialMode] = useState('login');
  
  const [activeGroupChat, setActiveGroupChat] = useState(null);
  const [activeDirectUser, setActiveDirectUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleOpenAuth = (mode = 'login') => {
    setAuthInitialMode(mode);
    setAuthModalOpen(true);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setProfileOpen(false);
    setActiveTab('home');
  };

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const handleActionClick = (type) => {
    if (!user) {
      handleOpenAuth('login');
    } else {
      setActiveTab('explore');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-raahi-sand text-raahi-dark">
      
      {/* HEADER / NAVBAR */}
      <Navbar
        user={user}
        onOpenAuth={handleOpenAuth}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenNotifications={() => setNotificationsOpen(true)}
        unreadCount={unreadCount}
        onOpenDirectMessages={() => {
          if (user) {
            setActiveDirectUser({ id: 'usr_swati', senderName: 'Swati Kulkarni', senderRole: 'Local Helper (5 yrs)', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80' });
          } else {
            handleOpenAuth('login');
          }
        }}
        onOpenProfile={() => setProfileOpen(true)}
      />

      {/* MAIN CONTENT PANELS BASED ON TAB */}
      <main className="flex-1">
        
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <>
            <Hero
              user={user}
              onActionClick={handleActionClick}
              onExploreClick={() => setActiveTab('explore')}
            />
            
            <HowItWorks
              onStartExploring={() => {
                if (!user) handleOpenAuth('login');
                else setActiveTab('explore');
              }}
            />

            <CommunityGroups
              user={user}
              onJoinGroup={(g) => setActiveGroupChat(g)}
              onOpenGroupChat={(g) => setActiveGroupChat(g)}
              onOpenAuth={handleOpenAuth}
            />

            <TrustedPartners
              onPartnerClick={(p) => {
                if (!user) handleOpenAuth('login');
                else alert(`Contact info for ${p.name}: Available in your Raahi dashboard!`);
              }}
            />

            <AboutSection />
          </>
        )}

        {/* EXPLORE / FIND HELP / GIVE HELP TABS */}
        {(activeTab === 'explore' || activeTab === 'find_help' || activeTab === 'give_help') && (
          <div className="pt-6">
            <CommunityGroups
              user={user}
              onJoinGroup={(g) => setActiveGroupChat(g)}
              onOpenGroupChat={(g) => setActiveGroupChat(g)}
              onOpenAuth={handleOpenAuth}
            />

            <TrustedPartners
              onPartnerClick={(p) => {
                if (!user) handleOpenAuth('login');
                else alert(`Contact info for ${p.name}: Available in your Raahi dashboard!`);
              }}
            />
          </div>
        )}

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <div className="pt-6">
            <AboutSection />
          </div>
        )}

      </main>

      {/* FOOTER */}
      <Footer onNavigate={(tab) => setActiveTab(tab)} />

      {/* MODALS */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authInitialMode}
        onLoginSuccess={handleLoginSuccess}
      />

      {activeGroupChat && (
        <GroupChatModal
          group={activeGroupChat}
          user={user || { id: 'anon', name: 'Guest', avatar: '', gender: 'female' }}
          onClose={() => setActiveGroupChat(null)}
          onOpenDirectMessageWithUser={(target) => setActiveDirectUser(target)}
        />
      )}

      {activeDirectUser && (
        <DirectMessageModal
          targetUser={activeDirectUser}
          currentUser={user || { id: 'usr_me', name: 'Me', city: 'Bengaluru' }}
          onClose={() => setActiveDirectUser(null)}
        />
      )}

      <ProfileModal
        user={user}
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        onUpdateUser={(updated) => setUser(updated)}
        onLogout={handleLogout}
      />

      <NotificationsDrawer
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllRead={handleMarkAllRead}
      />

    </div>
  );
}
