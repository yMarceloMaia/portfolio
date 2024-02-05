import Layout from "../components/Layout";
import githubIcon from "/github.png"
import linkedinIcon from "/linkedin.png"
import emailIcon from "/email.png"

const Contact = () => {
    const handleEmailButtonClick = () => {
        const emailAddress = 'marcelomaiadev@gmail.com';
        const subject = ''
        const body = ''

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <Layout>
            <main className="h-full w-full flex justify-center items-center">
                <h1 className="absolute right-0 bottom-0 text-[200px] font-body z-0 opacity-[.01]">CONTACT</h1>
                <section className="w-5/6 h-full flex items-center">
                    <section className="w-full h-3/4 flex flex-col justify-around">
                        <section>
                            <h1 className="text-3xl mb-3">Let's work together</h1>
                            <h3 className="">Get in touch with me</h3>
                        </section>
                        <section className="flex mt-14 gap-10 items-center z-30 flex-wrap justify-center">
                            <div className="flex flex-col items-center h-24  justify-between ">
                                <a onClick={() => handleEmailButtonClick()}><img className="ml-2  mt-1 w-10 h-10 cursor-pointer" src={emailIcon} alt="linkedin icon" /></a>
                                <p className="text-gray-600">marcelomaiadev@gmail.com</p>
                            </div>

                            <div className="flex flex-col items-center h-24  justify-between">
                                <a target="_blank" href="https://github.com/yMarceloMaia"><img className="w-14 h-14 cursor-pointer" src={githubIcon} alt="github icon" /></a>
                                <p className="text-gray-600">@yMarceloMaia</p>
                            </div>
                            <div className="flex flex-col items-center h-24  justify-between">
                                <a target="_blank" href="https://www.linkedin.com/in/ymarcelomaia/"><img className="w-14 h-14 cursor-pointer" src={linkedinIcon} alt="linkedin icon" /></a>
                                <p className="text-gray-600">@yMarceloMaia</p>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </Layout>
    )
}

export default Contact;