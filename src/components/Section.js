import React from 'react'
import Products from './Products'
import DetailProduct from './DetailProduct'
import { Route } from 'react-router-dom'
import Home from './Home'

function Section() {
    return (
        <section>

            <Route path='/product' component={Products} exact />
            <Route path='/product/:id' component={DetailProduct}  />
            <Route path='/' component={Home} exact />
            <Route path='/home' component={Home} exact />

        </section>
    )
}

export default Section
