import { CurrentPage } from "@/shared/types"
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
  setCurrentPage: (value: CurrentPage) => void;
}

const About = ({setCurrentPage}: Props) => {
  return (
    <section id="about" className="md:h-full">
      <motion.div>
        <motion.div className="mx-auto w-5/6 pt-24 pb-32"
        onViewportEnter={() => setCurrentPage(CurrentPage.About)}>
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
            <span className="">ABOUT</span>
          </HText>

          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About