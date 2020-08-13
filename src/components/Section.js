import React from 'react'
import Products from './Products'
import DetailProduct from './DetailProduct'
import { Route } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Payment from './Payment'

function Section() {
    return (
        <section>

            <Route path='/product' component={Products} exact />
            <Route path='/product/:id' component={DetailProduct}  />
            <Route path='/' component={Home} exact />
            <Route path='/home' component={Home} exact />
            <Route path='/cart' component={Cart} />
            <Route path='/payment' component={Payment} />
        </section>
    )
}

export default Section
