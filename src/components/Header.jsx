import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Navbar = () => {
  const [navExpanded, setNavexpanded] = useState(false)
  const expandNav = () => { setNavexpanded(!navExpanded) }
  const navClose = () => { setNavexpanded(!navExpanded) }
  // const [isopen, setIsOpen] = useState(false)

  // const handleDropdown = () => { setIsOpen(!isopen) }
  return (

    <div className="navarea d-flex align-items-center">
      <Container>
        < div className='navs d-flex flex-row justify-content-between align-items-center'>
          <div className="navbrand ps-4 "><img src="Logograd.png" alt="i" className='navimg fs-6'></img> </div>

          <button class="navbar-toggler p-2 rounded-circle bg-color " type="button" >
            <span class="navbar-toggler-icon"><i class="menu-burger  secure fa fa-bars real "

              onClick={expandNav} aria-hidden="true" id="icon"></i></span>
          </button>

          <div className={navExpanded ? "clinks expanded" : 'clinks '} onClick={navClose}>

            <Link to="/">Home</Link>
            < a href='/#workings'>Services</a>
            < a href='/#testimonials'>Testimonials</a>
            <Link to="/Projects">Gallery</Link>
            <Link to="/About">About Us</Link>
            <Link to="/portfolio">Portfolio</Link>
            
            {/* <Link to="/" onClick={handleDropdown}>Pages
            
            {isopen && (<div className='absolute d-flex flex-column  '>
             <a href=''>home</a>
             <a href=''>home</a>
             
            </div>
                  
            )}</Link> */}




          </div>
          <buton className="rounded-3  cbtn  p-2 "> <Link className="text-decoration-none fw-bold text-dark" to="/login">Contact Us</Link></buton>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;