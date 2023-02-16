
import useFetch from "./useFetch";
import Profile from "./Profile";


const Dashboard = () => {



  const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs")
  

   return ( 
       <div className="home "> 

      {error & <div><p>{error}</p></div>}
{isLoading && <div>Loading....</div>}
{blogs && <Profile blogs={blogs} title={"All Blogs"}

     />

   }
    
       </div>
       
    );
   }

export default Dashboard;

 