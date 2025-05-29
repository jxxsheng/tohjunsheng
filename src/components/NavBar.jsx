import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Site title */}
        <div className="text-2xl font-extrabold tracking-wide">
          JunSheng Portfolio
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-10 text-lg font-medium">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        </div>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu with Framer Motion animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="md:hidden flex flex-col items-center text-center gap-6 text-lg font-medium bg-black py-8"
          >
            <a href="#home" className="block hover:text-blue-400" onClick={handleLinkClick}>Home</a>
            <a href="#about" className="block hover:text-blue-400" onClick={handleLinkClick}>About</a>
            <a href="#projects" className="block hover:text-blue-400" onClick={handleLinkClick}>Projects</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
