import React, { Component, useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
// import ProductDetails from './ProductDetails';
import CustomLoader from './CustomLoader';
import Product from './Product';
import ProductDetails from './ProductDetails';

class App extends Component {
 
 
  state = {
    showElement : 'false',
    loading: 'false',
    timer: 0,
    products: [
      {
        name: 'First Product',
        description: '',
        price: '$45',
        category: '',
      },
      {
        name: 'second product',
        description: 'dfgdgf',
        price: 'price',
        category: '',
      },
      {
        name: 'third product',
        description: '',
        price: 'price',
        category: '',
      },
    ],
    productDetails:{
      name: 'third product',
      description: 'lorem sim',
      price: 'price',
      category: '1',
    }
  }



viewclicker=(event)=>{
  const index = event.target.value;
  const detailsProduct = this.state.products[index];
  this.setState({
    showElement : 'true',
    loading: 'true',
    productDetails:detailsProduct
  })
}
componentDidUpdate() {
  // loading: 'false'
  // let loading = 0;
  // this.state.loading = setTimeout(() => console.log('Hello, World!'), 3000)
}

  render() {
    return <div>
      {this.state.products.map((product, index) =>
        <div className='Product-wrapper'>
          <div className="product-initial">
            <Product product={product} />
            <button value={index} onClick={this.viewclicker}>view </button>
          </div>
        </div>
      )}
      <div className='right-side'>
     {this.state.showElement ? <ProductDetails product={this.state.productDetails} /> :  <Product product={this.state.product} />}
      </div>
    </div>
  }
}

export default App;
