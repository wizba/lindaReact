import {useEffect, useState} from 'react'

import './ProductDetail.scss'
import Fetching from '../../components/Fetching/Fetching'
import Infobox from '../../components/Infobox/Infobox'
import Surface from '../../components/Surface/Surface'
import ProductImage from '../../components/ProductImage/ProductImage'
import { shareContext } from '../../shareData/shareData'

const ProductDetail = () => {
  const [product, setProduct] = useState()
  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`https://fe-assignment.vaimo.net`)
      const {product} = await response.json()
      setProduct(product)
    }
    fetchApi()
  }, [])

  return (
    <>
    <shareContext.Provider value={{totalPrice,setTotalPrice}}>
      {product ? (

        <div className="detail">
          <ProductImage image={product.gallery[0].main} />
          <Infobox product={product} />
          <Surface shipping={product.shipping} />
        </div>
      ) : (
        <Fetching />
      )}
      </shareContext.Provider>
    </>
    
  )
}

export default ProductDetail
