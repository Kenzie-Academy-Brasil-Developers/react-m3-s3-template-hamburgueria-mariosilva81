import { Header } from '../components/Header'
import { ProductsList } from '../components/ProductsList'

import { api } from '../services/api'

import { useEffect, useState } from 'react'

export const Home = () => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(true) 
	const [search, setSearch] = useState('')
	const [totalCart, setTotalCart] = useState(0)

	useEffect(() => {
		setIsLoading(true)
		
		const getProducts = async () => {
			try {
				const response = await api.get('/products', {
					params: {
						name_like: search,
					}
				})
				setProducts(response.data)
			} catch (error) {
				console.error(error)
			} finally {
				setIsLoading(false)
			}
		}
		getProducts()
	}, [search])

	const handleForm = (inputSearch) => {
		setSearch(inputSearch)
	}
	
  	return (
		<>
			<Header callback={handleForm} totalCart={totalCart} />
			<ProductsList products={products} isLoading={isLoading} totalCart={totalCart} setTotalCart={setTotalCart}/>
    	</>
  	)
}