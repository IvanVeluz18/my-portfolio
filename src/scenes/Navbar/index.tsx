import { useState } from "react";
import {CurrentPage} from '@/shared/types'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  isTopOfPage: boolean;
  currentPage: CurrentPage;
  setCurrentPage: (value: CurrentPage) => void;
}

const Navbar = ({isTopOfPage, currentPage, setCurrentPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>

        {/*Left side*/}
        <div  className={`${flexBetween} mx-auto w-5/6 md:w-4/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <div className={`w-full gap-16 basis-3/5 font-montserrat text-2xl font-bold`}>
                <a href=" ">Ivan{""}<span className="text-primary-500">Veluz</span></a>
                {/* <a href=""><img src={icon} alt="" className="l-auto w-5" /></a> */}
            </div>

            {/*Right side*/}
            <div>
            {isAboveMediumScreens ? (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-md`}>
                    <Link
                      page="Home"
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                    <Link
                      page="About"
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                    <Link
                      page="Projects"
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                    <Link
                      page="Contacts"
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  </div>
                </div>
              ) : (
                <button
                  className="rounded-full bg-primary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              )}
          </div>
        </div>
      </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[280px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end py-8 pr-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-xl">
            <Link
              page="Home"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="About"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Projects"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Contacts"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar