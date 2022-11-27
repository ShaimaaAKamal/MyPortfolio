import React from 'react'

export default function Appointment() {
  return (
     <div className='px-sm-5 container-lg py-4 '>
         <div className="p-5 bgBlack d-flex flex-column rounded-3 flex-md-row align-items-center justify-content-between">
        <div className='text-white text-center text-md-start contact'>
           <h5 className='mb-3 pb-1'>Book a call with me</h5>
           <p className='small mb-4 mb-md-0 px-4 px-md-0 fw-light contactParag' >I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
        </div>
        <div>
             <button className='secondaryBtn'>Free Consultation</button>
        </div>
      </div>
     </div>
  )
}
