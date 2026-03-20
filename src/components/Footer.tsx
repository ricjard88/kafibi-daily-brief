import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t-2 border-primary/20 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
            © 2026 Kabifi
          </span>
          <p className="mt-2 text-xs text-muted-foreground">
            Predictive operations for modern retail.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          <Link to="/privacy" className="transition-colors hover:text-primary">
            Privacy
          </Link>
          <Link to="/terms" className="transition-colors hover:text-primary">
            Terms
          </Link>
          <Link to="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
