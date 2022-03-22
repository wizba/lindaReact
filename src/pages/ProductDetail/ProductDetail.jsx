import {useEffect, useState} from 'react'

import './ProductDetail.scss'
import Fetching from '../../components/Fetching/Fetching'
import Infobox from '../../components/Infobox/Infobox'
import Surface from '../../components/Surface/Surface'
import ProductImage from '../../components/ProductImage/ProductImage'

const ProductDetail = () => {
  const [product, setProduct] = useState()

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`https://fe-assignment.vaimo.net`)
      const {product} = await response.json()
      setProduct(product)
      console.log('the product is ',product);
    }
    fetchApi()
  }, [])

  return (
    <>
      {product ? (
        <div className="detail">
          <ProductImage image={product.gallery[0].main} />
          <Infobox product={product} />
          <Surface shipping={product.shipping} />
        </div>
      ) : (
        <Fetching />
      )}
    </>
  )
}

export default ProductDetail
