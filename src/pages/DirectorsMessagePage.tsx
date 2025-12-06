// src/pages/DirectorsMessagePage.tsx
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import VolunteerOfYear, { Winner } from "../components/VolunteerOfYear";

const DirectorsMessagePage = () => {
  // Sumedha's story as requested (no achievements) — year set to 2025
  const winner: Winner = {
    name: "Sumedha Dev",
    photo: "/images/volunteer-of-year/sumedha-dev.jpg", // add this file to public/images/volunteer-of-year/
    year: 2025,
    bio:
      "I had always dreamed of starting my own NGO... It was always something I wanted to do for manyyy yearss.. But the moment our director sir (Mr. Sayan Ghosh) told me he was creating something similar, I joined him without any second thought. I didn't come here to dominate or seek control, I came here to work, to contribute and to make a difference.",
    achievements: [], // explicitly empty
  };

  return (
    <div className="min-h-screen pt-24 flex items-center">
      <div className="container px-4 mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
            >
              ✉️ A Personal Note
            </motion.span>
            <h1 className="font-serif text-5xl text-foreground md:text-6xl">
              Director's Message
            </h1>
          </div>

          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative p-10 md:p-16 rounded-3xl bg-card shadow-medium"
          >
            {/* Quote decoration */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10" />
            <Quote className="absolute bottom-8 right-8 w-12 h-12 text-primary/10 rotate-180" />

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-6 text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                Dear Friends and Supporters,
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-6 text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                What started as a simple act of kindness—feeding a few stray dogs in our
                neighborhood—has grown into something truly meaningful. Feed Paws was born
                out of a deep belief that every living being deserves compassion, care,
                and a chance at a better life.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mb-6 text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                Every day, when I see our volunteers stepping out with bowls of food and
                hearts full of love, I'm reminded of why we do this. The wagging tails,
                the grateful eyes—these moments make all the effort worthwhile. We're
                not just feeding animals; we're building a community that cares.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                To everyone who has supported us, volunteered with us, or simply shared
                our story—thank you. Together, we're making a difference, one meal at a
                time, one life at a time. This is just the beginning, and I invite you
                to be part of this beautiful journey.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="pt-6 border-t border-border"
              >
                <p className="font-serif text-xl text-foreground mb-1">
                  With warmth and gratitude,
                </p>
                <p className="text-foreground font-serif text-2xl font-medium">
                  Sayan Ghosh
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Volunteer of the Year (ADDED) */}
          <div className="mt-10">
            {/* showYear set to true to display "— 2025" */}
            <VolunteerOfYear winner={winner} others={[]} showYear={true} />
          </div>

          {/* Decorative paw prints */}
          <div className="flex justify-center mt-12 gap-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-3xl"
              >
                🐾
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DirectorsMessagePage;
