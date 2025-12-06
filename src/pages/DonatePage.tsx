import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, CreditCard, Repeat, Gift, Mail, Heart } from "lucide-react";

const upcomingFeatures = [
  { icon: CreditCard, title: "Secure Payments", description: "Multiple payment options including UPI, cards, and net banking" },
  { icon: Repeat, title: "Recurring Donations", description: "Set up monthly contributions to provide consistent support" },
  { icon: Gift, title: "Sponsor a Meal", description: "Directly fund meals for specific feeding rounds" },
];

const DonatePage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              💝 Support Our Cause
            </span>
            <h1 className="mb-4 font-serif text-5xl text-foreground md:text-6xl">
              Make a Donation
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Your generosity helps us feed and care for stray animals every single day
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Card */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto p-12 text-center rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Clock className="w-16 h-16 text-primary" />
            </motion.div>

            <h2 className="mb-4 font-serif text-3xl text-foreground">
              Online Donations Coming Soon!
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We're working on setting up a secure and seamless donation system. 
              Subscribe to get notified when it's ready!
            </p>

            <div className="flex items-center justify-center gap-2 px-6 py-3 mx-auto rounded-full bg-card shadow-soft w-fit">
              <span className="w-2 h-2 rounded-full gradient-hero animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">In Development</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-serif text-3xl text-foreground">What's Coming</h2>
            <p className="text-muted-foreground">Features we're building for you</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card shadow-card"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary/10">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-lg text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto p-10 rounded-3xl bg-card shadow-medium"
          >
            <div className="text-center mb-8">
              <Mail className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h2 className="mb-2 font-serif text-2xl text-foreground">Stay Updated</h2>
              <p className="text-muted-foreground">
                Get notified when donations go live and receive updates about our work
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 text-center rounded-2xl bg-secondary"
              >
                <Heart className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="font-medium text-foreground">Thank you for subscribing!</p>
                <p className="text-sm text-muted-foreground">We'll keep you updated.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-muted border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 font-medium rounded-xl gradient-hero text-primary-foreground"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Notify Me
                </motion.button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                For direct assistance, contact us at:
              </p>
              <a
                href="mailto:help.feedpawsinitiative@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                help.feedpawsinitiative@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
