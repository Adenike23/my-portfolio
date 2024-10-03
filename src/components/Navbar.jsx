import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <header className="flex justify-between items-center px-1 md:px-5 py-1 fixed w-[100%] z-10 bg-gray-200 top-0 text-xs md:text-base">
            <div className="flex items-center gap-1" initial={{y: -250, opacity: 0}} animate={{ y: 1, opacity: 1 }} transition={{ duration: .5, ease: "easeInOut",mass: 0.4, damping: 4, type: 'spring', stiffness: 100 }}>
                <motion.div drag>
                    <motion.svg
                        initial={{rotate: -180}}
                        animate={{ rotate: 0, transition: {duration: 1} }}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="60"
                        whileHover={{
                            rotate: 360,
                            transition: { duration: 1.5 }
                        }}
                        className='cursor-pointer'
                    >
                        <motion.path 
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{opacity: 1, pathLength: 1, transition: {duration: 3, ease: 'easeInOut'}}}
                        
                        d="M 20 80 L 50 20 L 80 80" fill="none" stroke="black" stroke-width="5"/>
                        <motion.path d="M 35 55 L 65 55" fill="none" stroke="black" stroke-width="5"/>
                    </motion.svg>
                </motion.div>

                <motion.button whileHover={{textShadow: '0px 0px 8px rgb(211, 211, 211)', boxShadow: '0px 0px 8px rgb(255, 255, 255)', scale: 1.1, transition: {duration: 0.5} }} className="rounded-full bg-gray-100 py-2 px-4 font-medium"><a href="./Adenike-Adeofe_Resume.pdf" className="resume-link">Resume</a></motion.button>
            </div>
            <motion.div className="flex gap-4" initial={{y: -250, opacity: 0}} animate={{ y: 1, opacity: 1 }} transition={{ duration: .5, ease: "easeInOut",mass: 0.4, damping: 7, type: 'spring', stiffness: 100 }}>
                <p><a href="https://github.com/adenike23" target="_blank">github</a></p>
                <p><a href="http://linkedin.com/in/adenike-adeofe-988661233" target="_blank">linkedin</a></p>
                <p><a href="https://twitter.com/Oluwaseyi_mo" target="_blank">twitter</a></p>
            </motion.div>
        </header>
    )
}