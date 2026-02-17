import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import SEO from "../components/SEO";

interface Experience {
  title: string;
  role: string;
  period: string;
  description: string;
}

interface AboutContent {
  experiences: Experience[];
}

const Timeline = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [content, setContent] = useState<AboutContent>({ experiences: [] });

  useEffect(() => {
    const loadContent = async () => {
      const contentData = await import(`../jsons/about-${language}.json`);
      setContent(contentData.default);
    };
    loadContent();
  }, [language]);

  const isDark = theme === "dark";

  return (
    <Layout>
      <SEO
        title={
          language === "en"
            ? "Timeline | Marcelo Maia"
            : "Linha do Tempo | Marcelo Maia"
        }
        description={
          language === "en"
            ? "My professional journey and experience timeline"
            : "Minha jornada profissional e linha do tempo de experiências"
        }
        path="/timeline"
      />
      <main className="h-full w-full overflow-auto py-6 px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {language === "en" ? "My Journey" : "Minha Jornada"}
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className={`absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 ${
              isDark ? "bg-white/20" : "bg-black/20"
            }`}
          />

          {content.experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative flex items-start mb-12 ${
                  isLeft
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } flex-row`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 ${
                    isDark
                      ? "bg-white border-white/50"
                      : "bg-black border-black/50"
                  }`}
                />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <div
                    className={`p-5 rounded-xl backdrop-blur-sm ${
                      isDark
                        ? "bg-white/5 border border-white/10"
                        : "bg-black/5 border border-black/10"
                    }`}
                  >
                    <span
                      className={`text-sm font-mono ${
                        isDark ? "text-white/50" : "text-black/50"
                      }`}
                    >
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                    <p
                      className={`text-sm font-semibold mt-1 ${
                        isDark ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      {exp.role}
                    </p>
                    <p
                      className={`text-sm mt-3 leading-relaxed ${
                        isDark ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export default Timeline;
