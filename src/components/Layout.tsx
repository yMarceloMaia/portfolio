import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import InteractiveBackground from "./InteractiveBackground";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
      >
        {language === "en" ? "Skip to content" : "Pular para o conteúdo"}
      </a>
      <InteractiveBackground theme={theme} />
      <main
        className="h-auto min-h-[95vh] w-screen max-w-[1800px] flex justify-center items-center text-theme"
        id="layout"
      >
        <section
          className={`group h-full layout-main flex flex-row max-h-[85vh] w-[88%] relative rounded-2xl ${
            theme === "dark"
              ? "border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05),0_4px_30px_rgba(0,0,0,0.3)]"
              : "border border-black/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          }`}
        >
          <div
            className={`absolute top-0 left-0 w-full h-full backdrop-blur-[9.2px] transition-all duration-500 ease-in-out rounded-2xl ${
              theme === "dark" ? "bg-white/[0.02]" : "bg-white/0"
            }`}
          ></div>

          {/* Sidebar */}
          <aside
            className={`relative z-10 flex flex-col justify-between items-center py-8 px-5 w-[170px] shrink-0 border-r ${
              theme === "dark" ? "border-white/10" : "border-black/10"
            }`}
          >
            {/* Title */}
            <section className="flex flex-col items-center text-center">
              <h1
                className={`text-lg font-nixie z-10 text-theme tracking-tight leading-tight ${
                  isLight ? "title-light" : ""
                }`}
                data-text="Marcelo Maia"
              >
                Marcelo Maia
              </h1>
              <p
                className={`text-[10px] font-mono z-10 mt-1.5 tracking-widest uppercase ${
                  theme === "dark"
                    ? "text-white/40"
                    : "text-black/40"
                }`}
              >
                full stack dev
              </p>
            </section>

            {/* Navigation */}
            <nav
              className="z-20 flex flex-col w-full gap-1 mt-8"
              role="navigation"
              aria-label={
                language === "en"
                  ? "Main navigation"
                  : "Navegação principal"
              }
            >
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`nav-btn ${isLight ? "nav-btn-light" : ""} ${
                    pathname === item.path ? "active" : ""
                  }`}
                  aria-label={item.label}
                  aria-current={
                    pathname === item.path ? "page" : undefined
                  }
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Settings */}
            <div className="flex flex-col w-full gap-1 mt-auto">
              <button
                onClick={toggleLanguage}
                className={`settings-btn ${
                  isLight ? "settings-btn-light" : ""
                }`}
                aria-label={
                  language === "en"
                    ? "Switch to Portuguese"
                    : "Mudar para Inglês"
                }
              >
                {language === "en" ? "PT-BR" : "EN-US"}
              </button>
              <button
                onClick={toggleTheme}
                className={`settings-btn ${
                  isLight ? "settings-btn-light" : ""
                }`}
                aria-label={
                  theme === "dark"
                    ? language === "en"
                      ? "Switch to light theme"
                      : "Mudar para tema claro"
                    : language === "en"
                    ? "Switch to dark theme"
                    : "Mudar para tema escuro"
                }
              >
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            </div>
          </aside>

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col overflow-hidden">
            <div className="relative w-full flex-1 overflow-hidden">
              {/* Gradient overlay top */}
              <div
                className={`pointer-events-none absolute top-0 left-0 right-0 h-8 z-30 ${
                  theme === "dark"
                    ? "bg-gradient-to-b from-black/40 to-transparent"
                    : "bg-gradient-to-b from-white/40 to-transparent"
                }`}
              />
              {/* Gradient overlay bottom */}
              <div
                className={`pointer-events-none absolute bottom-0 left-0 right-0 h-8 z-30 ${
                  theme === "dark"
                    ? "bg-gradient-to-t from-black/40 to-transparent"
                    : "bg-gradient-to-t from-white/40 to-transparent"
                }`}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full overflow-auto pb-5 flex justify-center items-center"
                id="main-content"
              >
                {children}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Layout;
