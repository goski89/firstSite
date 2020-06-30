import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Contact from '../pages/Contact'
import ErrorPage from '../pages/ErrorPage'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import ProductPageList from '../pages/ProductListPage'
import Product from '../pages/Product'

function Page(props) {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/products" exact component={ProductPageList}/>
                <Route path="/product/:id" exact component={Product}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/admin" exact component={Admin}/>
                <Route path="/login" exact component={Login}/>
                <Route exact component={ErrorPage}/>
            </Switch>
        </div>
    );
}

export default Page;