import React,{useEffect,useState} from 'react'

function OptionsCalc({options}) {
    const [optionsArr,setOptionsAray] =useState([]);
    const [$options,setOptions] =useState({});
    const [countItem,setCountItem] =useState([]);
    const [increments,setIncrements] =useState([]);

    const [inrementing,setIncrementing] =useState([]);

    useEffect(() => {
       
        let opA = Object.keys(options);
        setOptionsAray(opA);
        setOptions({...options});

        let inc = [];
        let cnt = [];
        let inmt =[];
        Object.keys(options).forEach(element => {

            inc.push(options[element].price.value)
            cnt.push(0);
            inmt.push(false);
            


        })
            setIncrementing([...inmt]);
            setCountItem([...cnt]);
            setIncrements([...inc]);
            

    },[]);

    const addToCart = (option,index)=>{
        let currentCost = $options[option].price.value;
        

        currentCost = currentCost + increments[index];
        let newOptions = {...$options};
        newOptions[option].price.value = currentCost;
        let newCount = [...countItem];
         newCount[index] = newCount[index] + 1;
        setCountItem([...newCount]);
        setOptions(newOptions);
        let newIncrementing = [...inrementing];
        newIncrementing[index] = true;
        setIncrementing([...newIncrementing])
    }

    const removeFromCart = (option,index)=>{
        let currentCost = $options[option].price.value;
       

        currentCost = currentCost - increments[index];
        let newOptions = {...$options};
        newOptions[option].price.value = currentCost;
        let newCount = [...countItem];
        newCount[index] = newCount[index] - 1;
        if(newCount[index]<0){
            return;
        }
        setCountItem(newCount);
        setOptions(newOptions);
        let newIncrementing = [...inrementing];
        newIncrementing[index] = false;

        setIncrementing([...newIncrementing])
    }
  return (<>  
                <div className='flex-container'>
                <div style={{width:'30%'}} className="mt-2">
                    Options:
                </div>
                <div style={{width:'70%'}}> 
                { optionsArr.map((option,index) =>{ 
                    return (
                <div className='flex-container space-between' style={{width:'100%'}}>
                    <div className="flex-container space-between align-items-center" style={{width:'60%'}} >
                        <span >{$options[option].label}</span>
                        <span>{$options[option].price.currency.symbol} {$options[option].price.value.toFixed(2)}</span>
                    </div>
                    <div className="flex-container flex-end option-regular-size mb-3" >
                        <button className={`  flex-container align-items-center center text-mute option-regular-size ${!inrementing[index]?'text-orange  __foreground':'text-mute __foreground2'}`}  onClick={()=>removeFromCart(option,index)}>-</button>
                        <div className=' __foreground2 flex-container align-items-center border-rl center text-mute  option-regular-size'>{countItem[index]}</div>
                        <button className={` flex-container align-items-center center option-regular-size  ${inrementing[index]?'text-orange  __foreground':'text-mute __foreground2'}`} onClick={()=>addToCart(option,index)}>+</button>
                    </div>
                </div>)
                })}
                </div>
             
                
            </div>
    
    

    </>

  )
}

export default OptionsCalc