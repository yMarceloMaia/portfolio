import './styles.css'
import Layout from "../components/Layout";

const Home = () => {
    return (
        <Layout>
            <main className="z-30">
                    <h1 className="absolute right-0 bottom-0 text-[200px] font-body z-0 opacity-[.02]">HOME</h1>
                <section className="mt-32  flex">
                    <p className="md:w-2/4 object-cover p-5 ml-10 flex items-center min-h-40">Hello, my name is Marcelo, and I am a full-stack developer. Always ready for new challenges and creative collaborations. Take a look at my portfolio, and let's create something amazing together!</p>
                </section>
            </main>
        </Layout>
    )
}

export default Home;

