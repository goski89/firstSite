import React from 'react';
import {Link} from 'react-router-dom'
import Product from '../components/Product'

function Products(props) {
    return (
        <div>
            <div>Strona produktu</div>

            <Product id={props.match.params.id}/>
            <Link to='/products'>Powrót do listy produktów</Link>
        </div>
    );
}

export default Products;