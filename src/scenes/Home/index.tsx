import { CurrentPage } from "@/shared/types"
import { motion } from "framer-motion";
import portrait_gray from "@/assets/portrait_gray.png"
import CV from "@/assets/CV.pdf"

type Props = {
  setCurrentPage: (value: CurrentPage) => void;
}

const Home = ({setCurrentPage}: Props) => {
  return (
    <section id="home" className="gap-16 bg-white-100 py-24 md:h-full md:pb-0">
      <motion.div className="mx-auto w-4/6 items-center justify-center md:flex md:h-5/6 md:w-5/6"
      onViewportEnter={() => setCurrentPage(CurrentPage.Home)}>
        <motion.div className="items-center justify-center sm:ml-0"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}} 
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y:-50},
            visible: {opacity: 1, y: 0}
        }}>
          <img className="rounded-full md:z-10 md:ml-20 md:justify-items-center md:h-80 md:w-100%" src={portrait_gray} alt="" />
        </motion.div>
        <div className="z-10 mt-10 ml-0 md:mt-24 md:ml-0">
          <motion.div className="mx-auto w-6/6 items-center justify-center md:h-5/6 md:w-4/6 md:-mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}} 
            transition={{delay: 0.2, duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x:-50},
              visible: {opacity: 1, x: 0}
          }}>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                <h3 className="ml-4 py-3 text-2xl md:ml-0">Hello! I'm</h3>
                <h1 className="ml-4 text-4xl font-bold justify-center md:justify-normal md:text-5xl md:ml-0">John Ivan Veluz</h1>
              </div>
            </div>
          </motion.div >
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}} 
          transition={{delay: 0.4, duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x:-50},
            visible: {opacity: 1, x: 0}
          }}
          className="mx-auto w-6/6 items-center justify-normal md:h-5/6 md:w-4/6 sm:justify-center">
              <p className="mt-4 ml-4 text-2xl items-center justify-normal md:text-3xl md:ml-0">
                Fullstack Web Developer | Software Engineer | AI/ML
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once:true, amount: 0.5}} 
              transition={{delay: 0.5, duration: 0.5}}
              variants={{
                hidden: {opacity: 0, y:50},
                visible: {opacity: 1, y: 0}
              }}
            >
              <span className="mx-auto ml-0 space-x-2 flex items-center justify-center md:justify-normal md:ml-8">
                  <a href={CV}  download="CV">
                    <button type="submit"
                            className="mt-5 rounded-full bg-secondary-500 px-8 py-3 transition duration-300 hover:text-white">Download CV</button>
                  </a>
                  <a href="https://github.com/IvanVeluz18" target="blank">
                    <button type="submit" className="mt-5 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="58" height="58" viewBox="0 0 29 29">
                      <path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
                      </svg>
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/john-ivan-veluz-4179b3193/" target="_blank">
                    <button type="submit" className="mt-5 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="58" height="58" viewBox="0 0 45 45">
                      <path fill="#0078d4" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path d="M30,35v-9c0-1.103-0.897-2-2-2s-2,0.897-2,2v9h-6V18h6v1.027C27.04,18.359,28.252,18,29.5,18	c3.584,0,6.5,2.916,6.5,6.5V35H30z M13,35V18h2.966C14.247,18,13,16.738,13,14.999C13,13.261,14.267,12,16.011,12	c1.696,0,2.953,1.252,2.989,2.979C19,16.733,17.733,18,15.988,18H19v17H13z" opacity=".05"></path><path d="M30.5,34.5V26c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v8.5h-5v-16h5v1.534	c1.09-0.977,2.512-1.534,4-1.534c3.309,0,6,2.691,6,6v10H30.5z M13.5,34.5v-16h5v16H13.5z M15.966,17.5	c-1.429,0-2.466-1.052-2.466-2.501c0-1.448,1.056-2.499,2.511-2.499c1.436,0,2.459,1.023,2.489,2.489	c0,1.459-1.057,2.511-2.512,2.511H15.966z" opacity=".07"></path><path fill="#fff" d="M14,19h4v15h-4V19z M15.988,17h-0.022C14.772,17,14,16.11,14,14.999C14,13.864,14.796,13,16.011,13	c1.217,0,1.966,0.864,1.989,1.999C18,16.11,17.228,17,15.988,17z M35,24.5c0-3.038-2.462-5.5-5.5-5.5	c-1.862,0-3.505,0.928-4.5,2.344V19h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4C35,34,35,24.921,35,24.5z"></path>
                      </svg>
                    </button>
                  </a>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Home

/* For projects:
  - yung green na "My Projects" na ang pinakasection
  - yung "OtherProjects" na ang start ng project 1 similar sa pinaggagayahan
  - repeat for other projects pero ibahin ang kulay and try wag gawing 100% vh
  - gawan ng paraan yung colors
*/