import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/ProductListPage.css'
const products = ['car', 'bike', 'motocycles']

class ProductListPage extends Component {
    list = products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))
    render() {
        return (
            <div className='products'>
                <h3>Lista produktów</h3>
                <div>
                    <ul>
                        {this.list}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProductListPage;