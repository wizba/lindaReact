import React,{useEffect, useState} from 'react'

function Options(props) {
    const {options} = props;
    const [$max,setMax] =useState({symbol:'',value:0});
    const [$min,setMin] =useState({symbol:'',value:0});
    const [$maxValue,setMaxValue] =useState({symbol:'',value:0});
    const [$minValue,setMinValue] =useState({symbol:'',value:0});

    useEffect(() => {
        console.log('options', options)
        let _1080p_price=options['1080p']?.price?.value;
        let _1080p_symbol= options['1080p'].price.currency.symbol;
        setMax({symbol: _1080p_symbol,value:_1080p_price});
        
        let _1080p_price_min=options['battery_accessories']?.price?.value;
        let _1080p_symbol_min= options['battery_accessories'].price.currency.symbol;
        setMin({symbol:_1080p_symbol_min,value:_1080p_price_min});

        let _1080p_price_min_old=options['battery_accessories']?.old_price?.value;
        let _1080p_symbol_min_old= options['battery_accessories'].old_price.currency.symbol;

        setMinValue({symbol:_1080p_symbol_min_old,value:_1080p_price_min_old});

        let _1080p_price_max_old=options['1080p']?.old_price?.value;
        let _1080p_symbol_max_old= options['1080p'].old_price.currency.symbol;

        setMaxValue({symbol:_1080p_price_max_old,value:_1080p_symbol_max_old});

    
    },[]);
  return (
    <div>
        <div className='option-line py-3'>
          
          <div>
            <p><span className='text-orange r-78-50-r-895-31'><b>{$min.symbol} {$min.value} - {$max.symbol} {$max.value}</b></span> <span className='Options-regular-text option-regular-size mx-2'>/Option</span> <span> {Object.keys(options).length-1} Options</span><span className='Options-regular-text ml-2'>(Min.Order)</span></p>
          </div>
          <div>
            <p className='Options-regular-text cancel'>{$minValue.symbol} {$minValue.value} - {$maxValue.symbol} {$maxValue.value}</p>
          </div>
        </div>
    </div>
  )
}

export default Options;