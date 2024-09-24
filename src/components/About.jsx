import photo from "../assets/images/img.jpg";
import { GoArrowUpRight } from "react-icons/go";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
    // const [show, setShow] = useState(true)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setShow(false)
    //     }, 4000);
    // }, [])

    return (
        <main className="bg-gray-200 rounded-b-3xl mt-[4rem]">
            <Navbar />
            <motion.div 
                drag
                dragConstraints={{right: 0, left: 70, bottom: 40, top: 4}}
                dragElastic={0.9}
                className="bg-slate-300 w-[30px] h-[30px] rounded-full fixed right-0 top-[25rem]"
            >
            </motion.div>

            <motion.div  className="flex justify-center items-center flex-col w-[90%] md:w-[45%] mx-auto text-center mt-5 pb-10">
                <img src={photo} alt="face" className="w-[20%] mt-2 rounded-full"/>
                
                <div className="font-medium mt-5 text-base">Hello! I am Adenike Adeofe</div>
                   
                <h5 className="text-sm md:text-lg font-semibold py-3">I am a frontend developer with a passion for creating clean, user-friendly web applications. I enjoy bringing ideas to life with tools like React and TailwindCSS, ensuring everything works well on any device. If you're looking for someone who can deliver both good looks and functionality, let's make it happen!</h5>
                <button className="rounded-full bg-black py-2 px-4 text-white"><a href="https://github.com/adenike23" target="_blank">Github <GoArrowUpRight className="inline"/></a> </button>
            </motion.div>
        </main>
    )
}