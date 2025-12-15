import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingWhatsApp() {
  const whatsappNumber = '919740564642';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#0CAB63] hover:bg-[#0a9052] text-white rounded-full flex items-center justify-center shadow-lg z-40 transition-all hover:scale-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
