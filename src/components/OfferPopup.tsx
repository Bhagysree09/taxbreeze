import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup today
    const lastShown = localStorage.getItem('offerPopupLastShown');
    const today = new Date().toDateString();

    if (lastShown !== today) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('offerPopupLastShown', today);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Image - Latest Offer */}
              <div className="relative w-full h-64 bg-gradient-to-br from-[#6A23F5] to-[#8B4FFF] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]" />
                <div className="relative text-center text-white px-6">
                  <h2 className="text-4xl font-bold mb-2">🎉 Special Offer</h2>
                  <p className="text-xl font-semibold">Save Up to 70%</p>
                  <p className="text-sm mt-2 text-white/90">On our Professional Tax Services</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  Limited Time Offer!
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-[#6F6F6F]">
                    <span className="text-[#6A23F5] mr-3 text-lg">✓</span>
                    <span>Professional accounting & tax filing</span>
                  </li>
                  <li className="flex items-start text-[#6F6F6F]">
                    <span className="text-[#6A23F5] mr-3 text-lg">✓</span>
                    <span>Expert support from CA professionals</span>
                  </li>
                  <li className="flex items-start text-[#6F6F6F]">
                    <span className="text-[#6A23F5] mr-3 text-lg">✓</span>
                    <span>Fast and secure processing</span>
                  </li>
                </ul>

                <p className="text-sm text-[#6F6F6F] mb-6">
                  Don't miss out! This offer is valid for a limited time only.
                </p>

                <button
                  onClick={handleClose}
                  className="w-full bg-[#6A23F5] hover:bg-[#571BD0] text-white font-semibold py-3 rounded-xl transition-all"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all"
                title="Close"
              >
                <X size={20} className="text-[#1A1A1A]" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
