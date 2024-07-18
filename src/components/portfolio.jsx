
import { Container, Row, Col  } from "react-bootstrap";
import Portfolioitems from "./portfolioitems";


const Portfolio = () => {
 return (
<>
<section className="    ">
<div className='d-flex  agency1 justify-content-center  align-items-center flex-column '  style={{height:"100vh"}}>

<h3 className=" centertext text-left text-light display-4  fw-bolder px-4">PORTFOLIO</h3>

<h5 className="real centertext fw-bold py-1 ">Our previous Projects</h5>       
<div className='linesd   d-flex flex-row justify-content-md-start  justify-content-sm-start align-items-sm-center  px-4'>
                  <div className='dot bg-color mx-2 '></div>
                  <div className='dot bg-color mx-2'></div>
                  <div className='dot bg-color mx-2'></div>
                  <div className='dot2 bg-color mx-2'></div>

                </div>
</div>



</section>

<section className="portfolioarea">
<Container>

<Row className="py-4"> 
 

 {
Portfolioitems.map(items=>{
 return(
  <Col lg={6} className="py-3" key={items.id}>
  <div className=' folioimage d-flex py-5 w-100 justify-content-center flex-column align-items-center   rounded-2 ' style={{backgroundImage:`url(${items.picture})` , height:"60vh"}}>

  <h5 className="real fw-bold p- ">{items.title}</h5>
  
  
  <p className='  px-4 text-light centertext display-1 fs-6 text-normal  pt-4 '>{items.tech}</p>
  <div  className='py-2'>
  
  <a href={items.linkinfo} className="linkbtn text-decoration-none"><button className="  CTA2 px-2 py-1 fw-normal  "  > View site </button></a>
      
  
    </div>
  
  
  
  </div>
  </Col>
  
 )
})

 }
 

 
 
</Row>



</Container>
</section>
     </>
   );
}
 
export default Portfolio;