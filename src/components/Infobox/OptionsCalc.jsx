import React,{useEffect,useState} from 'react'
import { shareContext } from '../../shareData/shareData';

function OptionsCalc({options}) {
    const [optionsArr,setOptionsAray] =useState([]);
    const [$options,setOptions] =useState({});
    const [countItem,setCountItem] =useState([]);
    const [increments,setIncrements] =useState([]);

    const [inrementing,setIncrementing] =useState([]);
    const [total,setTotal] = useState(0);
    const [selected,setSelected] = useState({option:'',index:0});
    const {totalPrice,setTotalPrice} = React.useContext(shareContext);

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
        
        let multi = countItem[index] === 0 ? 0 : 1;
        currentCost = currentCost + multi*increments[index];
        let newOptions = {...$options};
        newOptions[option].price.value = currentCost;
        let newCount = [...countItem];
         newCount[index] = newCount[index] + 1;
        setCountItem([...newCount]);
        setOptions(newOptions);
        let newIncrementing = [...inrementing];
        newIncrementing[index] = true;
        setIncrementing([...newIncrementing])

        
        calculateTotal(increments[index],1);
       
    }

    const removeFromCart = (option,index)=>{
        let currentCost = $options[option].price.value;
       

        currentCost = currentCost - increments[index];
        if(currentCost < increments[index]){
            currentCost = increments[index];
        }
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

        setSelected({option,index});
        calculateTotal(increments[index],-1);
    }
  
    const calculateTotal = (amount,multiplier)=>{
        let $total = totalPrice;
        $total = $total + multiplier*amount;
        if($total < 0){
            $total = 0;
        }
        setTotalPrice($total);

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

export default OptionsCalc;