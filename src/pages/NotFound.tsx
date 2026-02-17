import Layout from "../components/Layout";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <Layout>
      <SEO
        title="404 | Marcelo Maia"
        description="Page not found"
        path="/404"
      />
      <main className="z-30 flex flex-col items-center justify-center h-full text-center">
        <h2
          className={`text-[8rem] md:text-[12rem] font-nixie font-bold leading-none ${
            theme === "light" ? "title-light" : ""
          }`}
          data-text="404"
        >
          404
        </h2>
        <p className="text-xl md:text-2xl mt-4 mb-8 opacity-70">
          {language === "en"
            ? "Oops! This page doesn't exist."
            : "Oops! Esta página não existe."}
        </p>
        <button
          onClick={() => navigate("/home")}
          className={`cta-btn ${theme === "light" ? "cta-btn-light" : ""}`}
        >
          {language === "en" ? "Go Home" : "Voltar ao Início"}
        </button>
      </main>
    </Layout>
  );
};

export default NotFound;
