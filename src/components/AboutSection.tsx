import { Badge } from "@/components/ui/badge";
import { timeline } from "@/data/timeline";
import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "Node.js", "Python", "Tailwind CSS",
  "Redux", "Figma", "Git Flow", "VS Code", "PostgreSQL", "Docker",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            À propos
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Développeuse web fullstack passionnée par les technologies modernes et l'intelligence artificielle.
            Je construis des applications performantes et élégantes, en alliant code de qualité et outils IA.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-20"
        >
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm px-4 py-1.5 font-medium">
              {skill}
            </Badge>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-display font-semibold text-center mb-10">Mon parcours</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative flex items-start gap-4 mb-10 ${
                  i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-1.5" />
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <span className="text-sm font-bold text-primary font-display">{item.year}</span>
                  <h4 className="font-semibold font-display mt-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
