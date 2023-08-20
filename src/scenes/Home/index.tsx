import useMediaQuery from "@/hooks/useMediaQuery";
import { CurrentPage } from "@/shared/types"
import { motion } from "framer-motion";

type Props = {
  setCurrentPage: (value: CurrentPage) => void;
}

const Home = ({setCurrentPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      onViewportEnter={() => setCurrentPage(CurrentPage.Home)}
    >
      <div className="z-10 mt-32 md:basis-3/5">
        <motion.div className="md:-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}} 
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x:-50},
            visible: {opacity: 1, x: 0}
        }}>
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
              Name ko
            </div>
          </div>
          <p className="mt-8 text-xl">
            Fullstack Web Developer - Software Engineer - Web Designer - Frontend Web Developer - AI/ML
          </p>
        </motion.div >
      </div>
      <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
        picture ko
      </div>
    </motion.div>
    </section>
  )
}

export default Home