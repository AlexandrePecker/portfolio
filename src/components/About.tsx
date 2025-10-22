import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Sobre <span className="text-primary">mim</span>
          </motion.h2>

          <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Com mais de <span className="text-primary font-semibold">5 anos de experiência em TI</span>, construí uma
              sólida base em suporte técnico, sempre focado em resolver problemas e otimizar processos. Durante essa
              jornada, descobri minha verdadeira paixão: <span className="text-secondary font-semibold">criar soluções</span> que
              fazem a diferença.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Foi essa descoberta que me levou a fazer a <span className="text-primary font-semibold">transição para o
              desenvolvimento</span>. Hoje, trabalho com tecnologias modernas para construir aplicações eficientes e
              escaláveis, sempre buscando automatizar processos e entregar valor real aos usuários.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Sou movido pela <span className="text-secondary font-semibold">busca constante por aprendizado</span>, adoro
              enfrentar novos desafios e acredito no poder da colaboração. Se você tem um projeto interessante ou quer
              trocar ideias sobre tecnologia, vamos conversar! 🚀
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
