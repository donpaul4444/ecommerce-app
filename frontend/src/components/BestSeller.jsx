import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/shopContext'

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller,setBestSeller] = useState([])
  return (
    <div>
      
    </div>
  )
}

export default BestSeller
