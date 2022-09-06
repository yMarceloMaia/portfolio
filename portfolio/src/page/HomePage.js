import { NavMenu, SectionMe, SectionConteinerTitle, DivSt, DivTest, DivContainerProjects } from "./styles"
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
                {/* <h1>Eu sou</h1>
                <h1>Marcelo Maia</h1>
                <h1>Desenvolvedor web Full Stack</h1> */}
                <h1>Olá, eu sou o Marcelo</h1>
                <h2>Sou desenvolvedor Full Stack</h2>
            </SectionConteinerTitle>
            <h3>sobre mim \/</h3>
            <SectionMe>
                {/* <img src={me} title="picture of me"></img> */}
                <div>
                    <h3>um pouco sobre mim</h3>
                    <p>Pariatur voluptate nisi laborum cillum. Magna laboris nostrud qui ipsum laboris do nulla sint voluptate consectetur. Est incididunt nulla ut nostrud amet tempor aliquip anim nostrud do labore mollit.Pariatur voluptate nisi laborum cillum. Magna laboris nostrud qui ipsum laboris do nulla sint voluptate consectetur. Est incididunt nulla ut nostrud amet tempor aliquip anim nostrud do labore mollit.</p>
                </div>
            </SectionMe>

            <DivSt>
                <div>
                    <section>
                        <h2>Front-End</h2>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JAVASCRIPT</p>
                        <p>React</p>
                    </section>
                    <section>
                        <h2>Back-End</h2>
                        <p>TYPESCRIPT</p>
                        <p>NodeJS</p>
                        <p>API</p>
                        <p>SQL</p>
                    </section>
                </div>
            </DivSt>
            <h1>Projetos</h1>
            <DivContainerProjects>
                <DivTest></DivTest>
                <DivTest></DivTest>
                <DivTest></DivTest>
                <DivTest></DivTest>
                <DivTest></DivTest>
                <DivTest></DivTest>
            </DivContainerProjects>
            <div><h1>Contato</h1></div>
            <div><h1>redes sociais</h1></div>
        </div>
    )
}

export default HomePage