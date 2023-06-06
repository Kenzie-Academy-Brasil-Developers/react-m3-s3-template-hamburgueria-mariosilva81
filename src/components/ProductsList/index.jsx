import { Product } from './Product'

import { StyledProductsList } from './style'

export const ProductsList = ({ products, isLoading }) => {
    if (isLoading) {
		return <div>Loading...</div> 
	}

    return (
        <StyledProductsList>
            {products.map((product) => <Product key={product.id} product={product} />)}
        </StyledProductsList>
    )
}