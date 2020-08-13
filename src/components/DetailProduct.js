import React, { useContext, useState, useEffect } from 'react'
import {ProductContext} from '../contexts/ProductContext'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import './css/Details.css'

function DetailProduct(props) {
    const { products } = useContext(ProductContext);
    const [ Product, setProduct ] = useState([]);
    console.log(products);

    const getProduct = () => {
        if(props.match.params.id) {
            let res = products;
            let data = res.filter(item => {
                return item.id === props.match.params.id
            })
            console.log(data);
            setProduct(data);
        }
    }
    useEffect(() => {
        getProduct()
    }, [products])

    return (
        <div className='main'>
           {
               Product.map(item => (
                   <div className='details' key={item.id}>
                       <img src={item.src} alt='' />
                       <div className='box'>
                           <div className='row'>
                              <h2>{item.title}</h2>
                              <span>${item.price}</span>
                            </div>
                            <Colors colors={item.colors} />

                            <p> {item.description} </p>
                            <p> {item.content} </p>
                             <Link to='/cart' className='cart'>
                               Add to cart
                             </Link>
                       </div>
                   </div>
               ))
           }
                 
        </div>
    );
}

export default DetailProduct
