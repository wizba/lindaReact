import Rating from 'react-rating'
import {BsStarFill, BsStar} from 'react-icons/bs'

// pass readonly={true} as a prop to stop user from ranting
// this component inherite all it parent css (made it this way so that it can be able to switch color etc..)

const StarRating = (props) => (
  <Rating emptySymbol={<BsStar />} fullSymbol={<BsStarFill />} {...props} />
)

export default StarRating
