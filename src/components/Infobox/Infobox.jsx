import './Infobox.scss'
import HeaderStatus from './HeaderStatus'
import Description from './Description'
import Shipping from './Shipping'
import Options from './Options'
import Discount from './Discount'
import OptionsCalc from './OptionsCalc'

const Infobox = ({product}) => {
  // destructure product
  const {discount, gallery, name, options, reviews, shipping, tags} = product
  console.log({discount, gallery, name, options, reviews, shipping, tags})
  return (
    <div className="infobox">
      <HeaderStatus shippingProps={shipping.props} />
      <Description name={name} tags={tags} reviews={reviews} />
      <Options options={options}/>
      <Shipping/>
      <Discount discount ={discount}/>
      <OptionsCalc options={options}/>
    </div>
  )
}

export default Infobox
