import { Header } from '../components/Header'
import { ProductsList } from '../components/ProductsList'
import { notifyError } from '../hooks/Toast'
import { api } from '../services/api'
import { useEffect, useState } from 'react'

export const Home = () => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [search, setSearch] = useState('')
	const [isModal, setIsModal] = useState(false)
	const [counterCart, setCounterCart] = useState(0)

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

				if (response.data.length === 0) {
					notifyError('Nenhum produto encontrado. Pesquise novamente!')
					
				}
			} catch (error) {
				notifyError(error)
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
			<Header 
				callback={handleForm} 
				setIsModal={setIsModal} 
				counterCart={counterCart}
			/>
			<main>
				<ProductsList 
					products={products} 
					isLoading={isLoading} 
					isModal={isModal} 
					setIsModal={setIsModal} 
					counterCart={counterCart} 
					setCounterCart={setCounterCart}
				/>
			</main>
		</>
	)
}