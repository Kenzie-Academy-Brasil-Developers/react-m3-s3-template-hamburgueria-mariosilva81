import { Product } from './Product'

import { StyledProductsList } from './style'

export const ProductsList = ({ products, isLoading, totalCart, setTotalCart }) => {
    if (isLoading) {
		return <div>Loading...</div> 
	}

    return (
        <StyledProductsList>
            {products.map((product) => <Product key={product.id} product={product} totalCart={totalCart} setTotalCart={setTotalCart}/>)}
        </StyledProductsList>
    )
}