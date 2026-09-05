import React, { useState } from 'react';
import { X, Send, Flag, Users, ShieldAlert, Heart, MessageSquare, MoreVertical, AlertTriangle } from 'lucide-react';
import { MOCK_GROUP_MESSAGES } from '../data/mockData';

export default function GroupChatModal({ group, user, onClose, onOpenDirectMessageWithUser }) {
  const [messages, setMessages] = useState(MOCK_GROUP_MESSAGES[group.id] || [
    {
      id: 'm_init',
      senderId: 'usr_helper1',
      senderName: 'Swati Kulkarni',
      senderAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      senderRole: 'Local Helper (5 yrs)',
      gender: 'female',
      text: `Welcome to ${group.name}! Feel free to ask about local PGs, tiffin services, or language guidance in Bengaluru!`,
      timestamp: '10:00 AM',
      likes: 4
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [showMembersList, setShowMembersList] = useState(false);
  const [reportedMessageId, setReportedMessageId] = useState(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg = {
      id: 'msg_' + Date.now(),
      senderId: user.id,
      senderName: user.name,
      senderAvatar: user.avatar,
      senderRole: 'Newcomer',
      gender: user.gender,
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      likes: 0
    };

    setMessages([...messages, newMsg]);
    setInputMessage('');
  };

  const handleReportMessage = (msgId) => {
    setReportedMessageId(msgId);
    setTimeout(() => {
      alert('Thank you for keeping Raahi safe. This message has been flagged for admin review.');
      setReportedMessageId(null);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-raahi-dark/60 backdrop-blur-md">
      
      <div className="bg-white rounded-3xl overflow-hidden shadow-float border border-raahi-primary/20 w-full max-w-4xl h-[85vh] flex flex-col relative">
        
        {/* TOP BAR: Group Name & Active WhatsApp-style Status */}
        <div className="p-4 px-6 bg-raahi-cream border-b border-raahi-primary/10 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <img
              src={group.avatar}
              alt={group.name}
              className="w-11 h-11 rounded-2xl object-cover ring-2 ring-raahi-primary/20"
            />
            <div>
              <h3 className="text-base font-bold text-raahi-dark flex items-center gap-2">
                {group.name}
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-raahi-primary/10 text-raahi-primary">
                  {group.languageName}
                </span>
              </h3>
              <div className="flex items-center gap-2 text-xs text-raahi-dark/60">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  {group.activeOnlineCount} active members
                </span>
                <span>•</span>
                <span>{group.membersCount} total members</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Members List Button */}
            <button
              onClick={() => setShowMembersList(!showMembersList)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-raahi-sand text-xs font-bold text-raahi-dark hover:bg-raahi-clay/30 transition-all"
            >
              <Users className="w-4 h-4 text-raahi-primary" />
              <span>Members ({group.membersCount})</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-raahi-sand text-raahi-dark hover:bg-raahi-primary hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* MIDDLE: Messages Body OR Members List Side Drawer */}
        <div className="flex-1 overflow-hidden relative flex">
          
          {/* Main Message Stream */}
          <div className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-raahi-sand/40 space-y-4">
            
            {/* Safety Code of Conduct Banner */}
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  <strong>Community Safety Shield:</strong> Be kind & respectful. Report any spam or unusual messages immediately.
                </span>
              </div>
            </div>

            {messages.map((msg) => {
              const isMe = msg.senderId === user.id;

              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] ${isMe ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                >
                  {/* Sender Avatar */}
                  <img
                    src={msg.senderAvatar}
                    alt={msg.senderName}
                    onClick={() => !isMe && onOpenDirectMessageWithUser(msg)}
                    title={!isMe ? `Click to personal chat with ${msg.senderName}` : ''}
                    className={`w-9 h-9 rounded-xl object-cover shrink-0 cursor-pointer hover:ring-2 hover:ring-raahi-primary transition-all ${
                      !isMe ? 'hover:scale-105' : ''
                    }`}
                  />

                  <div>
                    {/* Name & Role */}
                    <div className={`flex items-center gap-2 mb-1 text-[11px] ${isMe ? 'justify-end' : 'justify-start'}`}>
                      <span
                        onClick={() => !isMe && onOpenDirectMessageWithUser(msg)}
                        className="font-bold text-raahi-dark hover:text-raahi-primary cursor-pointer"
                      >
                        {msg.senderName}
                      </span>
                      <span className="text-[10px] bg-raahi-sand text-raahi-dark/60 px-1.5 py-0.5 rounded">
                        {msg.senderRole}
                      </span>
                      <span className="text-raahi-dark/40">{msg.timestamp}</span>
                    </div>

                    {/* Bubble */}
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed relative group ${
                      isMe
                        ? 'bg-raahi-primary text-white rounded-tr-none shadow-soft'
                        : 'bg-white text-raahi-dark rounded-tl-none border border-raahi-primary/10 shadow-soft'
                    }`}>
                      <p>{msg.text}</p>

                      {/* Report button on hover */}
                      {!isMe && (
                        <button
                          onClick={() => handleReportMessage(msg.id)}
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 text-raahi-dark/40 hover:text-red-600 transition-all"
                          title="Report unusual message"
                        >
                          <Flag className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Members List Side Panel (Toggled) */}
          {showMembersList && (
            <div className="w-72 bg-white border-l border-raahi-primary/15 p-4 overflow-y-auto custom-scrollbar animate-slideLeft">
              <h4 className="font-bold text-xs uppercase tracking-wider text-raahi-dark/60 mb-4">
                Active Group Members ({group.membersCount})
              </h4>
              
              <div className="space-y-3">
                {[
                  { name: 'Swati Kulkarni', role: 'Helper (5 yrs)', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80', active: true },
                  { name: 'Ananya Deshmukh', role: 'Helper (3 yrs)', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80', active: true },
                  { name: 'Priya Joshi', role: 'Newcomer', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80', active: true },
                  { name: 'Meera Patil', role: 'Newcomer', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80', active: false }
                ].map((m, idx) => (
                  <div
                    key={idx}
                    onClick={() => onOpenDirectMessageWithUser(m)}
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-raahi-sand transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <img src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full object-cover" />
                        {m.active && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white"></span>}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-raahi-dark group-hover:text-raahi-primary">{m.name}</div>
                        <div className="text-[10px] text-raahi-dark/60">{m.role}</div>
                      </div>
                    </div>

                    <MessageSquare className="w-4 h-4 text-raahi-primary opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* BOTTOM: Input Bar */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-raahi-primary/10 flex items-center gap-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={`Message ${group.name}...`}
            className="flex-1 px-4 py-3 rounded-2xl bg-raahi-sand/60 border border-raahi-primary/15 text-sm font-medium text-raahi-dark focus:outline-none focus:ring-2 focus:ring-raahi-primary"
          />

          <button
            type="submit"
            className="px-5 py-3 rounded-2xl bg-raahi-primary text-white font-bold text-sm shadow-warm hover:bg-raahi-primaryHover transition-all flex items-center gap-1.5"
          >
            <span>Send</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
