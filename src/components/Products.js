import React, { useContext } from 'react'
import {ProductContext} from '../contexts/ProductContext'
import {Link} from 'react-router-dom'
import './css/Products.css'

function Products() {
    const { products, addCart } = useContext(ProductContext);
    console.log(products)
    
    return (
        <div id='product'>
           { products.map(product => (
               <div className='card' key={product.id}>
                   <Link to={`/product/${product.id}`}>
                       <img src={product.src} alt='' />
                   </Link>
                   <div className='content'>
                       <h3>
                           <Link to={`/product/${product.id}`}>
                               {product.title}
                           </Link>
                       </h3>
                          <span>${product.price}</span>
                          <p>{product.description}</p>
                          <button onClick={() => addCart(product.id)}>Add to card</button>
                </div>
                </div>
           ))}
        </div>
    )
}

export default Products
