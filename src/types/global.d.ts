interface ToastOptions {
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  emoji?: string;
  sound?: boolean;
}

interface Window {
  // Add custom toast function to the window object
  showMemeToast: (message: string, options?: ToastOptions) => HTMLElement;
} 
