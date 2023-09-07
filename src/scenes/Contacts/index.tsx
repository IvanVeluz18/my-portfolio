import { useForm } from "react-hook-form";
import { CurrentPage } from "@/shared/types"
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
    setCurrentPage: (value: CurrentPage) => void;
}

const ContactUs = ({setCurrentPage}: Props) => {

  const inputStyles = `mt-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e:any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
  <section id="contacts" className="mx-auto w-5/6 pt-24 pb-32">
    <motion.div
      onViewportEnter={() => setCurrentPage(CurrentPage.Contacts)}>
      {/*HEADER*/}
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
            <span className="text-primary-500">EMAIL ME</span>
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
      </motion.div>

      {/*FORM AND IMAGE*/}
      <div className="mt-1- justify-between gap-8 md:flex">
        <motion.div className="mt-10 basis-3/5 md:mt:0"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}} 
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
          }}>
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/58d1e0d69a247c93a250a56912c00a91"
              method="POST"
            >
              <input 
                className={inputStyles} 
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max Length is 100 characters."}
                  </p>
                )}

              <input 
                className={inputStyles} 
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                />
                {errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                  </p>
                )}

              <textarea 
                className={inputStyles}   
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
                />
                {errors.message && (
                  <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" && "This field is required."}
                    {errors.message.type === "maxLength" && "Max Length is 2000 characters."}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-300 hover:text-white"
                >
                  SUBMIT
                </button>
            </form>
        </motion.div>
        <motion.div className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}} 
          transition={{delay:0.2, duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
          }}>
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              img placeholder
            </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
  )
}

export default ContactUs
