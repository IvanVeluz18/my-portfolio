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
            <span className="">ABOUT</span>
          </HText>
          <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae porro alias architecto sequi exercitationem. Saepe nulla, earum omnis, labore dolore quaerat sunt neque amet soluta mollitia voluptates qui, corporis unde rerum ut. Odit quaerat vitae earum autem non sed deserunt, reiciendis laudantium a nihil labore asperiores ipsum aperiam inventore architecto voluptatum omnis explicabo minus? Quas quasi ea nemo aperiam quidem. Sunt laborum maxime unde provident ad asperiores iste eius tenetur veniam quasi eum, ratione blanditiis impedit sint minima sequi, explicabo consequuntur praesentium dolorum. Nobis, sed, provident nulla nesciunt, reiciendis quisquam distinctio ducimus incidunt qui a labore hic dolorum officia?
          </p>
          <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae porro alias architecto sequi exercitationem. Saepe nulla, earum omnis, labore dolore quaerat sunt neque amet soluta mollitia voluptates qui, corporis unde rerum ut. Odit quaerat vitae earum autem non sed deserunt, reiciendis laudantium a nihil labore asperiores ipsum aperiam inventore architecto voluptatum omnis explicabo minus? Quas quasi ea nemo aperiam quidem. Sunt laborum maxime unde provident ad asperiores iste eius tenetur veniam quasi eum, ratione blanditiis impedit sint minima sequi, explicabo consequuntur praesentium dolorum. Nobis, sed, provident nulla nesciunt, reiciendis quisquam distinctio ducimus incidunt qui a labore hic dolorum officia?
          </p>
          <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae porro alias architecto sequi exercitationem. Saepe nulla, earum omnis, labore dolore quaerat sunt neque amet soluta mollitia voluptates qui, corporis unde rerum ut. Odit quaerat vitae earum autem non sed deserunt, reiciendis laudantium a nihil labore asperiores ipsum aperiam inventore architecto voluptatum omnis explicabo minus? Quas quasi ea nemo aperiam quidem. Sunt laborum maxime unde provident ad asperiores iste eius tenetur veniam quasi eum, ratione blanditiis impedit sint minima sequi, explicabo consequuntur praesentium dolorum. Nobis, sed, provident nulla nesciunt, reiciendis quisquam distinctio ducimus incidunt qui a labore hic dolorum officia?
          </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About