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

  return (
    <>
      <InteractiveBackground theme={theme} />
      <main
        className="h-auto min-h-[95vh] w-screen max-w-[1800px] flex justify-center items-center text-theme"
        id="layout"
      >
        <section
          className={`group h-full layout-main flex flex-col max-h-[85vh] w-[88%] border-gray-200/20 relative rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white/0 backdrop-blur-[9.2px] transition-all duration-500 ease-in-out rounded-2xl"></div>
          <div className="relative z-10 h-full flex flex-col">
            <section className="flex flex-col-reverse justify-center md:flex-row md:justify-between md:items-center pb-5">
              <section
                className=" flex flex-col justify-center items-start mt-5 ml-10"
                id="section-title"
              >
                <h1
                  className={`text-5xl font-nixie z-10 text-theme ${
                    theme === "light" ? "title-light" : ""
                  }`}
                  id="title"
                  data-text="I'm Marcelo Maia"
                >
                  I'm Marcelo Maia
                </h1>
                <h1
                  className={`text-3xl font-nixie z-10 mt-5 text-theme ${
                    theme === "light" ? "title-light" : ""
                  }`}
                  id="title"
                  data-text="full stack developer"
                >
                  full stack developer
                </h1>
              </section>

              <div className="opacity-90 z-20 mr-5">
                <div className="container justify-end">
                  <div className="radio-wrapper">
                    <input
                      className="input"
                      name="btn"
                      id="value-1"
                      checked={pathname == "/home"}
                      type="radio"
                      onClick={() => navigate("/home")}
                    />
                    <div
                      className={`btn ${theme === "light" ? "btn-light" : ""}`}
                    >
                      <span>_</span>Home
                      <span className="btn__glitch">Home_</span>
                    </div>
                  </div>
                  <div className="radio-wrapper">
                    <input
                      className="input"
                      name="btn"
                      id="value-2"
                      checked={pathname == "/about"}
                      type="radio"
                      onClick={() => navigate("/about")}
                    />
                    <div
                      className={`btn ${theme === "light" ? "btn-light" : ""}`}
                    >
                      _About<span></span>
                      <span className="btn__glitch">About_</span>
                    </div>
                  </div>
                  <div className="radio-wrapper">
                    <input
                      className="input"
                      name="btn"
                      id="value-3"
                      checked={pathname == "/contact"}
                      type="radio"
                      onClick={() => navigate("/contact")}
                    />
                    <div
                      className={`btn ${theme === "light" ? "btn-light" : ""}`}
                    >
                      _Contact<span></span>
                      <span className="btn__glitch">Contact_</span>
                    </div>
                  </div>
                  {/* <div className="radio-wrapper">
                    <input
                      className="input"
                      name="btn"
                      id="value-3"
                      checked={pathname == "/projects"}
                      type="radio"
                      onClick={() => navigate("/projects")}
                    />
                    <div
                      className={`btn ${theme === "light" ? "btn-light" : ""}`}
                    >
                      _Projects<span></span>
                      <span className="btn__glitch">Projetcts_</span>
                    </div>
                  </div> */}
                  <div className="radio-wrapper">
                    <button
                      onClick={toggleLanguage}
                      className={`btn ${theme === "light" ? "btn-light" : ""}`}
                    >
                      {language === "en" ? "PT-BR" : "EN-US"}
                    </button>
                  </div>
                  <div className="radio-wrapper">
                    <button
                      onClick={toggleTheme}
                      className={`btn ${theme === "light" ? "btn-light" : ""}`}
                    >
                      {theme === "dark" ? "Light" : "Dark"}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex-1 overflow-auto z-20 pb-5 flex justify-center items-center"
            >
              {children}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Layout;
