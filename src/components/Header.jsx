import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Portfolio from './PortfolioComponent';
import Blog from './Blog';
import Contact from './Contact';



const Header = () => {
  const [active, setActive] = useState("about")
  
  return (
    <div className="main-content">
      <Navbar 
      active={active}  setActive={setActive} 
      />
      <About active={active} />
      <Resume active={active} />
      <Portfolio active={active} />
      <Blog active={active} />
      <Contact active={active} />
    </div>

  )
}

export default Header;
