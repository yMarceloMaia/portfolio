import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import emailIcon from "/email.png";
import githubIcon from "/github.png";
import linkedinIcon from "/linkedin.png";

const Contact = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [content, setContent] = useState({
    title: "",
    subtitle: "",
    email: "",
    github: "",
    linkedin: "",
  });

  useEffect(() => {
    const loadContent = async () => {
      const contentData = await import(`../jsons/contact-${language}.json`);
      setContent(contentData.default);
    };

    loadContent();
  }, [language]);

  const handleEmailButtonClick = () => {
    const emailAddress = "marcelomaiadev@gmail.com";
    navigator.clipboard.writeText(emailAddress);
    alert("Email copied to clipboard!");
  };

  return (
    <Layout>
      <main className="h-full w-full flex justify-center items-center">
        <section className="w-5/6 h-full flex items-center">
          <section className="w-full h-3/4 flex flex-col justify-center items-center text-center">
            <section>
              <h1 className="text-4xl mb-4">{content.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{content.subtitle}</p>
            </section>
            <section className="flex mt-8 gap-12 items-center z-30 flex-wrap justify-center">
              <div className="flex flex-col items-center transform transition-transform hover:scale-110">
                <a onClick={handleEmailButtonClick} className="cursor-pointer">
                  <img
                    className={`w-16 h-16 mb-2 ${
                      theme === "light" ? "icon-light" : ""
                    }`}
                    src={emailIcon}
                    alt="email icon"
                  />
                </a>
                <p className="text-gray-600">{content.email}</p>
              </div>

              <div className="flex flex-col items-center transform transition-transform hover:scale-110">
                <a
                  target="_blank"
                  href="https://github.com/yMarceloMaia"
                  rel="noopener noreferrer"
                >
                  <img
                    className={`w-20 h-20 ${
                      theme === "light" ? "icon-light" : ""
                    }`}
                    src={githubIcon}
                    alt="github icon"
                  />
                </a>
                <p className="text-gray-600">{content.github}</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform hover:scale-110">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ymarcelomaia/"
                  rel="noopener noreferrer"
                >
                  <img
                    className={`w-20 h-20 ${
                      theme === "light" ? "icon-light" : ""
                    }`}
                    src={linkedinIcon}
                    alt="linkedin icon"
                  />
                </a>
                <p className="text-gray-600">{content.linkedin}</p>
              </div>
            </section>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
