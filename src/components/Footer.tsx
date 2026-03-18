const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gilbert Tuazon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
