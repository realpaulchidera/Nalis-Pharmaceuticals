import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nalis-cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('nalis-cookie-consent', choice);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-8 left-8 right-8 z-50 flex justify-center pointer-events-none"
        >
          <div className="bg-white/95 backdrop-blur-md border border-outline-variant/20 shadow-2xl rounded-3xl p-6 md:p-8 max-w-4xl w-full flex flex-col md:flex-row items-center gap-6 pointer-events-auto">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
              <ShieldCheck size={28} />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h4 className="text-tertiary font-extrabold text-lg mb-1">Your Privacy Matters</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed font-public-sans">
                We use cookies to enhance your experience, analyze site traffic, and support our clinical services. By clicking "Accept", you agree to our use of cookies.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => handleChoice('rejected')}
                className="flex-1 md:flex-none px-8 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"
              >
                Reject
              </button>
              <button
                onClick={() => handleChoice('accepted')}
                className="flex-1 md:flex-none px-10 py-3 bg-primary text-white rounded-xl font-black text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Accept All
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="hidden md:flex p-2 text-outline hover:text-tertiary transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
