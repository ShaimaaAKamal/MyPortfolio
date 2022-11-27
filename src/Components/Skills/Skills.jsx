import React from 'react'

export default function Skills() {
  return (
    <div className='row g-3 py-3'>
      <div className='col-md-6 col-xl-4 '>
          <div className='bgPurple text-end rounded-2 p-4 Graphic position-relative'>
            <svg width="128" height="192" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
              <path fill="#552049" d="M0 0h64v128H0z" />
              <circle stroke="#FFF7F0" stroke-width="4" cx="32" cy="32" r="14" />
              <g transform="translate(32 32)">
                <rect fill="#F6A560" x="32" width="64" height="32" rx="16" />
                <path fill="#61C4B7" d="m0 128 32 32v-32zM32 96l32 32V96z" />
                <circle stroke="#FFF7F0" stroke-width="4" cx="80" cy="16" r="14" />
                <circle stroke="#FFF7F0" stroke-width="4" cx="80" cy="16" r="14" /></g>
              <g fill="#030303"><path d="M64 14h4v4h-4zM68 14h4v4h-4zM92 14h4v4h-4z" /></g>
              <path fill="#755CDE" d="m96 0 32 32V0z" />
              <g fill="#030303"><path d="M96 14h4v4h-4zM120 14h4v4h-4zM124 14h4v4h-4z" />
              </g><circle stroke="#030303" stroke-width="4" cx="80" cy="80" r="14" /><path fill="#EB7565" d="M96 64h32v32H96z" /><path fill="#FFF7F0" d="m32 96 96 96V96z" /><g fill="#030303"><path d="M0 128h4v4H0zM14 128h4v4h-4zM28 128h4v4h-4zM0 142h4v4H0zM14 142h4v4h-4zM28 142h4v4h-4z" /><g><path d="M0 156h4v4H0zM14 156h4v4h-4zM28 156h4v4h-4z" /></g></g></g>
            </svg>
            <h5 className='textBg text-start pb-md-4 pt-5 pt-md-0 mt-3 mt-md-0'>Graphic Design</h5>
          </div>
      </div>
       <div className='col-md-6 col-xl-4'>
         <div className='row g-3'>
          <div className="col-6">
            <div className='bgOrange text-end rounded-2 p-4 pb-2'>
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle stroke="#030303" stroke-width="4" cx="48" cy="16" r="14" /><path fill="#EB7565" d="M0 0h32v32H0z" /><g fill="#030303"><path d="M0 32h4v4H0zM14 32h4v4h-4zM28 32h4v4h-4zM0 46h4v4H0zM14 46h4v4h-4zM28 46h4v4h-4z" /><g><path d="M0 60h4v4H0zM14 60h4v4h-4zM28 60h4v4h-4z" /></g></g>
                <path fill="#FFF7F0" d="m32 32 32 32V32z" /></g></svg>
            <h5 className='textBg pt-5 text-start mt-2'>UI/UX</h5>
            </div>
          </div> 
          <div className="col-6">
            <div className='bgPink text-end rounded-2 p-4 pb-2'>
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(0 32)"><rect fill="#552049" width="64" height="32" rx="16" /><circle stroke="#FFF7F0" stroke-width="4" cx="48" cy="16" r="14" /></g><g fill="#030303"><path d="M0 14h4v4H0zM4 14h4v4H4zM28 14h4v4h-4z" /></g><path fill="#755CDE" d="m32 0 32 32V0z" /><g fill="#030303">
                <path d="M32 14h4v4h-4zM56 14h4v4h-4zM60 14h4v4h-4z" /></g></g></svg>
                <h5 className='textBg pt-5 text-start mt-2'>Apps</h5>
            </div>
          </div> 
          <div className="col-12">
            <div className='bgRed text-end rounded-2 p-4 pb-2'>    
              <svg width="128" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(64)"><circle stroke="#FFF7F0" stroke-width="4" cx="48" cy="16" r="14" /><path fill="#755CDE" d="M0 0h32v32H0z" /><g fill="#030303"><path d="M32 32h4v4h-4zM46 32h4v4h-4zM60 32h4v4h-4zM32 46h4v4h-4zM46 46h4v4h-4zM60 46h4v4h-4z" /><g><path d="M32 60h4v4h-4zM46 60h4v4h-4zM60 60h4v4h-4z" /></g></g><path fill="#F39E9E" d="m0 32 32 32V32z" /></g><g fill="#030303"><path d="M32 32h4v4h-4zM46 32h4v4h-4zM60 32h4v4h-4zM32 56h4v4h-4zM46 56h4v4h-4zM60 56h4v4h-4z" /><g><path d="M32 60h4v4h-4zM46 60h4v4h-4zM60 60h4v4h-4z" /></g></g><g fill="#030303"><path d="M32 0h4v4h-4zM46 0h4v4h-4zM60 0h4v4h-4zM32 4h4v4h-4zM46 4h4v4h-4zM60 4h4v4h-4z" /><g><path d="M32 28h4v4h-4zM46 28h4v4h-4zM60 28h4v4h-4z" /></g></g><path fill="#61C4B7" d="m0 32 32 32V32z" />
                <path fill="#FFF7F0" d="M32 0 0 32V0z" /></g></svg>
                <h5 className='textBg pt-5 text-start mt-2'>Illustrations</h5>

            </div>
            
          </div> 
          </div>
      </div>
      <div className='col-md-12 col-xl-4'>
         <div className='row g-3'>
            <div className='col-xl-12 col-md-6 col-12'>
            <div className='bgGreen text-end rounded-2 p-4 pb-2' >
              <svg width="160" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#EB7565" d="M32 0h64v64H32z" /><circle stroke="#030303" stroke-width="4" cx="16" cy="16" r="14" /><circle stroke="#FFF7F0" stroke-width="4" cx="64" cy="32" r="14" /><g fill="#030303"><path d="M128 32h4v4h-4zM142 32h4v4h-4zM156 32h4v4h-4zM128 56h4v4h-4zM142 56h4v4h-4zM156 56h4v4h-4z" /><g><path d="M128 60h4v4h-4zM142 60h4v4h-4zM156 60h4v4h-4z" /></g></g><g fill="#030303"><path d="M128 0h4v4h-4zM142 0h4v4h-4zM156 0h4v4h-4zM128 4h4v4h-4zM142 4h4v4h-4zM156 4h4v4h-4z" /><g><path d="M128 28h4v4h-4zM142 28h4v4h-4zM156 28h4v4h-4z" /></g></g><path fill="#FFF7F0" d="m96 32 32 32V32z" /><path fill="#552049" d="m96 32 32 32V32z" />
                <path fill="#F39E9E" d="M32 64 0 32v32z" /><path fill="#FFF7F0" d="m96 32 32-32v32z" /></g>
              </svg>
                    <h5 className='textBg pt-5 text-start mt-2'>Photography</h5>
                </div>
           </div>
           <div className='col-xl-12 col-md-6 col-12'>
            <div className='bgViolet text-end rounded-2 p-4 pb-2'>
              <svg width="128" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle stroke="#F39E9E" stroke-width="4" cx="80" cy="16" r="14" /><circle stroke-opacity=".5" stroke="#F39E9E" stroke-width="4" cx="48" cy="16" r="14" /><circle stroke-opacity=".25" stroke="#F39E9E" stroke-width="4" cx="16" cy="16" r="14" /><circle stroke="#FFF7F0" stroke-width="4" cx="112" cy="16" r="14" /><path fill="#F39E9E" d="M128 64 96 32v32z" /><rect fill="#F6A560" x="32" y="32" width="64" height="32" rx="16" />
                <path d="M0 50v-4h8v4H0Zm28 0v-4h8v4h-8Zm28 0v-4h8v4h-8Z" fill="#FFF7F0" /></g></svg>
                    <h5 className='textBg pt-5 text-start mt-2'>Motion Graphics</h5>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
