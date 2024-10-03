import { FaHandshakeAngle } from "react-icons/fa6";
import Message from "./message";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer() {
    const [openMail, setOpenMail] = useState(false)

    useEffect(() => {
        if (openMail) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      }, [openMail]);

    function handleOpenMail() {
        setOpenMail(prevVal => !prevVal)
    }
    
    return (
        <footer className="pt-[3rem] bg-gray-200 rounded-3xl pb-2 px-2">
            <div className="flex justify-center items-center flex-col mb-5 md:mb-0">
                <FaHandshakeAngle className="text-6xl bg-white rounded-full p-1"/>
                <small>Have a project?</small>
                <h2 className="text-2xl font-medium py-2">Let's talk with me</h2>
                <div className="mt-2">
                    <button className="rounded-full bg-black text-white py-2 px-4 mr-3"><a href="mailto:adenikeadeofe@gmail.com?subject=Mail from Portfolio">Email me</a></button>
                    <button onClick={handleOpenMail} className="rounded-full border border-black py-2 px-3 text-sm">Send a message</button>
                </div>
            </div>
                {openMail && <Message />}
                <div className="flex justify-between text-xs md:text-sm">
                    <p>&copy; 2024 all rights reserved.</p>
                    <div className="flex gap-4">
                        <p><a href="https://github.com/adenike23" target="_blank" rel="noopener noreferrer">github</a></p>
                        <p><a href="http://linkedin.com/in/adenike-adeofe-988661233" target="_blank" rel="noopener noreferrer">linkedin</a></p>
                        <p><a href="https://twitter.com/Oluwaseyi_mo" target="_blank" rel="noopener noreferrer">twitter</a></p>
                    </div>
                </div>
        </footer>
    )
}