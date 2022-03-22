import React from 'react'
import { format } from 'date-fns';
function Discount({discount}) {
    const [date, setDate] = React.useState({});

    React.useEffect(() => {
        const $date = new Date(discount.end_date);
        convbertDate($date);
    }, [discount]);

    const convbertDate = ($date) => {    
        let today = new Date();
var delta = Math.abs($date - today) / 1000;

// calculate (and subtract) whole days
var days = Math.floor(delta / 86400);
delta -= days * 86400;

// calculate (and subtract) whole hours
var hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;

// calculate (and subtract) whole minutes
var minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;

// what's left is seconds
var seconds = (delta % 60).toFixed(0);  // in theory the modulus is not required
         
      setDate({days:days,hours:hours,minutes:minutes,seconds:seconds})
 }
  return (
    <div className='my-3 option-regular-size'>
        <span className='text-orange option-regular-size'>{discount.amount} OFF</span> <span className='ml-4 mr-1 ' ><TimeIcon/></span>
        <span className='ml-2 text-mute'>Discount ends in </span> <span className='text-mute'> <i>{date.days}d:{date.hours}h:{date.minutes}m:{date.seconds}s</i></span>
    </div>
  )
}

export default Discount;

const TimeIcon =() =>{
    return(
        <img src ="../../../assets/Images/icons8-clock.png" width='16' height='16' alt=""/>
    )
}