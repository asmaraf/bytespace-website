import React, { useEffect } from 'react';

export default function Toast({ message, type = 'success', onClose, duration = 3500 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const isSuccess = type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-sm w-full">
      <div className={`flex items-center gap-3 p-4 rounded-2xl shadow-2xl border backdrop-blur-md transition-all ${
        isSuccess 
          ? 'bg-[#242528]/95 text-white border-[#D4FB20]/40 shadow-[0_8px_30px_rgba(212,251,32,0.15)]' 
          : 'bg-red-950/95 text-white border-red-500/30'
      }`}>
        {isSuccess ? (
          <div className="w-8 h-8 rounded-full bg-[#D4FB20] text-[#242528] flex items-center justify-center shrink-0 font-bold text-sm">
            ✓
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 font-bold text-sm">
            !
          </div>
        )}

        <div className="flex-1 text-sm font-medium leading-snug">
          {message}
        </div>

        <button
          onClick={onClose}
          type="button"
          aria-label="Close notification"
          className="text-white/60 hover:text-white p-1 rounded-lg transition-colors cursor-pointer text-base"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
