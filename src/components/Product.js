import React from 'react';

function Product(props) {
    return (
        <article className="product">
                <h1>Nazwa: {props.id}</h1>
            </article>
    );
}

export default Product;