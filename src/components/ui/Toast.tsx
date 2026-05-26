// components/ui/Toast.tsx
"use client";

import toast, { Toaster as HotToaster } from 'react-hot-toast';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

// Custom colors matching your design
const COLORS = {
  success: {
    bg: '#10b981',
    border: '#059669',
    text: '#ffffff',
  },
  error: {
    bg: '#ef4444', 
    border: '#dc2626',
    text: '#ffffff',
  },
  info: {
    bg: '#030213', // Your brand color
    border: '#1f1b3a', // Your secondary color
    text: '#ffffff',
  },
};

export const Toaster = () => {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'transparent',
          boxShadow: 'none',
          padding: 0,
        },
      }}
    >
      {(t) => {
        const color = t.type === 'success' ? COLORS.success : 
                      t.type === 'error' ? COLORS.error : 
                      COLORS.info;
        
        return (
          <div 
            className="rounded-xl shadow-lg min-w-[320px] max-w-md animate-slide-in"
            style={{
              backgroundColor: color.bg,
              borderLeft: `4px solid ${color.border}`,
            }}
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3 flex-1">
                {t.type === 'success' && <CheckCircle size={20} color={color.text} />}
                {t.type === 'error' && <AlertCircle size={20} color={color.text} />}
                <span className="text-sm font-medium" style={{ color: color.text }}>
                  {t.message as string}
                </span>
              </div>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="ml-4 transition-opacity hover:opacity-70"
                style={{ color: color.text }}
              >
                <X size={16} />
              </button>
            </div>
          </div>
        );
      }}
    </HotToaster>
  );
};

export const showToast = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  loading: (message: string) => toast.loading(message),
  info: (message: string) => toast(message),
  dismiss: (toastId?: string) => toast.dismiss(toastId),
};