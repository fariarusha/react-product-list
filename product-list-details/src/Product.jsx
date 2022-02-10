import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import ProductDetails from './ProductDetails';

class Product extends Component {
	// state = {
	// 	name: 'product',
	// 	price: '$45',
	// 	description: '',
	// 	category: ''
	// }

	// viewclicker = () => {
	// 	this.setState({ 
			
	// 		description: 'lorem ipsum doler',
	// 		category: 'cat test 1' })
	// }

	render() {
		return <div>
			<div className=''>
				<div>
					<h3>product name: {this.props.product.name}</h3>
					<p>product price: {this.props.product.price}</p>
					{/* <button onClick={this.viewclicker}>view </button> */}
				</div>
			</div>
		</div>
	}
}

export default Product;
