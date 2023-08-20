import useMediaQuery from "@/hooks/useMediaQuery";
import { CurrentPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setCurrentPage: (value: CurrentPage) => void;
}

const Home = ({setCurrentPage}: Props) => {

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      onViewportEnter={() => setCurrentPage(CurrentPage.Home)}
    >
      <div>
        <div>
        </div>
      </div>
    </motion.div>
    </section>
  )
}

export default Home