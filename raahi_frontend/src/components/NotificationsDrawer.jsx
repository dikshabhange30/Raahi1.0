import React from 'react';
import { X, Bell, Check, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { MOCK_NOTIFICATIONS } from '../data/mockData';

export default function NotificationsDrawer({ isOpen, onClose, notifications, onMarkAllRead }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-raahi-dark/40 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-sm bg-white h-full shadow-float border-l border-raahi-primary/15 flex flex-col p-6 overflow-y-auto custom-scrollbar animate-slideLeft">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-raahi-primary/10 mb-4">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-raahi-primary" />
            <h3 className="font-bold text-base text-raahi-dark">Notifications</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-raahi-sand text-raahi-dark hover:bg-raahi-primary hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3 flex-1">
          {notifications.map(n => (
            <div
              key={n.id}
              className={`p-4 rounded-2xl border transition-all ${
                n.read
                  ? 'bg-raahi-sand/40 border-raahi-primary/5 text-raahi-dark/70'
                  : 'bg-white border-raahi-primary/20 shadow-soft text-raahi-dark font-medium'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span>{n.title}</span>
                <span className="text-[10px] text-raahi-dark/40">{n.time}</span>
              </div>
              <p className="text-xs leading-relaxed text-raahi-dark/70">{n.message}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onMarkAllRead}
          className="w-full py-2.5 mt-4 rounded-xl text-xs font-bold bg-raahi-sand text-raahi-dark hover:bg-raahi-clay/30 transition-all text-center"
        >
          Mark all as read
        </button>

      </div>
    </div>
  );
}
