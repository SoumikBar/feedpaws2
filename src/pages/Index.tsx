import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import OurWorkPage from "@/pages/OurWorkPage";
import OurMotivePage from "@/pages/OurMotivePage";
import DonatePage from "@/pages/DonatePage";
import VolunteerPage from "@/pages/VolunteerPage";
import DirectorsMessagePage from "@/pages/DirectorsMessagePage";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "work":
        return <OurWorkPage />;
      case "motive":
        return <OurMotivePage />;
      case "donate":
        return <DonatePage />;
      case "volunteer":
        return <VolunteerPage />;
      case "message":
        return <DirectorsMessagePage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-background"
        >
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
          
          <AnimatePresence mode="wait">
            <motion.main
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderPage()}
            </motion.main>
          </AnimatePresence>

          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Index;
