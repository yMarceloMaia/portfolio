import { useNavigate } from "react-router-dom"
import githubIcon from "/icons8-github-96.png"
import linkedinIcon from "/icons8-linkedin-96.png"
import moonIcon from "/icons8-lua-100.png"
import logo from "/logo-black.png"

const Header = () => {
    const navigate = useNavigate()

    return (
        <header className='w-full max-w-7xl flex justify-between items-center h-40'>
            <div className='flex justify-between w-full'>
                <img className="w-11 h-11 cursor-pointer" src={logo} alt="" />
                <div className='flex w-2/4 justify-around items-center'>
                    <a className='cursor-pointer' onClick={() => navigate("/")}>Inicio</a>
                    <a className='cursor-pointer' onClick={() => navigate("/projects")}>Projetos</a>
                    <a className='cursor-pointer' onClick={() => navigate("/about")}>Sobre</a>
                    <a className='cursor-pointer' onClick={() => navigate("/contact")}>Contato</a>
                </div>
            </div>
            <div className='flex justify-around justify-items-center items-center w-1/6'>
                <img className='w-11 h-11 cursor-pointer' src={githubIcon} alt="" />
                <img className='w-12 h-12 cursor-pointer' src={linkedinIcon} alt="" />
                <img className='w-9 h-9 cursor-pointer' src={moonIcon} alt="" />
            </div>
            {/* <div className="my-40 flex">
                <div className="mx-auto h-20 w-20 animate-spin rounded-3xl p-6 outline-dotted outline-2 outline-gray-500"></div>
            </div> */}
        </header>
    )
}

export default Header;