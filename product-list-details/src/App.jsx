import React , {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import ProductDetails from './ProductDetails';

class App extends Component{
  state = {
		// name: 'product',
		// price: '$45',
		// description: '',
		// category: '',
    // page: 'product',
    products: [
			{
				name: 'First Product',
				description: '',
				price: '$45',
				category: '',
			},
			{
				name: 'second product',
				description: '',
				price: 'price',
				category: '',
			},
			{
				name: 'third product',
				description: '',
				price: 'price',
				category: '',
			},
		]
	}

	viewclicker = (pageName) => {
    this.setState({
    page: pageName,
    products: [
			{
        name: 'First Product',
        price: '$45',
				description: 'lorem ipsum doler 1',
				category: 'category 1',
			},
			{
        name: 'second Product',
        price: '$35',
				description: 'lorem ipsum doler 2',
				category: 'category 2',
			},
			{
        name: 'third Product',
        price: '$25',
        description: 'lorem ipsum doler 3',
				category: 'category 3',
			},
		] })
	}
    render (){
        return <div>
          <div className='Product-wrapper'>
            <div className="product-initial">
              <Product name={this.state.products[0].name} price={this.state.products[0].price}/>
              <button onClick={this.viewclicker}>view </button>
            </div>
            {this.state.page === 'product' ? "" : <ProductDetails description ={this.state.products[0].description} category={this.state.products[0].category}/>}
            
          </div>
          <div className='Product-wrapper'>
            <div className="product-initial">
              <Product name={this.state.products[1].name} price={this.state.products[1].price}/>
              <button onClick={this.viewclicker}>view </button>
            </div>
            {this.state.page === 'product' ? "" : <ProductDetails description ={this.state.products[1].description} category={this.state.products[1].category}/>}
            
          </div>
          <div className='Product-wrapper'>
            <div className="product-initial">
              <Product name={this.state.products[2].name} price={this.state.products[2].price}/>
              <button onClick={this.viewclicker}>view </button>
            </div>
            {this.state.page === 'product' ? <ProductDetails name ={this.state.products[2].name} category={this.state.products[2].price}/> : <ProductDetails description ={this.state.products[2].description} category={this.state.products[2].category}/>}
          </div>
        </div>
    }
}

export default App;
