import useMediaQuery from "@/hooks/useMediaQuery";
import { OtherProjectType, CurrentPage, ProjectType } from "@/shared/types"
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import OtherProject from "./OtherProjects";
import ProjectContainer from "./ProjectContainer";
import fashionbug from '@/assets/fashionbug.png'
import gradmatic from '@/assets/gradmatic.png'
import yologkd from '@/assets/yologkd.png'

const otherProjects: Array<OtherProjectType> = [
  {
    name: "Shirtfeed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "image1",
    link: "https://github.com/IvanVeluz18/my-portfolio",
  },
  {
    name: "Pharmacy Prescription System",
    image: "image2",
    link: "https://github.com/IvanVeluz18/my-portfolio"
  },
  {
    name: "Hangman Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "image3",
    link: "https://github.com/IvanVeluz18/my-portfolio"
  },
  {
    name: "Mini Tennis Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "image4",
    link: "https://github.com/IvanVeluz18/my-portfolio"
  },
  {
    name: "Dynamic Gym Website",
    image: "image5",
    link: "https://github.com/IvanVeluz18/my-portfolio"
  },
  {
    name: "More Projects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "image6",
    link: "https://github.com/IvanVeluz18/my-portfolio"
  },
];

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
            <div className="md:w-3/5">
              <HText>YOLOv5 - GKD</HText>
              <p className="py-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
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
              <div className="md:w-3/5">
                <HText>FashionBug</HText>
                <p className="py-5">
                  Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                  tellus quam porttitor. Mauris velit euismod elementum arcu neque
                  facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                  enim mattis odio in risus nunc.
                </p>
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
              <div className="md:w-3/5">
                <HText>PUP - AACCUP</HText>
                <p className="py-5">
                  Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                  tellus quam porttitor. Mauris velit euismod elementum arcu neque
                  facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                  enim mattis odio in risus nunc.
                </p>
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
              <div className="md:w-3/5">
                <HText>GradMatic</HText>
                <p className="py-5">
                  Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                  tellus quam porttitor. Mauris velit euismod elementum arcu neque
                  facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                  enim mattis odio in risus nunc.
                </p>
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
              <div className="md:w-3/5">
                <HText>Evogym</HText>
                <p className="py-5">
                  Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                  tellus quam porttitor. Mauris velit euismod elementum arcu neque
                  facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                  enim mattis odio in risus nunc.
                </p>
              </div>
            </motion.div>
          </motion.div>
      </section>
  </>
  )
}

export default Projects