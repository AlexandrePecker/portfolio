import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "technologies", label: "Tecnologias" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-smooth"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AS
          </motion.button>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.li key={item.id} whileHover={{ y: -2 }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/80 hover:text-primary transition-smooth font-medium"
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-glow transition-smooth font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Vamos conversar
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
