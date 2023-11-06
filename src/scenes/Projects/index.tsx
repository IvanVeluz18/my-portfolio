import useMediaQuery from "@/hooks/useMediaQuery";
import { OtherProjectType, CurrentPage, ProjectType } from "@/shared/types"
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import OtherProject from "./OtherProjects";
import ProjectContainer from "./ProjectContainer";
import fashionbug from '@/assets/fashionbug.png'
import gradmatic from '@/assets/gradmatic.png'
import yologkd from '@/assets/yologkd.png'

type Props = {
  setCurrentPage: (value: CurrentPage) => void;
}

const Projects = ({setCurrentPage}: Props) => {
  return (
    <>
      <section id="projects" className="">
        <motion.div className="mx-auto w-4/6 pt-20 pb-1">
          <motion.div onViewportEnter={() => setCurrentPage(CurrentPage.Projects)}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once:true, amount: 0.5}} 
              transition={{duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity: 1, x: 0}
              }}
              className="md:my-5"
            >
              <HText>MY PROJECTS</HText>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <section id="project-contents">
      <section className="w-full pt-24 pb-32 bg-primary-100 py-40">
        <motion.div onViewportEnter={() => setCurrentPage(CurrentPage.Projects)}>
          <motion.div
          className="mx-auto w-4/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          >
            <div className="md:w-2/5">
              <HText>YOLOv5 - GKD</HText>
              <p className="py-5">
                YOLOv5-GKD is a weapon detection system that utilizes the use of machine learning algorithm called YOLO (You only look once). For our thesis, we modified some parts of its
                neural network and trained the model using our own datasets of guns, knives and improvised weapons commonly used in the Philippines. The system and the algorithm was developed in Python.
              </p>
              <button
                    type="submit"
                    className="mt-5 rounded-lg bg-secondary-500 px-12 py-3 transition duration-300 hover:text-white">
                    VIEW ON GITHUB
              </button>
            </div>
          </motion.div>
            {/*Left side
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
              <ul className="w-[2800px] whitespace-nowrap">
                {otherProjects.map((item: OtherProjectType, index) => (
                  <OtherProject
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    link={item.link}
                    image={item.image}
                  />
                ))}
              </ul>
            </div>
            */}
        </motion.div>
        </section>

        <section className="w-full pt-24 pb-32 bg-primary-500 py-40">
          <motion.div onViewportEnter={() => setCurrentPage(CurrentPage.Projects)}>
            <motion.div
            className="mx-auto w-4/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
              <div className="md:w-2/5">
                <HText>FashionBug</HText>
                <p className="py-5">
                  An Inventory Management System made for a clothing business. The system was created using C# Windows Form and MS SQL. The system has various features,
                  and was made entirely by me. 
                </p>
                <button
                    type="submit"
                    className="mt-5 rounded-lg bg-secondary-500 px-12 py-3 transition duration-300 hover:text-white">
                    VIEW ON GITHUB
                </button>
              </div>
            </motion.div>
          </motion.div>
      </section>

      <section className="w-full pt-24 pb-32 bg-secondary-500 py-40">
          <motion.div onViewportEnter={() => setCurrentPage(CurrentPage.Projects)}>
            <motion.div
            className="mx-auto w-4/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
              <div className="md:w-2/5">
                <HText>PUP - AACCUP</HText>
                <p className="py-5">
                  A website created on Google Sites. This project is intended to showcase the thesis papers and the qualifications of specific colleges inside our university
                  in order to increase their level of Accreditation.
                </p>
                <button
                    type="submit"
                    className="mt-5 rounded-lg bg-primary-500 px-20 py-3 transition duration-300 hover:text-white">
                    VISIT SITE
                </button>
              </div>
            </motion.div>
          </motion.div>
      </section>

      <section className="w-full pt-24 pb-32 bg-primary-100 py-40">
          <motion.div onViewportEnter={() => setCurrentPage(CurrentPage.Projects)}>
            <motion.div
            className="mx-auto w-4/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
              <div className="md:w-2/5">
                <HText>GradMatic</HText>
                <p className="py-5">
                  An automatic grading system made to aid teachers from public schools in computing and encoding grades for various subjects for numerous sections of students.
                  The grading system was made in java.
                </p>
                <button
                    type="submit"
                    className="mt-5 rounded-lg bg-secondary-500 px-12 py-3 transition duration-300 hover:text-white">
                    VIEW ON GITHUB
                </button>
              </div>
            </motion.div>
          </motion.div>
      </section>

      <section className="w-full pt-24 pb-32 bg-primary-500 py-40">
          <motion.div onViewportEnter={() => setCurrentPage(CurrentPage.Projects)}>
            <motion.div
            className="mx-auto w-4/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
              <div className="md:w-2/5">
                <HText>Evogym</HText>
                <p className="py-5">
                  A dynamic website created using React, Typescript, CSS, Tailwind and other technologies like framer motion. This project utilizes the power of react
                  custom hooks. The assets used here are open source and the whole project itself was made as a practice of using the best practices in Typescript and React.
                </p>
                <button
                    type="submit"
                    className="mt-5 rounded-lg bg-secondary-500 px-12 py-3 transition duration-300 hover:text-white">
                    VIEW ON GITHUB
                </button>
              </div>
            </motion.div>
          </motion.div>
      </section>
      </section>
  </>
  )
}

export default Projects