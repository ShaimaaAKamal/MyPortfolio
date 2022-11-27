import React from 'react'

export default function Heading() {
  return (
    <div className="container-lg px-sm-5">
    <div className=' py-3 d-flex justify-content-between align-items-center'>
          <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                  <path fill="#030303" d="M0 0h64v64H0z" />
                  <circle stroke="#FFF7F0" strokeWidth="4" cx="25" cy="25" r="11" />
              </g>
          </svg>
        <button className='mainBtn'>Free Consultation</button>
    </div>
    </div>
  )
}
