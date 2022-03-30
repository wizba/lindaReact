import React,{useEffect,useState} from 'react'
function Discount({discount}) {
    const [date, setDate] = React.useState({});



 const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(discount.end_date) - +new Date();
  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    return () => clearTimeout(timer);
  });
  return (
    <div className='my-3 option-regular-size'>
        <span className='text-orange option-regular-size'>{discount.amount} OFF</span> <span className='ml-4 mr-1 ' ><TimeIcon/></span>
        <span className='ml-2 text-mute'>Discount ends in </span> <span className='text-mute'> <i>{timeLeft.days}d:{timeLeft.hours}h:{timeLeft.minutes}m:{timeLeft.seconds}s</i></span>
    </div>
  )
}

export default Discount;

const TimeIcon =() =>{
    return(
        <img src ="../../../assets/Images/icons8-clock.png" width='16' height='16' alt=""/>
    )
}