import { NavMenu, SectionMe, SectionConteinerTitle } from "./styles"
import me from "../asserts/me.jpg"

const HomePage = () => {
    return (
        <div>

            <NavMenu>
                <h3>HomePage</h3>
                <section>
                    <a><strong>Home</strong></a>
                    <a><strong>Sobre</strong></a>
                    <a><strong>Projetos</strong></a>
                    <a><strong>Contato</strong></a>
                </section>
            </NavMenu>
            <SectionConteinerTitle>
                <h1>Eu sou</h1>
                <h1>Marcelo Maia</h1>
                <h1>Desenvolvedor web Full Stack</h1>
            </SectionConteinerTitle>
            <SectionMe>
                <img src={me} title="picture of me"></img>
                <div>
                    <h1>Sobre mim</h1>
                    <p>Pariatur voluptate nisi laborum cillum. Magna laboris nostrud qui ipsum laboris do nulla sint voluptate consectetur. Est incididunt nulla ut nostrud amet tempor aliquip anim nostrud do labore mollit.Pariatur voluptate nisi laborum cillum. Magna laboris nostrud qui ipsum laboris do nulla sint voluptate consectetur. Est incididunt nulla ut nostrud amet tempor aliquip anim nostrud do labore mollit.</p>
                </div>
            </SectionMe>
            <div>
                <h1>Projetos</h1>
                
            </div>
        </div>
    )
}

export default HomePage