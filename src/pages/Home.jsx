import { Header } from '../components/Header'
import { Modal } from '../components/Modal'
import { ProductsList } from '../components/ProductsList'

import emptyCart from '../assets/images/empty-cart.png'

import { api } from '../services/api'

import { useEffect, useState } from 'react'
import { ImageContainer } from '../components/fragments/ImageContainer'

export const Home = () => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [search, setSearch] = useState('')
	const [cart, setCart] = useState(0)
	const [isModal, setIsModal] = useState(false)
	const [cartList, setCartList] = useState([])

	useEffect(() => {
		setIsLoading(true);
		
		const getProducts = async () => {
			try {
				const response = await api.get('/products', {
					params: {
						name_like: search,
					}
				})
				setProducts(response.data);
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
			<Header callback={handleForm} cart={cart} setIsModal={setIsModal} />
			<ProductsList products={products} isLoading={isLoading} cart={cart} setCart={setCart} />
			{isModal ?
				<Modal setIsOpen={setIsModal} cartList={cartList}>
					{cartList.length === 0 ? 
					<ImageContainer src={emptyCart} alt='Imagem de um carrinho de compras vazio na cor roxa'/>
					: null	
					}
				</Modal>
			: null}
		</>
	)
}