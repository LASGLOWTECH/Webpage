import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header';

import Login from './components/login';
import Homepage from './components/Home';
import Dashboard from './components/dashboard';
import Footer from './components/Footer';
// import Userdetails from './components/userdetails';

import Userpage from './components/userpage';

const App=()=>{

  return (  <Router>
    <div className='apprender'>
    
      <Navbar/>
     

<div className='items'>
<Switch>
<Route exact path="/"> <Homepage/></Route>
    <Route path="/login"> <Login/>  </Route>
    <Route path="/dashboard"> <Dashboard/>  </Route>
        <Route path="/userpage"><Userpage /> </Route>
         
      </Switch>
 
    
</div>
<Footer/>

</div>

        </Router>

      
  
      
      
    
  );          
}

export default App;

