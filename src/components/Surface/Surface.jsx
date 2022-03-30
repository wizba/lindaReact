import {BsExclamationCircle, BsEnvelope} from 'react-icons/bs'
import React from 'react';
import './Surface.scss';
import MyButton from '../MyButton/MyButton'
import { shareContext } from '../../shareData/shareData'

const Surface = ({shipping}) => {
  
  const {totalPrice,setTotalPrice} = React.useContext(shareContext);
  return (
    <div className="surface">
      <div className="surface__heading">
        <span className="left text-mute">
          Ship to{' '}
          <u>
            {shipping.method.country} by {shipping.method.title}
          </u>
        </span>

        <span className="right">
          {shipping.method.cost.currency.symbol +
            ' ' +
            totalPrice? totalPrice.toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,'):0.00}
        </span>
      </div>

      <div className="text-mute lead">
        <span>Leads Time {shipping.lead_time.value}</span>
        <BsExclamationCircle />
      </div>

      <div className="text-mute lead">
        <span>Shipping time {shipping.method.shipping_time.value}</span>
        <BsExclamationCircle />
      </div>

      <MyButton text={'Login to Purchase'} />
      <MyButton text={'Contact the Supplier'} Icon={BsEnvelope} outline />
    </div>
  )
}

export default Surface
