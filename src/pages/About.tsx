import { useEffect, useRef, useState } from "react";
// @ts-expect-error - module export mismatch with React 18 types
import { GitHubCalendar } from "react-github-calendar";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import ScrollReveal from "../components/ScrollReveal";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

interface Experience {
  title: string;
  role: string;
  period: string;
  description: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  url: string;
}

interface SkillGroup {
  label: { en: string; pt: string };
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    label: { en: "Languages", pt: "Linguagens" },
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    label: { en: "Frontend", pt: "Frontend" },
    items: ["React", "React Native", "NextJS", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: { en: "Backend", pt: "Backend" },
    items: ["Node.js", "NestJS", "REST API", "GraphQL", "BullMQ"],
  },
  {
    label: { en: "Databases", pt: "Bancos de Dados" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    label: { en: "DevOps & Tools", pt: "DevOps & Ferramentas" },
    items: ["Git", "Docker", "Jest"],
  },
];

const About = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<{ experiences: Experience[] }>({
    experiences: [],
  });
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const isDark = theme === "dark";

  useEffect(() => {
    const loadContent = async () => {
      const [aboutData, certData] = await Promise.all([
        import(`../jsons/about-${language}.json`),
        import(`../jsons/certifications-${language}.json`),
      ]);
      setContent(aboutData.default);
      setCertifications(certData.default.certifications);
    };
    loadContent();
  }, [language]);

  return (
    <Layout>
      <SEO
        title={
          language === "en" ? "About | Marcelo Maia" : "Sobre | Marcelo Maia"
        }
        description={
          language === "en"
            ? "Learn about my experience, skills and education."
            : "Conheça minha experiência, habilidades e formação."
        }
        path="/about"
      />
      <div
        ref={scrollRef}
        className="h-full w-full overflow-auto scroll-smooth"
      >
        <div className="flex flex-col w-full items-center py-6 gap-16">
          {/* About me — centered in visible area */}
          <div className="flex flex-col items-center justify-center min-h-[75vh] w-3/4">
            <ScrollReveal scrollRef={scrollRef}>
              <section>
                <h2 className="text-2xl font-bold mb-4 tracking-tight">
                  {language === "en" ? "About me" : "Sobre mim"}
                </h2>
                <div
                  className={`p-5 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                      : "bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/20"
                  }`}
                >
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    {language === "en"
                      ? "Full-stack developer with experience in building SaaS platforms, mobile applications and web systems. Currently working at Ten on a regulatory portal, and studying Computer Science at Descomplica. Passionate about clean code, scalable architectures and solving real-world problems through technology."
                      : "Desenvolvedor full-stack com experiência na construção de plataformas SaaS, aplicações mobile e sistemas web. Atualmente trabalho na Ten em um portal regulatório, e curso Ciência da Computação na Descomplica. Apaixonado por código limpo, arquiteturas escaláveis e resolver problemas reais através da tecnologia."}
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* Scroll down indicator */}
            <button
              onClick={() => {
                document
                  .getElementById("experience-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`mt-20 flex flex-col items-center gap-2 transition-opacity hover:opacity-100 cursor-pointer ${
                isDark ? "opacity-40" : "opacity-30"
              }`}
              aria-label={
                language === "en" ? "Scroll down" : "Rolar para baixo"
              }
            >
              <span
                className={`text-xs font-mono uppercase tracking-widest ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {language === "en" ? "scroll" : "scroll"}
              </span>
              <svg
                className={`w-5 h-5 animate-bounce ${
                  isDark ? "text-white" : "text-black"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>

          {/* Experience Timeline */}
          <div id="experience-section"></div>
          <ScrollReveal className="w-3/4 max-w-3xl" scrollRef={scrollRef}>
            <section>
              <h2 className="text-2xl font-bold mb-8 text-center tracking-tight">
                {language === "en" ? "Experience" : "Experiências"}
              </h2>
              <div className="relative">
                {/* Vertical center line */}
                <div
                  className={`absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px ${
                    isDark ? "bg-white/15" : "bg-black/15"
                  }`}
                />

                <div className="flex flex-col gap-10">
                  {content.experiences.map((exp, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                      <ScrollReveal
                        key={index}
                        delay={index * 0.15}
                        direction={isLeft ? "left" : "right"}
                        scrollRef={scrollRef}
                      >
                        <div
                          className={`relative flex items-start ${
                            isLeft ? "md:flex-row" : "md:flex-row-reverse"
                          } flex-row`}
                        >
                          {/* Dot */}
                          <div
                            className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 ${
                              isDark
                                ? "bg-white/20 border-white/40"
                                : "bg-black/20 border-black/40"
                            }`}
                          />

                          {/* Card */}
                          <div
                            className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                              isLeft
                                ? "md:pr-8 md:text-right"
                                : "md:pl-8 md:text-left"
                            }`}
                          >
                            <div
                              className={`p-4 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                                isDark
                                  ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                                  : "bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/20"
                              }`}
                            >
                              <p
                                className={`text-xs font-mono mb-1 ${
                                  isDark ? "text-white/40" : "text-black/40"
                                }`}
                              >
                                {exp.period}
                              </p>
                              <h3 className="font-bold">{exp.title}</h3>
                              <p
                                className={`text-sm ${
                                  isDark ? "text-white/60" : "text-black/60"
                                }`}
                              >
                                {exp.role}
                              </p>
                              <p
                                className={`text-sm mt-3 leading-relaxed ${
                                  isDark ? "text-white/70" : "text-black/70"
                                }`}
                              >
                                {exp.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal className="w-3/4" scrollRef={scrollRef}>
            <section>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">
                {language === "en" ? "Skills" : "Habilidades"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillGroups.map((group, groupIndex) => (
                  <ScrollReveal
                    key={group.label.en}
                    delay={groupIndex * 0.1}
                    direction="up"
                    scrollRef={scrollRef}
                  >
                    <div
                      className={`p-4 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                        isDark
                          ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                          : "bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/20"
                      }`}
                    >
                      <h3
                        className={`text-xs font-mono uppercase tracking-widest mb-3 ${
                          isDark ? "text-white/40" : "text-black/40"
                        }`}
                      >
                        {language === "en" ? group.label.en : group.label.pt}
                      </h3>
                      <div className="flex gap-2 flex-wrap">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className={`text-sm px-3 py-1.5 rounded-full font-mono ${
                              isDark
                                ? "bg-white/10 text-white/80"
                                : "bg-black/10 text-black/80"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Education */}
          {certifications.length > 0 && (
            <ScrollReveal className="w-3/4" scrollRef={scrollRef}>
              <section>
                <h2 className="text-2xl font-bold mb-4 tracking-tight">
                  {language === "en" ? "Education" : "Formação"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {certifications.map((cert, i) => (
                    <ScrollReveal
                      key={i}
                      delay={i * 0.1}
                      direction="up"
                      scrollRef={scrollRef}
                    >
                      <div
                        className={`p-4 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                          isDark
                            ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                            : "bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/20"
                        }`}
                      >
                        <h3 className="font-bold">{cert.title}</h3>
                        <p
                          className={`text-sm ${
                            isDark ? "text-white/60" : "text-black/60"
                          }`}
                        >
                          {cert.issuer}
                        </p>
                        <p
                          className={`text-xs mt-1 font-mono ${
                            isDark ? "text-white/40" : "text-black/40"
                          }`}
                        >
                          {cert.date}
                        </p>
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-theme text-sm mt-1 inline-block"
                          >
                            {language === "en"
                              ? "View credential"
                              : "Ver credencial"}
                          </a>
                        )}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          )}

          {/* GitHub Contributions */}
          <ScrollReveal className="w-3/4" scrollRef={scrollRef}>
            <section>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">
                {language === "en" ? "Contributions" : "Contribuições"}
              </h2>
              <div
                className={`flex flex-col items-center justify-center p-5 rounded-xl backdrop-blur-sm transition-all duration-300 overflow-x-auto ${
                  isDark
                    ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                    : "bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/20"
                }`}
              >
                <GitHubCalendar
                  username="yMarceloMaia"
                  colorScheme={isDark ? "dark" : "light"}
                  fontSize={12}
                  blockSize={11}
                  blockMargin={4}
                  labels={{
                    totalCount:
                      language === "en"
                        ? "{{count}} contributions in {{year}}"
                        : "{{count}} contribuições em {{year}}",
                  }}
                />
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
};

export default About;
