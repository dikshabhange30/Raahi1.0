import React, { useState } from 'react';
import { X, Send, ShieldOff, Flag, CheckCircle, Heart, Lock, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function DirectMessageModal({ targetUser, currentUser, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 'dm1',
      senderId: targetUser.id || 'target_1',
      text: `Namaste! I saw your post in the community group. How can I help you settle in ${currentUser ? currentUser.city : 'Bengaluru'} today?`,
      time: '10:12 AM'
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [showBlockConfirmation, setShowBlockConfirmation] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isBlocked) return;

    setMessages([
      ...messages,
      {
        id: 'dm_' + Date.now(),
        senderId: currentUser.id,
        text: inputMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setInputMessage('');
  };

  const handleBlockUser = () => {
    setIsBlocked(true);
    setShowBlockConfirmation(false);
  };

  const handleReportUser = () => {
    setIsReported(true);
    alert(`Thank you. User ${targetUser.name || 'member'} has been reported to Raahi Trust & Safety team.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-raahi-dark/60 backdrop-blur-md">
      
      <div className="bg-white rounded-3xl overflow-hidden shadow-float border border-raahi-primary/20 w-full max-w-lg h-[80vh] flex flex-col relative">
        
        {/* TOP BAR */}
        <div className="p-4 px-6 bg-raahi-cream border-b border-raahi-primary/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={targetUser.avatar || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"}
              alt={targetUser.name || targetUser.senderName}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-raahi-primary/30"
            />
            <div>
              <h3 className="text-base font-bold text-raahi-dark flex items-center gap-1.5">
                {targetUser.name || targetUser.senderName}
                <ShieldCheck className="w-4 h-4 text-raahi-sageDark" title="Verified Member" />
              </h3>
              <span className="text-[11px] text-raahi-sageDark font-semibold">
                {targetUser.role || targetUser.senderRole || 'Local Helper'}
              </span>
            </div>
          </div>

          {/* Action Menu (Block / Report) */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleReportUser}
              className="p-2 rounded-full bg-raahi-sand text-raahi-dark/70 hover:text-red-600 hover:bg-red-50 transition-all text-xs flex items-center gap-1"
              title="Report User"
            >
              <Flag className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowBlockConfirmation(true)}
              className="p-2 rounded-full bg-raahi-sand text-raahi-dark/70 hover:text-red-600 hover:bg-red-50 transition-all text-xs"
              title="Block User"
            >
              <ShieldOff className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-raahi-sand text-raahi-dark hover:bg-raahi-primary hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* BLOCK CONFIRMATION MODAL OVERLAY */}
        {showBlockConfirmation && (
          <div className="absolute inset-0 z-30 bg-white/95 p-6 flex flex-col items-center justify-center text-center space-y-4">
            <AlertTriangle className="w-12 h-12 text-red-500" />
            <h4 className="text-lg font-bold text-raahi-dark">Block {targetUser.name || targetUser.senderName}?</h4>
            <p className="text-xs text-raahi-dark/70 max-w-xs">
              They will no longer be able to message you or see your profile in Raahi communities.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowBlockConfirmation(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-raahi-sand text-raahi-dark"
              >
                Cancel
              </button>
              <button
                onClick={handleBlockUser}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 text-white shadow-soft"
              >
                Yes, Block User
              </button>
            </div>
          </div>
        )}

        {/* MESSAGES BODY */}
        <div className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-raahi-sand/30 space-y-4">
          
          {/* Privacy Note */}
          <div className="text-center">
            <span className="text-[10px] bg-raahi-cream border border-raahi-primary/10 text-raahi-dark/60 px-3 py-1 rounded-full inline-block">
              🔒 End-to-end encrypted personal chat. Stay safe.
            </span>
          </div>

          {messages.map((m) => {
            const isMe = m.senderId === currentUser.id;
            return (
              <div
                key={m.id}
                className={`flex flex-col max-w-[80%] ${isMe ? 'ml-auto items-end' : 'mr-auto items-start'}`}
              >
                <div className={`p-3.5 rounded-2xl text-sm leading-relaxed ${
                  isMe
                    ? 'bg-raahi-primary text-white rounded-tr-none'
                    : 'bg-white text-raahi-dark rounded-tl-none border border-raahi-primary/10 shadow-soft'
                }`}>
                  {m.text}
                </div>
                <span className="text-[10px] text-raahi-dark/40 mt-1 px-1">{m.time}</span>
              </div>
            );
          })}

          {isBlocked && (
            <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs text-center font-semibold">
              You have blocked this user. You cannot send or receive messages.
            </div>
          )}

        </div>

        {/* INPUT BAR */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-raahi-primary/10 flex items-center gap-3">
          <input
            type="text"
            disabled={isBlocked}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={isBlocked ? "User blocked" : "Type a personal message..."}
            className="flex-1 px-4 py-3 rounded-2xl bg-raahi-sand/60 border border-raahi-primary/15 text-sm font-medium text-raahi-dark focus:outline-none focus:ring-2 focus:ring-raahi-primary disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={isBlocked}
            className="px-5 py-3 rounded-2xl bg-raahi-primary text-white font-bold text-sm shadow-warm hover:bg-raahi-primaryHover transition-all flex items-center gap-1.5 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
