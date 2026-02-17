import { useLanguage } from "../contexts/LanguageContext";
import Layout from "../components/Layout";
import "./styles.css";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

const Home = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <Layout>
      <SEO
        title={
          language === "en"
            ? "Marcelo Maia | Full-Stack Developer"
            : "Marcelo Maia | Desenvolvedor Full-Stack"
        }
        description={
          language === "en"
            ? "Full-stack developer portfolio. React, Node.js, TypeScript and more."
            : "Portfólio de desenvolvedor full-stack. React, Node.js, TypeScript e mais."
        }
        path="/home"
      />
      <main className="z-30 flex flex-col items-center justify-center h-full py-6">
        <ScrollReveal>
          <section className="w-full max-w-3xl text-center px-4">
            <p className="text-lg">
              {language === "en"
                ? "Hello, my name is Marcelo, and I am a full-stack developer. Always ready for new challenges and creative collaborations. Take a look at my portfolio, and let's create something amazing together!"
                : "Olá, meu nome é Marcelo e sou desenvolvedor full-stack. Sempre pronto para novos desafios e colaborações criativas. Dê uma olhada no meu portfólio e vamos criar algo incrível juntos!"}
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <section className="mt-8 flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => navigate("/contact")}
              className={`cta-btn ${theme === "light" ? "cta-btn-light" : ""}`}
            >
              {language === "en" ? "Contact Me" : "Entre em contato"}
            </button>
            <a
              href="/cv.pdf"
              download
              className={`cta-btn ${theme === "light" ? "cta-btn-light" : ""}`}
            >
              {language === "en" ? "Download CV" : "Baixar Currículo"}
            </a>
          </section>
        </ScrollReveal>
      </main>
    </Layout>
  );
};

export default Home;
