import {create} from 'zustand';

interface Toast {
  id: string;
  type: 'default' | 'success' | 'error' | 'warning';
  title: string;
  message?: string;
}

interface ToastState {
  toasts: Toast[];
  showToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const generateUniqueId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  showToast: (toast) => set((state) => ({
    toasts: [...state.toasts, { ...toast, id: generateUniqueId() }],
  })),
  removeToast: (id) => set((state) => ({
    toasts: state.toasts.filter((toast) => toast.id !== id),
  })),
}));
