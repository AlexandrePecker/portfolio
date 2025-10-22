import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Alexandre Sampaio. Todos os direitos reservados.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="text-sm text-foreground/60 hover:text-primary transition-smooth font-medium"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Voltar ao topo
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
