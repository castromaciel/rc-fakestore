import { useCallback, useEffect, useState } from "react";
import { filterById } from "../helpers/filterById";
import { getProducts } from "../services/getProducts";

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadProducts = useCallback(async () => {
    try {
      setIsLoading(true)
      const data = await getProducts()
      setProducts(data)

    } catch (error) {
      setProducts([])
      setError(error)

    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadProducts()
  }, [])

  const deleteProduct = (event) => {
    const id = Number(event.target.id)
    const newProducts = filterById(products, id)
    setProducts(newProducts)
  }

  return {
    isLoading,
    error,
    deleteProduct,
    products
  }
}
