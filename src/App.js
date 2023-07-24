import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header';
import About from './components/About';
import ContactUs from './components/login';
import Homepage from './components/Home';
import Footer from './components/Footer';
import Portfolio from './components/portfolio';
import { ScaleLoader } from "react-spinners";
import ScrollTop from './components/scroll';
// import Userdetails from './components/userdetails';

import Userpage from './components/Projects';

const App=()=>{
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  
 
    
  }, [])

  return ( 
    <>
    
    {loading ?
    <div className='load-val bg-dark 
  d-flex flex-column justify-content-center align-items-center'
     style={{ height: '100vh', width: '100%' }}>

 
  <ScaleLoader color='#36d7b7' loading={loading} size='150'/>


     </div> :
    

    <Router>
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
  }
      
      
   

      
</>
      
      
    
  );          
}

export default App;

