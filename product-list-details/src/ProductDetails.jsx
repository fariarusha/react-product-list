import React , {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class ProductDetails extends Component{
    
    render (){
        return <div>
            <h3 className='hide-element'>product details</h3>
            <p>{this.props.description}</p>
            <p>{this.props.category}</p>
        </div>
    }
}

export default ProductDetails;
