import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const[navExpanded, setNavexpanded]= useState(false)
  const expandNav=()=>{
    
    setNavexpanded(!navExpanded)

  }

const hideNav=()=>{
  setNavexpanded(navExpanded)
 
  
}
// window click hide nav

  window.addEventListener("click", hideNav)
    return (  
      
        <div className="navarea">

         <div className="navbrand"><img src="logo.svg"  alt="i"></img> </div> 
       
         <button class="navbar-toggler  "  type="button" >
         <span class="navbar-toggler-icon"><i class="menu-burger fa fa-bars text-info "  
         
         
           onClick={expandNav}  aria-hidden="true" id="icon"></i></span>
       </button>
       
       <div className= {navExpanded? "clinks expanded" : 'clinks '  }>
        
       <Link to="/">Home</Link> 
         <Link to="/login">Contact</Link>
        
         <Link to="/userpage">Projects</Link>
         < a href='/#About'>About</a>
        </div>  
           </div>  );
}
 
export default Navbar;