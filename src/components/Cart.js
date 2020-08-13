import React, { useContext, useState, useEffect } from 'react'
import {ProductContext} from '../contexts/ProductContext'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import './css/Cart.css'


function Cart() {
    const { cart, reduction, increase, remove, total, getTotal } = useContext(ProductContext);

    
useEffect(() => getTotal)


    return (
      cart.length ? (
        <div>
        {
            cart.map(item => (
                <div className='details' key={item.id}>
                    <img src={item.src} alt='' />
                    <div className='box'>
                        <div className='row'>
                           <h2>{item.title}</h2>
                           <span>${item.price * item.count}</span>
                         </div>
                         <Colors colors={item.colors} />

                         <p> {item.description} </p>
                         <p> {item.content} </p>
                        <div className='amount'>
                            <button className='count' onClick={() => reduction(item.id)}> - </button>
                            <span> {item.count} </span>
                            <button className='count' onClick={() => increase(item.id)}> + </button>

                        </div>
                    </div>
                    <div className='delete' onClick={() => remove(item.id)}>
                        X
                    </div>
                </div>
            ))
        }
        <div className='total'>
                     <Link to='/payment'>Payment</Link>
                     <h3> Total: ${total} </h3>
                 </div>
     </div>

      ) : <h2 style={{textAlign: 'center'}}> Nothings Product </h2>

        

    )
}

export default Cart
