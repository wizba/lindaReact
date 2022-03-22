import {BsCheckCircle, BsDashCircleDotted} from 'react-icons/bs'

const HeaderStatus = ({shippingProps}) => {
  // destructure shipping props
  const {ready_to_ship, in_stock, fast_dispatch} = shippingProps

  return (
    <div className="headerstatus">
      <div className="headerstatus__left">
        {ready_to_ship ? 'Ready to Ship' : 'Not Ready'}
      </div>
      <div className="headerstatus__center bg-orange-50 text-orange">
        {in_stock ? (
          <>
            <BsCheckCircle /> In Stock
          </>
        ) : (
          <>
            <BsDashCircleDotted /> No Stock
          </>
        )}
      </div>
      {fast_dispatch && (
        <div className="headerstatus__right bg-orange-50 text-orange">
          <BsCheckCircle /> Fast Dispatch
        </div>
      )}
    </div>
  )
}

export default HeaderStatus
