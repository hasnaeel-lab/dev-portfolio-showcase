import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Article introuvable</h1>
          <Button asChild>
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link to="/#blog">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Retour aux articles
            </Link>
          </Button>

          <div className="flex items-center gap-2 mb-4">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {article.title}
          </h1>

          <p className="text-muted-foreground mb-8">
            {new Date(article.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="prose prose-neutral max-w-none">
            {article.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-display font-bold mt-8 mb-4">{line.slice(3)}</h2>;
              }
              if (line.startsWith("### ")) {
                return <h3 key={i} className="text-xl font-display font-semibold mt-6 mb-3">{line.slice(4)}</h3>;
              }
              if (line.startsWith("```")) {
                return null; // simplified code block handling
              }
              if (line.startsWith("> ")) {
                return (
                  <blockquote key={i} className="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">
                    {line.slice(2)}
                  </blockquote>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="ml-4 text-muted-foreground list-disc">
                    {line.slice(2).replace(/\*\*(.*?)\*\*/g, "$1")}
                  </li>
                );
              }
              if (line.startsWith("| ")) {
                return (
                  <p key={i} className="text-sm text-muted-foreground font-mono">{line}</p>
                );
              }
              if (line.match(/^\d+\./)) {
                return (
                  <li key={i} className="ml-4 text-muted-foreground list-decimal">
                    {line.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
                  </li>
                );
              }
              if (line.trim() === "") return <br key={i} />;
              return <p key={i} className="text-muted-foreground leading-relaxed mb-2">{line}</p>;
            })}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
