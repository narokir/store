import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data.js';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
	state = {
		products:storeProducts,
		detailProduct:detailProduct
	}
	hadleDetail = () =>{
		console.log('Hello from Detail');
	}
	addToCart = () =>{
		console.log('Hello from add to cart');
	}

	render() {
		return (
			<ProductContext.Provider value={{
				...this.state,
				handleDetail:this.handleDetail,
				addToCart:this.addToCart
			}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer };