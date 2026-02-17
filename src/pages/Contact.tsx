import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

const Contact = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
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
    alert(
      language === "en"
        ? "Email copied to clipboard!"
        : "Email copiado para a área de transferência!"
    );
  };

  const contacts = [
    {
      label: "Email",
      value: content.email,
      action: handleEmailButtonClick,
      href: undefined as string | undefined,
      ariaLabel:
        language === "en"
          ? "Copy email to clipboard"
          : "Copiar email para a área de transferência",
    },
    {
      label: "GitHub",
      value: content.github,
      action: undefined as (() => void) | undefined,
      href: "https://github.com/yMarceloMaia",
      ariaLabel: "GitHub profile",
    },
    {
      label: "LinkedIn",
      value: content.linkedin,
      action: undefined as (() => void) | undefined,
      href: "https://www.linkedin.com/in/ymarcelomaia/",
      ariaLabel: "LinkedIn profile",
    },
  ];

  return (
    <Layout>
      <SEO
        title={
          language === "en"
            ? "Contact | Marcelo Maia"
            : "Contato | Marcelo Maia"
        }
        description={
          language === "en"
            ? "Get in touch with Marcelo Maia. Email, GitHub, LinkedIn."
            : "Entre em contato com Marcelo Maia. Email, GitHub, LinkedIn."
        }
        path="/contact"
      />
      <div className="h-full w-full flex flex-col items-center justify-center py-6 px-4">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">{content.title}</h2>
            <p
              className={`text-lg mt-2 ${
                isDark ? "text-white/50" : "text-black/50"
              }`}
            >
              {content.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
          {contacts.map((contact, i) => (
            <ScrollReveal key={contact.label} delay={i * 0.15} direction="up">
              {contact.href ? (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.ariaLabel}
                  className="block"
                >
                  <div
                    className={`p-6 rounded-xl backdrop-blur-sm text-center transition-all duration-300 hover:scale-105 cursor-pointer ${
                      isDark
                        ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                        : "bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/20"
                    }`}
                  >
                    <h3
                      className={`text-xs font-mono uppercase tracking-widest mb-2 ${
                        isDark ? "text-white/40" : "text-black/40"
                      }`}
                    >
                      {contact.label}
                    </h3>
                    <p className="font-mono text-sm">{contact.value}</p>
                  </div>
                </a>
              ) : (
                <div
                  onClick={contact.action}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && contact.action) contact.action();
                  }}
                  aria-label={contact.ariaLabel}
                  className={`p-6 rounded-xl backdrop-blur-sm text-center transition-transform hover:scale-105 cursor-pointer ${
                    isDark
                      ? "bg-white/5 border border-white/10 hover:bg-white/10"
                      : "bg-black/5 border border-black/10 hover:bg-black/10"
                  }`}
                >
                  <h3
                    className={`text-xs font-mono uppercase tracking-widest mb-2 ${
                      isDark ? "text-white/40" : "text-black/40"
                    }`}
                  >
                    {contact.label}
                  </h3>
                  <p className="font-mono text-sm">{contact.value}</p>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
