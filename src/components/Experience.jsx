import { motion } from "framer-motion"

export default function Experience() {
    return (
        <div className="bg-gray-200 p-[3rem] md:px-[10rem] md:grid grid-cols-2 rounded-3xl">
            <div>
            <h4 className="text-2xl font-medium">Work Experience</h4>
            <motion.div initial={{x: '-100vw'}} animate={{x: 0}} transition={{type: 'spring', stiffness: 100}} className="bg-zinc-200 drop-shadow-lg p-2 my-2">
                <h2>React Developer at Swifdrop</h2>
                <small>June 2024 - present</small>
                <h4 className="pt-3">&diams; Worked on a food delivery app, using React Context and React Query and specifically focusing on the development and
                management of the admin dashboard.</h4>
            </motion.div>
            <motion.div className="bg-zinc-200 drop-shadow-lg p-2">
                <h2>Frontend Developer Intern</h2>
                <small>March 2024 - present</small>
                <h4 className="pt-3">&diams; Designed and implemented a course management web app using React and
                TypeScript.</h4>
            </motion.div>
            <motion.div className="bg-zinc-200 drop-shadow-lg p-2 my-2">
                <h2>React Developer at Swifdrop</h2>
                <small>June 2024 - present</small>
                <h4 className="pt-3">&diams; Utilizing Tailwind CSS to style components and ReactJS to build dynamic user
                interfaces that are responsive on all platforms.</h4>
            </motion.div>
            </div>
        </div>
    )
}