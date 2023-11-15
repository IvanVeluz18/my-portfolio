import {  CurrentPage } from "@/shared/types"
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import fashionbug from '@/assets/fashionbug.png'
import gradmatic from '@/assets/gradmatic.png'
import yologkd from '@/assets/yologkd.png'
import gym from '@/assets/gym.png'
import aaccup from '@/assets/aaccup.png'
import ProjText from "@/shared/ProjText";

type Props = {
  setCurrentPage: (value: CurrentPage) => void;
}

const Projects = ({setCurrentPage}: Props) => {
  return (
    <>
      <section id="projects" className="">
        <motion.div className="mx-auto pt-20 pb-1 md:w-4/6">
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
              className="mx-4 md:mx-0 md:my-5 "
            >
              <HText>RECENT PROJECTS</HText>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      
      <section id="project-contents">
        <section className="w-full pt-28 pb-32 bg-proj-1 py-40">
          <motion.div onViewportEnter={() => setCurrentPage(CurrentPage.Projects)}>
            <motion.div
            className="mx-auto w-5/6 md:w-4/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
              <div className="">
                <ProjText>YOLOv5 - GKD</ProjText>
                  <div className="md:flex flex-row">
                    <div className="md:w-4/5">
                        <p className="py-5 text-justify text-proj-txt">
                          YOLOv5-GKD is a weapon detection system that utilizes the use of machine learning algorithm called YOLO (You only look once). For our thesis, we modified some parts of its
                          neural network and trained the model using our own datasets of guns, knives and improvised weapons commonly used in the Philippines. The system and the algorithm was developed in Python.
                        </p>
                        <a href="https://github.com/IvanVeluz18/YOLOv5-GKD" target="blank">
                          <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-12 py-3 transition duration-300 text-primary-500 hover:text-white">
                                VIEW PROJECT
                          </button>
                        </a>
                    </div>
                      <motion.div
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true, amount: 0.25 }}
                                  transition={{ delay: 0.2, duration: 0.5 }}
                                  variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                  }} 
                      className="pt-16 md:pt-0">
                        <img src={yologkd} alt="" className="h-auto scale-125 md:scale-100 md:w-auto drop-shadow-xl" />
                      </motion.div>
                  </div>
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

          <section className="w-full pt-28 pb-32 bg-primary-500 py-40">
            <motion.div onViewportEnter={() => setCurrentPage(CurrentPage.Projects)}>
              <motion.div
              className="mx-auto w-5/6 md:w-4/6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              >
                <div className="">
                  <ProjText>FashionBug</ProjText>
                  <div className="md:flex flex-row">
                    <div className="md:w-5/6">
                        <p className="py-5 text-justify text-proj-txt">
                        An Inventory Management System made for a clothing business. The system was created using C# Windows Form and MS SQL. The system has various features,
                        and was made entirely by me. 
                        </p>
                        <a href="https://github.com/IvanVeluz18/FashionBug-inventory-management-system" target="blank">
                          <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-12 py-3 transition duration-300 text-primary-500 hover:text-white">
                                VIEW PROJECT
                          </button>
                        </a>
                    </div>
                      <motion.div 
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true, amount: 0.25 }}
                                  transition={{ delay: 0.2, duration: 0.5 }}
                                  variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                  }}
                      className="pt-16 md:pt-0">
                        <img src={fashionbug} alt="" className="h-auto scale-125 md:scale-100 md:w-auto drop-shadow-xl" />
                      </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
        </section>

        <section className="w-full pt-28 pb-32 bg-proj-3 py-40">
            <motion.div onViewportEnter={() => setCurrentPage(CurrentPage.Projects)}>
              <motion.div
              className="mx-auto w-5/6 md:w-4/6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              >
                <div className="">
                  <ProjText>PUP - AACCUP</ProjText>
                  <div className="md:flex flex-row">
                    <div className="md:w-5/6">
                        <p className="py-5 text-justify text-proj-txt">
                        A website created on Google Sites. This project is intended to showcase the thesis papers and the qualifications of specific colleges inside our university
                        in order to increase their level of Accreditation.
                        </p>
                        <a href="https://sites.google.com/view/pup-aaccup/home" target="blank">
                          <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-12 py-3 transition duration-300 text-primary-500 hover:text-white">
                                VIEW PROJECT
                          </button>
                        </a>
                    </div>
                      <motion.div 
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true, amount: 0.25 }}
                                  transition={{ delay: 0.2, duration: 0.5 }}
                                  variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                      }}
                      className="pt-16 md:pt-0">
                        <img src={aaccup} alt="" className="h-auto scale-125 md:scale-100 md:w-auto drop-shadow-xl" />
                      </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
        </section>

        <section className="w-full pt-28 pb-32 bg-proj-4 py-40">
            <motion.div onViewportEnter={() => setCurrentPage(CurrentPage.Projects)}>
              <motion.div
              className="mx-auto w-5/6 md:w-4/6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              >
                <div className="">
                  <ProjText>GradMatic</ProjText>
                  <div className="md:flex flex-row">
                    <div className="md:w-5/6">
                        <p className="py-5 text-justify text-proj-txt">
                        An automatic grading system made to aid teachers from public schools in computing and encoding grades for various subjects for numerous sections of students.
                        The grading system was made in java.
                        </p>
                        <a href="https://github.com/IvanVeluz18/GradMatic-UI" target="blank">
                          <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-12 py-3 transition duration-300 text-primary-500 hover:text-white">
                                VIEW PROJECT
                          </button>
                        </a>
                    </div>
                    <motion.div 
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true, amount: 0.25 }}
                                  transition={{ delay: 0.2, duration: 0.5 }}
                                  variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                    }}
                    className="pt-16 md:pt-0">
                      <img src={gradmatic} alt="" className="h-auto scale-125 md:scale-100 md:w-auto drop-shadow-xl" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
        </section>

        <section className="w-full pt-28 pb-32 bg-proj-5 py-40">
            <motion.div onViewportEnter={() => setCurrentPage(CurrentPage.Projects)}>
              <motion.div
              className="mx-auto w-5/6 md:w-4/6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              >
                <div className="">
                  <ProjText>Evogym</ProjText>
                  <div className="md:flex flex-row">
                    <div className="md:w-5/6">
                        <p className="py-5 text-justify text-proj-txt">
                        A dynamic website created using React, Typescript, Tailwind CSS, and other technologies like framer motion. This project utilizes the power of react
                        custom hooks. The assets used here are open source and the whole project itself was made as a practice of using the best practices in Typescript and React.
                        </p>
                        <a href="https://github.com/IvanVeluz18/gym-website" target="blank">
                          <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-12 py-3 transition duration-300 text-primary-500 hover:text-white">
                                VIEW PROJECT
                          </button>
                        </a>
                    </div>
                    <motion.div
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true, amount: 0.25 }}
                                  transition={{ delay: 0.2, duration: 0.5 }}
                                  variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                    }} 
                    className="pt-16 md:pt-0">
                      <img src={gym} alt="" className="h-auto scale-125 md:scale-100 md:w-auto drop-shadow-xl" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
        </section>
      </section>
  </>
  )
}

export default Projects