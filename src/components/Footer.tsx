const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Portfolio Développeuse. Construit avec React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
