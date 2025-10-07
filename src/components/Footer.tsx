const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Robertus Ferdhika Hendriarto. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
