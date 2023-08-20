import { CurrentPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "framer-motion";

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity: 1, scale: 1}
};

type Props = {
  icon: string;
  title: string;
  description: string;
  setCurrentPage: (value: CurrentPage) => void;
};

const ProjectContainer = ({icon, title, description, setCurrentPage}: Props) => {
  return (
  <motion.div 
    variants={childVariant}
    className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
    <div className="mb-4 flex justify-center">
      <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
        icon placeholder
      </div>
    </div>
    <h4 className="font-bold">{title}</h4>
    <p className="my-3">{description}</p>
    <AnchorLink
    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setCurrentPage(CurrentPage.Projects)}
            href={`#${CurrentPage.Projects}`}
    >
      <p>Learn More</p>
    </AnchorLink>
  </motion.div>
  )
}

export default ProjectContainer