import Navbar from '@/scenes/Navbar'
import Home from '@/scenes/Home'
import About from './scenes/About'
import Projects from '@/scenes/Projects'
import Contacts from '@/scenes/Contacts'
import Footer from '@/scenes/Footer'
import { CurrentPage } from './shared/types';
import { useEffect, useState } from "react";



{/*
*CHANGE MAIN PAGE STYLE
*ADD TECHONOLOGIES AND SKILLS
*IMPROVE UI
*CHANGE THE MAIN PROJECTS SECTION
** OPTIONAL
* DARK AND LIGHT MODE
* EVEN BETTER ANIMATIONS AND TRANSITIONS
* CASE STUDY OR NEW STUFF
*/}

const App = () => {

  const [currentPage, setCurrentPage]= useState<CurrentPage>(
    CurrentPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setCurrentPage(CurrentPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} 
      />
      <Home setCurrentPage={setCurrentPage} />
      <About setCurrentPage={setCurrentPage} />
      <Projects setCurrentPage={setCurrentPage} />
      <Contacts setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  )
}
export default App