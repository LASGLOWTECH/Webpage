import { useState } from "react";




const Login=()=> {
  const [title, setTitle]= useState('')
  const [message, setMessage]= useState('')
const [email, setEmail]= useState('')
const [Loading, setIsloading]= useState(false)




  
const handleSubmit=(e)=>{
  e.preventDefault();
  const blogs={title, message, email}
console.log(blogs);
  setIsloading(true);
 fetch("/", 
 {method:"POST",
 headers:{"Content-Type":"applicaion/json"},
  body:JSON.stringify(blogs)},
  
).then(()=>{
  console.log("posted")
  setIsloading(false);
})
  
}


    return ( 

<div className="container-fluid">


<div className=' first-row align-self-center'>

      <div className='first-col '>

    
      <img  className="vatar  " src='image2.jpeg' alt='avatar' ></img>
       </div>

     


      <div className=' second-col  '>

<form  action="./" onSubmit={handleSubmit} className='formally' >
<h3 className="welcome">Welcome!</h3>
<p>Enter details </p>


<div className="form-group">
 <label for="exampleFormControlInput"></label>
 <input type="text" 
 className="form-control" 
 id="exampleFormControlInput1"  
  name="Title" 
  placeholder="Title" 
  onChange={(e)=> setTitle(e.target.value)}
  value={title}
  ></input>

{/* text arae */}

<div class="form-group">
              <label for="exampleFormControlTextarea1"></label>
              <textarea class="form-control"   name="message" id="exampleFormControlTextarea1" placeholder="Message" cols=""
                rows="3" 
                onChange={(e)=>setMessage(e.target.value)}
                value={message}></textarea>
            </div>

{/* end of textarea */}

<div className="form-group">
  <label for="exampleFormControlInput"></label>
  <input type="email" className="form-control" 
  id="exampleFormControlInput1" 
  name="email" required placeholder="Email"
 
  onChange={(e)=>setEmail(e.target.value)}
  value={email}/>
</div>

 

   
</div>

<div className="form-group">

{!Loading &&  <button  className="btn btn-info mt-3 text-light">Login</button>}
{Loading &&<button  className="btn btn-info  text-light" disabled>Adding...</button>}
  </div>




</form>





      {/* end of formarea */}
      </div>
     

      </div>
     






</div>



     );
}
 
export default Login;