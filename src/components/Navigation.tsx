import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}
const navItems = [{
  id: "home",
  label: "Home"
}, {
  id: "work",
  label: "Our Work"
}, {
  id: "motive",
  label: "Our Motive"
}, {
  id: "donate",
  label: "Donate"
}, {
  id: "volunteer",
  label: "Volunteer"
}, {
  id: "message",
  label: "Director's Message"
}];
const Navigation = ({
  currentPage,
  onNavigate
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };
  return <>
      <motion.header initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.5,
      ease: "easeOut"
    }} className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:h-20">
          {/* Logo */}
          <motion.button onClick={() => handleNavigate("home")} className="flex items-center gap-3" whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>​<img src="https://i.ibb.co/YFqj0WYr/Whats-App-Image-2025-11-04-at-10-09-36-0bf639c7.jpg" alt="Feed Paws Logo" className="object-cover w-10 h-10 rounded-full md:w-12 md:h-12" />
            <span className="text-xl font-serif font-medium text-foreground md:text-2xl">Feed Paws Initiative</span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="items-center hidden gap-1 md:flex">
            {navItems.map(item => <motion.button key={item.id} onClick={() => handleNavigate(item.id)} className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${currentPage === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                {item.label}
                {currentPage === item.id && <motion.div layoutId="activeNav" className="absolute inset-0 rounded-lg bg-primary/10" transition={{
              type: "spring",
              duration: 0.5
            }} />}
              </motion.button>)}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center justify-center w-10 h-10 rounded-lg md:hidden bg-muted" whileTap={{
          scale: 0.9
        }}>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.2
      }} className="fixed inset-x-0 z-30 p-4 mx-4 mt-20 rounded-2xl bg-card shadow-medium md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => <motion.button key={item.id} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.05
          }} onClick={() => handleNavigate(item.id)} className={`px-4 py-3 text-left rounded-xl transition-colors ${currentPage === item.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>
                  {item.label}
                </motion.button>)}
            </nav>
          </motion.div>}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 z-20 bg-foreground/20 backdrop-blur-sm md:hidden" />}
      </AnimatePresence>
    </>;
};
export default Navigation;