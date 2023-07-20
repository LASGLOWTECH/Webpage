import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header';
import About from './components/About';
import ContactUs from './components/login';
import Homepage from './components/Home';
import Footer from './components/Footer';
import Portfolio from './components/portfolio';
import ScrollTop from './components/scroll';
// import Userdetails from './components/userdetails';

import Userpage from './components/Projects';

const App=()=>{

  return (  <Router>
    <div className='apprender'>
    
      <Navbar/>
     
<ScrollTop/>
<div className='items'>
<Switch>
<Route exact path="/"> <Homepage/></Route>
<Route path="/login"> <ContactUs/>  </Route>
<Route path="/portfolio"><Portfolio /> </Route>
 <Route path="/Projects"><Userpage /> </Route>
<Route  path="/"> <About/></Route>

        
      </Switch>
 
    
</div>
<Footer/>

</div>

        </Router>

      
  
      
      
    
  );          
}

export default App;

