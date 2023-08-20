import Navbar from '@/scenes/Navbar'
import Home from '@/scenes/Home'
import Projects from '@/scenes/Projects'
import { CurrentPage } from './shared/types';
import { useEffect, useState } from "react";

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
      <Projects setCurrentPage={setCurrentPage} />
    </div>
  )
}
export default App