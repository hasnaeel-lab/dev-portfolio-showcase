import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <Avatar className="h-28 w-28 border-4 border-primary/20">
            <AvatarFallback className="text-3xl font-display bg-primary/10 text-primary">
              AD
            </AvatarFallback>
          </Avatar>

          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
              Développeuse Web Fullstack
            </h1>
            <p className="text-xl md:text-2xl text-primary font-display font-medium">
              Passionnée IA & Technologies Modernes
            </p>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Je crée des applications web performantes en combinant expertise technique et outils IA de dernière génération.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <Button asChild size="lg">
              <a href="#projects">Voir mes projets</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Me contacter</a>
            </Button>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" aria-label="Défiler vers le bas">
            <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
