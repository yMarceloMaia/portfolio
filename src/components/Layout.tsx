import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const navigate = useNavigate()

    const { pathname } = useLocation()

    return (
        <main className="h-screen w-screen max-w-[1800px] flex justify-center items-center" id="layout">

            <section className='layout-main flex flex-col bg-[#080808] h-[88%] w-[88%] border border-gray-600 relative'>

                <section className="flex flex-col-reverse justify-center md:flex-row md:justify-between md:items-center">
                    <section className=" flex flex-col justify-center items-start mt-5 ml-10" id="section-title">
                        <h1 className="text-5xl font-nixie z-10"
                            id="title"
                            data-text="I'm Marcelo Maia">I'm Marcelo Maia</h1>
                        <h1 className="text-3xl font-nixie z-10 mt-5"
                            id="title"
                            data-text="Web Developer">Web Developer</h1>
                    </section>

                    <div className="opacity-90 z-20 mr-5">
                        <div className="container justify-end">
                            <div className="radio-wrapper">
                                <input className="input" name="btn" id="value-1" checked={pathname == "/home"} type="radio" onClick={() => navigate("/home")} />
                                <div className="btn">
                                    <span >_</span>Home
                                    <span className="btn__glitch" >Home_</span>
                                </div>
                            </div>
                            <div className="radio-wrapper">
                                <input className="input" name="btn" id="value-2" checked={pathname == "/about"} type="radio" onClick={() => navigate("/about")} />
                                <div className="btn">
                                    _About<span ></span>
                                    <span className="btn__glitch" >About_</span>
                                </div>
                            </div>
                            <div className="radio-wrapper">
                                <input className="input" name="btn" id="value-3" checked={pathname == "/contact"} type="radio" onClick={() => navigate("/contact")} />
                                <div className="btn">
                                    _Contact<span ></span>
                                    <span className="btn__glitch" >Contact_</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full overflow-auto z-20"
                >
                    {children}
                </motion.div>
            </section>
        </main>
    )
}

export default Layout;