import {BsExclamationCircle, BsEnvelope} from 'react-icons/bs'

import './Surface.scss'
import MyButton from '../MyButton/MyButton'

const Surface = ({shipping}) => {
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
            shipping.method.cost.value
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
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
