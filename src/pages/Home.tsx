// import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Layout from "../components/Layout";
import "./styles.css";

const Home = () => {
  const { language } = useLanguage();
  // const [content, setContent] = useState({ title: "", subtitle: "" });

  // useEffect(() => {
  //   const loadContent = async () => {
  //     const contentData = await import(`../jsons/home-${language}.json`);
  //     setContent(contentData.default);
  //   };

  //   loadContent();
  // }, [language]);

  return (
    <Layout>
      <main className="z-30">
        <h1 className="absolute right-0 bottom-0 text-[200px] font-body z-0 opacity-[.02]">
          HOME
        </h1>
        <section className="mt-32  flex">
          <p className="md:w-2/4 object-cover p-5 ml-10 flex items-center min-h-40">
            {language === "en"
              ? "Hello, my name is Marcelo, and I am a full-stack developer. Always ready for new challenges and creative collaborations. Take a look at my portfolio, and let's create something amazing together!"
              : "Olá, meu nome é Marcelo e sou desenvolvedor full-stack. Sempre pronto para novos desafios e colaborações criativas. Dê uma olhada no meu portfólio e vamos criar algo incrível juntos!"}
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
