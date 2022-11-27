import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';


export default function Work({images}) {
const arrowLeft=`<span class='arrow'><svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="#FFF" d="M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.121-5.12z"/></svg></span>`
const arrowRight=`<span class='arrow'><svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="#FFF" d="m6.808 16 8-8-8-8-1.687 1.687 5.121 5.12H.001v2.386h10.241l-5.121 5.12z"/></svg></span>`
const options = {
    margin:20,
    responsiveClass: true,
    loop:true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [arrowLeft, arrowRight],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1.5,
        },
        992: {
            items: 3,
        }
    },
};
  return (  
    <div>  
      <div className='container-fluid' >      
           <div className="row">      
           <div className="col-sm-12 text-center fHS mb-4">      
                  My Work           
          </div>      
           </div>  
       </div>  
       <div className='container-fluid px-0' >            
        <OwlCarousel className="owl-theme" {...options}>  
        {
            images.map((image,index) =>   <div key={index}><img  className="img rounded-2" alt={`image${index+1}`} src= {image}/></div>)
        }
            

      </OwlCarousel>  
      </div>  
    </div>  
    )  
}
