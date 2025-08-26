import { useLanguage } from "../contexts/LanguageContext";
import Layout from "../components/Layout";
import "./styles.css";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <Layout>
      <main className="z-30 flex flex-col items-center justify-center h-full">
        <section className="w-3/4 text-center">
          <p className="text-lg">
            {language === "en"
              ? "Hello, my name is Marcelo, and I am a full-stack developer. Always ready for new challenges and creative collaborations. Take a look at my portfolio, and let's create something amazing together!"
              : "Olá, meu nome é Marcelo e sou desenvolvedor full-stack. Sempre pronto para novos desafios e colaborações criativas. Dê uma olhada no meu portfólio e vamos criar algo incrível juntos!"}
          </p>
        </section>

        <section className="w-3/4 mt-10 text-center flex justify-center">
          <div className="radio-wrapper" style={{ width: "150px" }}>
            <button
              onClick={() => navigate("/contact")}
              className={`btn ${theme === "light" ? "" : "btn-light"}`}
            >
              {language === "en" ? "Contact Me" : "Entre em contato"}
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
