import { CurrentPage } from "@/shared/types"
import { motion } from "framer-motion";
import portrait_gray from "@/assets/portrait_gray.png"

type Props = {
  setCurrentPage: (value: CurrentPage) => void;
}

const Home = ({setCurrentPage}: Props) => {
  return (
    <section id="home" className="gap-16 bg-primary-100 py-24 md:h-full md:pb-0">
      <motion.div className="mx-auto w-4/6 items-center justify-center md:flex md:h-5/6 md:w-5/6"
      onViewportEnter={() => setCurrentPage(CurrentPage.Home)}>
        <motion.div className=""
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}} 
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y:-50},
            visible: {opacity: 1, y: 0}
        }}>
          <img className="h-80 rounded-full md:z-10 md:ml-40 md:justify-items-end" src={portrait_gray} alt="" />
        </motion.div>
        <div className="z-10 mt-20 md:basis-4/6">
          <motion.div className="md:-mt-20 md:ml-28"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}} 
            transition={{delay: 0.2, duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x:-50},
              visible: {opacity: 1, x: 0}
          }}>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                <h3 className="py-3 text-2xl">Hello! I'm</h3>
                <h1 className="text-5xl font-bold">John Ivan Veluz</h1>
              </div>
            </div>
          </motion.div >
          <div className="mx-auto w-5/6 items-center justify-center md:h-5/6 md:w-4/6">
              <p className="mt-4 text-3xl items-center justify-center">
                Fullstack Web Developer | Software Engineer | AI/ML
            </p>
            <span className="mx-auto space-x-4 flex items-center justify-center md:justify-normal">
              <button type="submit"
                      className="mt-5 rounded-full bg-secondary-500 px-8 py-3 transition duration-300 hover:text-white">Download CV</button>
              <button type="submit"
                      className="mt-5 rounded-full bg-secondary-500 px-4 py-3 transition duration-300 hover:text-white">Github</button>
              <button type="submit"
                      className="mt-5 rounded-full bg-secondary-500 px-4 py-3 transition duration-300 hover:text-white">LinkedIn</button>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Home