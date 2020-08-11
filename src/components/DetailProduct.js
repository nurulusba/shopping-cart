import React, { useContext, useState, useEffect } from 'react'
import {ProductContext} from '../contexts/ProductContext'

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
        }
    }
    useEffect(() => {
        getProduct()
    }, [products])
    return (
        <div>
           { props.match.params.id}
        </div>
    );
}

export default DetailProduct
