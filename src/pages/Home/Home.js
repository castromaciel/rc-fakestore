import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useProducts } from '../../hooks/useProducts'

const Home = () => {
  const { deleteProduct, products, isLoading } = useProducts()

  return (
    <div className='mt-3 d-flex justify-content-center flex-wrap gap-3'>
      {
        isLoading
          ? <h3 className='mt-5 text-white'> Cargando productos... </h3>
          : products.map((product, index) => (
            <ProductCard key={index} {...product} deleteProduct={deleteProduct}/>
          ))
      }
    </div>
  )
}

export default Home
