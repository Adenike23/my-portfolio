import devdose from "../assets/images/devdose.png";
import fashionTech from "../assets/images/fashionTech.png";
import countries from "../assets/images/countries.jpeg";
import movies from "../assets/images/movies.jpeg";
import projectUniv from "../assets/images/projectUniv.png";
import swif from '../assets/images/swif.png'
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";


export default function Projects() {
    return (
        <div className="md:px-[10rem] py-[3rem]">
            <h4 className="text-2xl font-medium pb-4 pl-4 md:pl-0">Selected Works</h4>
                <div>
                <div className="flex flex-col md:flex-row justify-around w-[90%] mx-auto mb-[4rem] bg-zinc-300 p-3 rounded-2xl">
                    <div className="md:w-[40%] mb-3 md:mb-0">
                        <h2 className="text-2xl font-semibold">FashionTech</h2>
                        <p className="py-2 leading-7 py-5">Using API, I built a dynamic e-commerce platform that optimized the user experience by smoothly integrating a variety of functionalities.</p>
                        <button className="rounded-2xl bg-black py-3 px-4 text-white md:mt-[6rem] mr-[1rem]"><a href="https://github.com/Adenike23/fashionTech" target="_blank" className="flex items-center gap-1"><FaGithub /> Github</a></button>
                        <button className="rounded-2xl bg-black py-3 px-4 text-white md:mt-[6rem]"><a href="https://adenike-fashiontech.netlify.app" target="_blank" className="flex items-center gap-1"><LiaEyeSolid /> Live</a></button>
                    </div>
                    <div style={{ overflow: 'hidden', width: '400px', height: '300px' }}>
                    <motion.img
                        src={fashionTech} 
                        alt="Scrolling Image"
                        initial={{ y: 0 }} // Initially showing the top part of the image
                        whileHover={{ y: -3300 }} // Move the image upwards on hover
                        transition={{ duration: 5, ease: "easeInOut" }} // Smooth scrolling effect
                        style={{ height: 'auto', objectFit: 'cover', cursor: 'pointer', borderRadius: '25px' }}
                        className="mt-3 md:mt-0 w-[85%] md:w-[100%]"
                        />
                    </div>
                    </div>

                <div className="flex flex-col-reverse md:flex-row justify-around w-[90%] mx-auto my-[4rem] bg-zinc-300 p-3 rounded-2xl">
                    <div style={{ overflow: 'hidden', width: '400px', height: '300px' }}>
                    <motion.img
                        src={projectUniv} 
                        alt="Scrolling Image"
                        initial={{ y: 0 }} 
                        whileHover={{ y: -1100 }} 
                        transition={{ duration: 5, ease: "easeInOut" }} 
                        style={{ height: 'auto', objectFit: 'cover', cursor: 'pointer', borderRadius: '25px' }}
                        className="mt-3 md:mt-0 w-[85%] md:w-[100%]"
                        />
                    </div>
                    <div className="md:w-[40%] mb-3 md:mb-0">
                        <h2 className="text-2xl font-semibold">ProjectUniv</h2>
                        <p className="py-2">ProjectUniv allows lecturers to manage course materials, post assignments, and interact with students. Students can view course materials, submit assignments, and track their progress. The project is designed to streamline communication and assignment management between students and lecturers.</p>
                        <button className="rounded-2xl bg-black py-2 px-4 text-white md:mt-[6rem]"><a href="https://github.com/tolopsy/univ-frontend" className="flex items-center gap-1" target="_blank"><FaGithub /> Github</a></button>
                    </div>
                    </div>
                <div className="flex flex-col md:flex-row justify-around w-[90%] mx-auto my-[4rem] bg-zinc-300 p-3 rounded-2xl">
                    <div className="md:w-[40%] mb-3 md:mb-0">
                        <h2 className="text-2xl font-semibold">DevDose</h2>
                        <p className="py-2">DevDose is your go-to blog for a daily fix of insights. Through the integration of APIs, this platform delivers insightful content.</p>
                        <button className="rounded-2xl bg-black py-2 px-4 text-white md:mt-[6rem mr-[1rem]"><a href="https://github.com/Adenike23/DevDose" className="flex items-center gap-1"><FaGithub /> Github </a></button>
                        <button className="rounded-2xl bg-black py-2 px-4 text-white md:mt-[6rem]"><a href="https://adenike-devdose.netlify.app/" className="flex items-center gap-1"><LiaEyeSolid /> Live </a></button>
                    </div>
                    <div style={{ overflow: 'hidden', width: '400px', height: '300px' }}>
                    <motion.img
                        src={devdose} 
                        alt="Scrolling Image"
                        initial={{ y: 0 }} 
                        whileHover={{ y: -1400 }} 
                        transition={{ duration: 5, ease: "easeInOut" }} 
                        style={{ height: 'auto', objectFit: 'cover', cursor: 'pointer', borderRadius: '25px' }}
                        className="mt-3 md:mt-0 w-[85%] md:w-[100%]"
                        />
                    </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row justify-around w-[90%] mx-auto my-[4rem] bg-zinc-300 p-3 rounded-2xl py-3">
                        <div style={{ overflow: 'hidden', width: '400px', height: '300px' }}>
                    <motion.img
                        src={swif} 
                        alt="Scrolling Image"
                        initial={{ y: 0 }} 
                        whileHover={{ y: -500 }} 
                        transition={{ duration: 2, ease: "easeInOut" }} 
                        style={{ height: 'auto', objectFit: 'cover', cursor: 'pointer', borderRadius: '5%' }}
                        className="mt-3 md:mt-0 w-[85%] md:w-[100%]"
                        />
                    </div>
                        <div className="md:w-[40%] mb-3 md:mb-0">
                            <h2 className="text-2xl font-semibold">FashionTech</h2>
                            <p className="py-2">Using API, I built a dynamic e-commerce platform that optimized the user experience by smoothly integrating a variety of functionalities.</p>
                            <button className="rounded-2xl bg-black py-2 px-4 text-white md:mt-[6rem]">Github </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}