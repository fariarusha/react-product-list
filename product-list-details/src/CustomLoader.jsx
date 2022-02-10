import React , {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import ProductDetails from './ProductDetails';

class CustomLoader extends Component{
    
    render (){
        return <div>
            <div className="spinner-box">
                <div className="three-quarter-spinner"></div>
            </div>
        </div>
    }
}

export default CustomLoader;
