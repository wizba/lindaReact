import React from 'react'

function Shipping() {
  return (
    <div>
      <div className='mt-3 bg-orange-50 text-orange flex-container align-items-center'>
        <img className='logo mr-3' src="../../../assets/Images/expo.png" alt="no image"></img>
        <span className='mr-3'><Point/></span><span className='mr-3 mt-1'>Free shipping (up to $40)</span>
        <span  className='mr-3'><Point/></span><span className='mt-1'>On-time delivery guaranteed</span>
      </div>
      
    </div>
  )
}

export default Shipping;

const Point =()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
  )
}