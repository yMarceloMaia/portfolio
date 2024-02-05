import { useState } from "react";
import Layout from "../components/Layout";
import githubIcon from "/github.png"
import linkedinIcon from "/linkedin.png"
import emailIcon from "/email.png"

const Contact = () => {
    // const [subject, setSubject] = useState("")
    // const [body, setBody] = useState("")

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
                        {/* <button onClick={() => handleEmailButtonClick()} type="button" className="border border-gray-600 text-zinc-500 hover:border-zinc-600 hover:bg-zinc-400 hover:bg-opacity-10 hover:text-zinc-600 focus:border-zinc-700 focus:text-zinc-700 active:border-zinc-800 active:text-zinc-800 dark:border-zinc-300 dark:text-zinc-300 dark:hover:hover:bg-zinc-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 cursor-pointer w-32">Entrar em contato</button> */}
                    </section>

                    {/* <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleEmailButtonClick()
                        }}
                        className="w-full flex flex-col gap-3 justify-center items-center z-10">

                        <div className="grid w-full h-full rounded-lg place-items-center">
                            <div className="w-full flex flex-col gap-3">
                                <div className="relative h-10 w-full min-w-[200px]">
                                    <input
                                        value={name}
                                        name="name"
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        className="peer h-full w-full  border border-gray-600  bg-transparent px-3 py-2.5 font-sans text-sm font-normal  !text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" " />
                                    <label
                                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:border-t before:border-l before:border-gray-600 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:border-t after:border-r after:border-gray-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Your Name
                                    </label>
                                </div>
                                <div className="relative h-10 w-full min-w-[200px]">
                                    <input
                                        value={email}
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        className="peer h-full w-full  border border-gray-600  bg-transparent px-3 py-2.5 font-sans text-sm font-normal  !text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" " />
                                    <label
                                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:border-t before:border-l before:border-gray-600 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:border-t after:border-r after:border-gray-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Email Address
                                    </label>
                                </div>
                                <div className="relative h-10 w-full min-w-[200px]">
                                    <input
                                        value={subject}
                                        name="subject"
                                        onChange={(e) => setSubject(e.target.value)}
                                        type="text"
                                        className="peer h-full w-full  border border-gray-600  bg-transparent px-3 py-2.5 font-sans text-sm font-normal  !text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" " />
                                    <label
                                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:border-t before:border-l before:border-gray-600 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:border-t after:border-r after:border-gray-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Subject
                                    </label>
                                </div>
                                <div className="relative h-52 w-full min-w-[200px]">
                                    <input
                                        value={body}
                                        name="message"
                                        onChange={(e) => setBody(e.target.value)}
                                        type="text"
                                        className="peer h-full w-full  border border-gray-600  bg-transparent px-3 py-2.5 font-sans text-sm font-normal  !text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" " />
                                    <label
                                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:border-t before:border-l before:border-gray-600 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:border-t after:border-r after:border-gray-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Message
                                    </label>
                                </div>
                            </div>
                        </div>


                        <button type="submit" className="border border-gray-600 text-zinc-500 hover:border-zinc-600 hover:bg-zinc-400 hover:bg-opacity-10 hover:text-zinc-600 focus:border-zinc-700 focus:text-zinc-700 active:border-zinc-800 active:text-zinc-800 dark:border-zinc-300 dark:text-zinc-300 dark:hover:hover:bg-zinc-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 cursor-pointer w-32">Submit</button>


                    </form> */}

                </section>
            </main>
        </Layout>
    )
}

export default Contact;