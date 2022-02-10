import React , {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class ProductDetails extends Component{
    
    render (){
        return <div>
            <h3 className='hide-element'>product details here </h3>
            <p>{this.props.product.name}</p>
            <p>{this.props.product.price}</p>
            <p>{this.props.product.description}</p>
            <p>{this.props.product.category}</p>
        </div>
    }
}

export default ProductDetails;
