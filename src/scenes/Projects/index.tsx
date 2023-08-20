import useMediaQuery from "@/hooks/useMediaQuery";
import { OtherProjectType, CurrentPage, ProjectType } from "@/shared/types"
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import OtherProject from "./OtherProjects";
import ProjectContainer from "./ProjectContainer";

const ProjectsBlock: Array<ProjectType> = [
  {
    icon: "icon1",
    title: "YOLOv5- GKD",
    description: 
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
  },
  {
    icon: "icon2",
    title: "Fashion Bug",
    description: 
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
  },
  {
    icon: "icon3",
    title: "GradMatic",
    description: 
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

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
      <section id="projects" className="mx-auto min-h-full w-5/6 py-20">
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
            className="md:my-5 md:w-/5"
          >
            <HText>MY PROJECTS</HText>
          </motion.div>
          <motion.div
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            variants={container}
          >
                      {ProjectsBlock.map((benefit: ProjectType) => (
            <ProjectContainer
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setCurrentPage={setCurrentPage}
            />
          ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="moreprojects" className="w-full bg-primary-100 py-40">
        <motion.div onViewportEnter={() => setCurrentPage(CurrentPage.Projects)}>
          <motion.div
          className="mx-auto w-5/6"
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
              <HText>MORE PROJECTS</HText>
              <p className="py-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </div>
          </motion.div>
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
        </motion.div>
      </section>
  </>
  )
}

export default Projects