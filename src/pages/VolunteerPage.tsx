import { motion } from "framer-motion";
import { Heart, Users, Calendar, CheckCircle } from "lucide-react";

const benefits = [
  { icon: Heart, text: "Make a real difference in animals' lives" },
  { icon: Users, text: "Join a community of compassionate individuals" },
  { icon: Calendar, text: "Flexible scheduling based on your availability" },
  { icon: CheckCircle, text: "No prior experience required" },
];

const VolunteerPage = () => {
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
              🤝 Join Our Team
            </span>
            <h1 className="mb-4 font-serif text-5xl text-foreground md:text-6xl">
              Become a Volunteer
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Lend your hands and heart to help stray animals in our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft"
              >
                <benefit.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Embed */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto overflow-hidden rounded-3xl bg-card shadow-medium"
          >
            <div className="p-6 text-center bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border">
              <h2 className="font-serif text-2xl text-foreground">Volunteer Registration Form</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Fill out the form below to join our volunteer team
              </p>
            </div>

            <div className="relative" style={{ paddingBottom: "120%" }}>
              <iframe
                src="https://surveyheart.com/form/6871f274466dd3716f2725fa"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Volunteer Registration Form"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="mb-4 font-serif text-3xl text-foreground">
              Have Questions?
            </h2>
            <p className="mb-6 text-muted-foreground">
              If you have any questions about volunteering or need more information,
              feel free to reach out to us directly.
            </p>
            <a
              href="mailto:help.feedpawsinitiative@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 font-medium rounded-full gradient-hero text-primary-foreground shadow-glow"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;
