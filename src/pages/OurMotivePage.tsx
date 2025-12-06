import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Leaf, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, title: "Compassion", description: "Every animal deserves love and care" },
  { icon: Shield, title: "Protection", description: "Safeguarding vulnerable street animals" },
  { icon: Users, title: "Community", description: "Building a network of caring individuals" },
  { icon: Leaf, title: "Sustainability", description: "Creating lasting change in animal welfare" },
  { icon: Sparkles, title: "Hope", description: "Believing in a better tomorrow for all" },
];

const timeline = [
  { year: "2025", title: "The Beginning", description: "Started with a small group of friends feeding stray dogs in our neighborhood", side: "left" },
  { year: "2025", title: "Growing Impact", description: "Expanded our reach to cover more areas and recruited more volunteers", side: "right" },
  { year: "2025", title: "Medical Support", description: "Partnered with local vets to provide medical care for injured animals", side: "left" },
  { year: "2025", title: "Community Programs", description: "Launched awareness campaigns in schools and communities", side: "right" },
  { year: "2025", title: "Looking Ahead", description: "Planning to establish a permanent shelter and adoption center", side: "left" },
];

const team = [
  { name: "Core Team", role: "Founders & Coordinators", count: 4 },
  { name: "Volunteers", role: "Field Workers", count: 16 },
];

const OurMotivePage = () => {
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
              ❤️ Why We Do This
            </span>
            <h1 className="mb-4 font-serif text-5xl text-foreground md:text-6xl">
              Our Motive
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Driven by compassion, powered by community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl gradient-hero text-primary-foreground"
            >
              <Target className="w-12 h-12 mb-6" />
              <h2 className="mb-4 font-serif text-3xl">Our Mission</h2>
              <p className="text-lg leading-relaxed opacity-90">
                To ensure no stray animal goes hungry or without medical care in our community. 
                We strive to create a compassionate environment where every living being is 
                treated with dignity and respect.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-card shadow-medium"
            >
              <Eye className="w-12 h-12 mb-6 text-accent" />
              <h2 className="mb-4 font-serif text-3xl text-foreground">Our Vision</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                A world where every stray animal has access to food, shelter, and medical care. 
                We envision communities that coexist harmoniously with street animals, 
                treating them as valued members of our shared environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl text-foreground">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 text-center rounded-2xl bg-card shadow-card"
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-lg text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
              👥 The Team
            </span>
            <h2 className="mb-4 font-serif text-4xl text-foreground">Meet Our Heroes</h2>
            <p className="text-muted-foreground">The passionate individuals behind Feed Paws</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
            {team.map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 text-center rounded-3xl bg-card shadow-card"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-hero flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">{group.count}</span>
                </div>
                <h3 className="mb-2 font-serif text-xl text-foreground">{group.name}</h3>
                <p className="text-muted-foreground">{group.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl text-foreground">Our Journey</h2>
            <p className="text-muted-foreground">From humble beginnings to growing impact</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative mb-8 md:mb-12 ${
                  item.side === "left" ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div className={`md:w-1/2 p-6 rounded-2xl bg-card shadow-card ${
                  item.side === "left" ? "md:mr-8" : "md:ml-8"
                }`}>
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full gradient-hero text-primary-foreground">
                    {item.year}
                  </span>
                  <h3 className="mb-2 font-serif text-xl text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>

                {/* Timeline dot */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full gradient-hero hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMotivePage;
