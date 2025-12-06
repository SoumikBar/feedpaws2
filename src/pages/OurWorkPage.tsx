import { motion } from "framer-motion";
import { MapPin, Heart, Star } from "lucide-react";

const galleryImages = [
  "https://i.postimg.cc/nzcwDG2g/activity1.jpg",
  "https://i.postimg.cc/sX6H9G0X/activity2.jpg",
  "https://i.postimg.cc/5yDPDdJW/activity3.jpg",
  "https://i.postimg.cc/3NkSLrPZ/activity4.jpg",
];

const impactStories = [
  {
    title: "Bruno's Recovery",
    description: "A severely malnourished pup found near the railway tracks. With consistent care and proper nutrition, Bruno transformed into a healthy, playful dog in just 3 months.",
    icon: Heart,
  },
  {
    title: "Community Initiative",
    description: "Our awareness programs have led to a 40% increase in local adoption rates and reduced cases of animal abandonment in our area.",
    icon: Star,
  },
];

const OurWorkPage = () => {
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
              📸 Gallery
            </span>
            <h1 className="mb-4 font-serif text-5xl text-foreground md:text-6xl">
              Our Work in Action
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Glimpses of our daily efforts to make a difference in the lives of stray animals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden aspect-video rounded-3xl group"
              >
                <img
                  src={image}
                  alt={`Feed Paws Activity ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-t from-foreground/60 to-transparent group-hover:opacity-100" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  <p className="font-medium">Activity {index + 1}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
              Stories of Hope
            </span>
            <h2 className="mb-4 font-serif text-4xl text-foreground">Impact Stories</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Real stories that show the impact of your support
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {impactStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-3xl bg-card shadow-card"
              >
                <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-2xl gradient-hero">
                  <story.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="mb-4 font-serif text-2xl text-foreground">
                  {story.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {story.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 text-center rounded-3xl bg-gradient-to-br from-secondary to-muted"
          >
            <MapPin className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="mb-4 font-serif text-3xl text-foreground">Where We Operate</h2>
            <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
              Our feeding routes cover multiple neighborhoods, ensuring that stray animals 
              across our locality receive regular meals and care. We currently operate in 
              one primary location with plans to expand our reach.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card shadow-soft">
              <span className="w-3 h-3 rounded-full gradient-hero animate-pulse" />
              <span className="font-medium text-foreground">1 Active Location</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;
