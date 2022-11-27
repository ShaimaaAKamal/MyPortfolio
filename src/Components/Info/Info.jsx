import React from 'react';
import Image from '../../assets/image-amy.webp'

export default function 
() {
  return (
    <div className='row gy-4 gx-5 py-5 my-5 align-items-center' >
       <div className='col-md-6 col-xl-5 col-8 mx-auto'>
          <div>
             <img src={Image} alt="userImage" className='w-100'/>
           </div>
        </div>
        <div className='col-md-6 col-xl-6 offset-xl-1 col-10 mx-auto'>
            <div className='text-center text-md-start'>
                <h4 className='fHM'>I’m Amy, and I’d love to work on your next project</h4>
                <p className="small textGray mt-0 mb-3 py-2 pe-lg-5 me-lg-5">I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
                <button className='secondaryBtn'>Free Consultation</button>
             </div>
        </div>
    </div>
  )
}
