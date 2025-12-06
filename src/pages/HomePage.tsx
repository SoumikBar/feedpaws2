import { motion } from "framer-motion";
import { Heart, Users, MapPin, UtensilsCrossed, Stethoscope, Megaphone } from "lucide-react";
import FloatingEmojis from "@/components/FloatingEmojis";
import AnimatedCounter from "@/components/AnimatedCounter";
interface HomePageProps {
  onNavigate: (page: string) => void;
}
const activities = [{
  icon: UtensilsCrossed,
  emoji: "🥣",
  title: "Daily Feeding Round",
  description: "Every day, we provide nutritious meals to stray dogs in our community, ensuring no pup goes hungry."
}, {
  icon: Stethoscope,
  emoji: "💊",
  title: "Medical Care",
  description: "Regular health check-ups, vaccinations, and emergency medical support for injured or sick animals."
}, {
  icon: Megaphone,
  emoji: "📢",
  title: "Community Awareness",
  description: "Educational programs to promote responsible pet ownership and compassion for street animals."
}];
const stats = [{
  value: 217,
  label: "Dogs Fed",
  suffix: "+"
}, {
  value: 16,
  label: "Volunteers",
  suffix: ""
}, {
  value: 1,
  label: "Locations",
  suffix: ""
}];
const HomePage = ({
  onNavigate
}: HomePageProps) => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <FloatingEmojis />
        
        {/* Background gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <motion.span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary" initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2
          }}>
              Because every paw 🐾 deserves Care
            </motion.span>

            <h1 className="mb-6 font-serif text-5xl leading-tight md:text-7xl text-foreground">
              Feeding Hope,
              <br />
              <span className="text-gradient text-primary-foreground">Saving Lives</span>
            </h1>

            <p className="max-w-2xl mx-auto mb-10 text-lg text-muted-foreground md:text-xl">
              We are a community-driven initiative dedicated to feeding, caring for, 
              and protecting stray animals in our neighborhood.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.button onClick={() => onNavigate("work")} className="px-8 py-4 font-medium rounded-full gradient-hero text-primary-foreground shadow-glow" whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 50px -8px hsl(24 95% 53% / 0.4)"
            }} whileTap={{
              scale: 0.98
            }}>
                See Our Work
              </motion.button>

              <motion.button onClick={() => onNavigate("motive")} className="px-8 py-4 font-medium transition-colors border-2 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.98
            }}>
                Our Mission
              </motion.button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div className="absolute transform -translate-x-1/2 bottom-10 left-1/2" animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }}>
            <div className="w-6 h-10 border-2 rounded-full border-muted-foreground/30">
              <motion.div className="w-2 h-2 mx-auto mt-2 rounded-full bg-primary" animate={{
              y: [0, 16, 0]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl text-foreground">Our Impact</h2>
            <p className="text-muted-foreground">Numbers that speak for themselves</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="p-8 text-center rounded-3xl bg-card shadow-card">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="mt-4 text-lg font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Recent Activities Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="mb-12 text-center">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
              What We Do
            </span>
            <h2 className="mb-4 font-serif text-4xl text-foreground">Recent Activities</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Our daily efforts to make the world a better place for our furry friends
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {activities.map((activity, index) => <motion.div key={activity.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            y: -8
          }} className="relative p-8 overflow-hidden rounded-3xl bg-card shadow-card group">
                {/* Background decoration */}
                <div className="absolute -right-4 -top-4 text-7xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {activity.emoji}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl gradient-hero">
                    <activity.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h3 className="mb-3 font-serif text-2xl text-foreground">
                    {activity.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative p-12 overflow-hidden rounded-3xl gradient-hero md:p-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 blur-2xl" />

            <div className="relative z-10 text-center">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }}>
                <Heart className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
                <h2 className="mb-4 font-serif text-4xl text-primary-foreground md:text-5xl">
                  Join Our Mission
                </h2>
                <p className="max-w-xl mx-auto mb-8 text-lg text-primary-foreground/80">
                  Whether you volunteer your time or spread the word, every action helps.
                </p>

                <motion.button onClick={() => onNavigate("volunteer")} className="px-8 py-4 font-medium transition-colors rounded-full bg-card text-foreground hover:bg-card/90" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.98
              }}>
                  Become a Volunteer
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default HomePage;