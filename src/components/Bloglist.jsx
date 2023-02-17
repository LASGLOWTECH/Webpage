

const Bloglist = ({blogs, title}) => {




    return ( 
        <div className="boda" >
   <h1>{title}</h1>
{blogs.map(blog=>(
    <div className="black" key={blog.id}>
        <h5>{blog.title}</h5>
        <h2>{blog.username}</h2>
    <h1>{blog.email}</h1>
    </div>
))}


        </div>
     );
}
 
export default Bloglist;