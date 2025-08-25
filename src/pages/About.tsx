import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import javascriptIcon from "/javascript.png";
import typescriptIcon from "/typescript.png";
import reactIcon from "/react.png";
import nodejsIcon from "/nodejs.png";
import cssIcon from "/css.png";
import tailwindcssIcon from "/tailwindcss.png";
import dockerIcon from "/docker.png";
import gitIcon from "/git.png";
import graphqlIcon from "/graphql.png";
import htmlIcon from "/html.png";
import jestIcon from "/jest.png";
import mongodbIcon from "/mongodb.png";
import mysqlIcon from "/mysql.png";
import postgresIcon from "/postgres.png";
import pythonIcon from "/python.png";

const About = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [content, setContent] = useState({ experiences: [] });

  useEffect(() => {
    const loadContent = async () => {
      const contentData = await import(`../jsons/about-${language}.json`);
      setContent(contentData.default);
    };

    loadContent();
  }, [language]);

  return (
    <Layout>
      <main className="h-full">
        <h1 className="absolute right-0 bottom-0 text-[200px] font-body z-0 opacity-[.01]">
          ABOUT
        </h1>
        <div className="flex flex-col justify-around h-full w-full items-center">
          <section className="w-3/4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Experiências</h2>
              {content.experiences.map((exp, index) => (
                <div className="mb-4" key={index}>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="font-semibold">{exp.role} ({exp.period})</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Habilidades</h2>
              <div className="flex gap-5 flex-wrap justify-center">
                <figure className="flex flex-col items-center w-20">
                  <img className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`} src={gitIcon} alt="git" />
                  <figcaption>Git</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`} src={htmlIcon} alt="html" />
                  <figcaption>Html</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`} src={cssIcon} alt="css" />
                  <figcaption>Css</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img
                    className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`}
                    src={javascriptIcon}
                    alt="javascript"
                  />
                  <figcaption>Javascript</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img
                    className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`}
                    src={typescriptIcon}
                    alt="typescript"
                  />
                  <figcaption>Typescript</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`} src={pythonIcon} alt="python" />
                  <figcaption>Python</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img
                    className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`}
                    src={tailwindcssIcon}
                    alt="tailwindcss"
                  />
                  <figcaption>Tailwindcss</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`} src={jestIcon} alt="jestjs" />
                  <figcaption>Jest</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`} src={reactIcon} alt="reactjs" />
                  <figcaption>React</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`} src={nodejsIcon} alt="nodejs" />
                  <figcaption>Nodejs</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`} src={graphqlIcon} alt="graphql" />
                  <figcaption>Graphql</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`} src={mysqlIcon} alt="mysql" />
                  <figcaption>Mysql</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img
                    className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`}
                    src={postgresIcon}
                    alt="postgresql"
                  />
                  <figcaption>Postgresql</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`} src={mongodbIcon} alt="mongodb" />
                  <figcaption>MongoDB</figcaption>
                </figure>
                <figure className="flex flex-col items-center w-20">
                  <img className={`w-12 h-12 ${theme === 'light' ? 'icon-light' : ''}`} src={dockerIcon} alt="docker" />
                  <figcaption>Docker</figcaption>
                </figure>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default About;
