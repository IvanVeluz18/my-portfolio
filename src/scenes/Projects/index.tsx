import useMediaQuery from "@/hooks/useMediaQuery";
import { ClassType, CurrentPage } from "@/shared/types"
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import OtherProject from "./OtherProjects";

const otherProjects: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "image1",
    link: "https://github.com/IvanVeluz18/my-portfolio",
  },
  {
    name: "Yoga Classes",
    image: "image2",
    link: "https://github.com/IvanVeluz18/my-portfolio"
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "image3",
    link: "https://github.com/IvanVeluz18/my-portfolio"
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "image4",
    link: "https://github.com/IvanVeluz18/my-portfolio"
  },
  {
    name: "Fitness Classes",
    image: "image5",
    link: "https://github.com/IvanVeluz18/my-portfolio"
  },
  {
    name: "Training Classes",
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
      <section>
        
      </section>

      <section id="ourclasses" className="w-full bg-primary-100 py-40">
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
              <HText>More Projects</HText>
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
                {otherProjects.map((item: ClassType, index) => (
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