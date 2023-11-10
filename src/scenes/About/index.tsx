import { CurrentPage } from "@/shared/types"
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
  setCurrentPage: (value: CurrentPage) => void;
}

const About = ({setCurrentPage}: Props) => {
  return (
    <section id="about" className="">
      <motion.div className="mx-auto px-4 pt-24 pb-24 md:px-0 md:w-3/6">
        <motion.div  onViewportEnter={() => setCurrentPage(CurrentPage.About)}>
          <motion.div className="md:w-/5"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}} 
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x:-50},
              visible: {opacity: 1, x: 0}
            }}>
            <HText>
              <span className="">ABOUT ME</span>
            </HText>
            <div className="text-lg">
              <p className="my-5 text-justify">
                I'm John Ivan Veluz, a passionate full stack developer based in Quezon City, Philippines. 
                I hold a degree in Computer Science from the Polytechnic University of the Philippines. 
                While I have experience in <b><i>full stack development</i></b>, my current focus lies in <b><i>front-end development</i></b>, 
                where I find immense joy in creating captivating user interfaces and bringing designs to life.    
              </p>
              <p className="my-5 text-justify">
                In addition to my coding and editing skills, I have a strong affinity for gaming, playing various sports, 
                and exploring the great outdoors. I thrive on the excitement of constantly trying new things and pushing 
                my boundaries, both personally and professionally.
              </p>
              <p className="my-5 text-justify">
                My journey into programming began in 2018 with a simple JavaScript game, which ignited my curiosity and propelled me to delve deeper into <b><i>JavaScript</i></b> and <b><i>CSS</i></b>. 
                As I pursued my education, I expanded my knowledge to include languages such as <b><i>C, Java, C#, and Python</i></b>, utilizing them for diverse projects. 
                Currently, I am sharpening my skills in <b><i>React</i></b> and <b><i>Typescript</i></b> for my projects, while also exploring back-end technologies like  
                 <b><i> ASP.NET</i></b> and <b><i>Node.js</i></b>.
              </p>
              <p className="my-5 text-justify">
              I am actively seeking opportunities for full-time, part-time, or project-based work. 
              Throughout my journey, I have acquired valuable experience working with various programming languages and technologies, enabling me to adapt to different project requirements. 
              If you are searching for a dedicated and versatile full stack developer who thrives on new challenges and strives for team success, I would be thrilled to connect with you. 
              Please feel free to reach out to me for collaboration or any inquiries.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About