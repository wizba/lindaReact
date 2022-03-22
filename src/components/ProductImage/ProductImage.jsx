import './ProductImage.scss'

const ProductImage = ({image}) => {
  return (
    <div className="image">
      <img src={image} alt="Product Image" />
    </div>
  )
}

export default ProductImage
