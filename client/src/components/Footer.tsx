function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-8 shadow-inner">
      <div className="container mx-auto px-4">
        <p className="text-muted-foreground text-sm text-center">
          © {currentYear} Nickylytech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
