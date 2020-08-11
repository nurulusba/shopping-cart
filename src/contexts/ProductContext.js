import React, { createContext, useState } from 'react'

export const ProductContext = createContext();

function ProductContextProvider(props) {
    
     const [ products, setProducts ] = useState([
        {
            "id":   "1",
            "title":  "Nike Shoes 01",
            "src":  "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            "description":  "react js with context api",
            "content":  "Welcome To Our Brand New Shoe Collections",
            "price":  23,
            "colors":  [ "red", "black", "crimson", "teal" ],
            "count":  1
         },
         
         {
            "id":   "2",
            "title":  "Nike Shoes 02",
            "src":  "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
            "description":  "react js with context api",
            "content":  "Welcome To Our Brand New Shoe Collections",
            "price":  46,
            "colors":  [ "black", "crimson", "teal" ],
            "count":  2
         },


         {
            "id":   "3",
            "title":  "Nike Shoes 03",
            "src":  "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
            "description":  "react js with context api",
            "content":  "Welcome To Our Brand New Shoe Collections",
            "price":  67,
            "colors":  [ "red", "black", "teal" ],
            "count":  3
         },

         {
            "id":   "4",
            "title":  "Nike Shoes 04",
            "src":  "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
            "description":  "react js with context api",
            "content":  "Welcome To Our Brand New Shoe Collections",
            "price":  89,
            "colors":  [ "red", "black", "crimson" ],
            "count":  4
         },

         {
            "id":   "5",
            "title":  "Nike Shoes 05",
            "src":  "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
            "description":  "react js with context api",
            "content":  "Welcome To Our Brand New Shoe Collections",
            "price":  500,
            "colors":  [ "crimson", "teal" ],
            "count":  5
         },

         {
            "id":   "6",
            "title":  "Nike Shoes 06",
            "src":  "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
            "description":  "react js with context api",
            "content":  "Welcome To Our Brand New Shoe Collections",
            "price":  500,
            "colors":  [ "crimson", "teal", "red", "green" ],
            "count":  6
         },
         
        
         
 
     ])
    return (
       <ProductContext.Provider value={{ products}}>
          {props.children}
       </ProductContext.Provider> 
      
    )
}

export default ProductContextProvider
