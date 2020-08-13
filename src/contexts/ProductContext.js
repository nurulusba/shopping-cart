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

     const [ cart, setCart ] = useState([]);
     const [ total, setTotal ] = useState(0);

 
   const addCart = (id) => {
        const check = cart.every(item => {
           return item.id !== id
        })
        if(check) {
         const data = products.filter(product => {
            return product.id === id
         })
        setCart([ ...cart, ...data ]);  
      }
      else {
         alert('The product has been added to cart')
      }
           
        }
        
      const reduction = id => {
        console.log(cart);
         cart.forEach(item => {
            if(item.id === id) {
              return item.count--
            }
         })
         setCart([...cart])


      }
 
      const increase = id => {
         console.log(cart);
         cart.forEach(item => {
            if(item.id === id) {
              return item.count++
            }
         })
         setCart([...cart])
     }
       
      const remove = id => {
         if(window.confirm('Do yo want to delete this product?')) {
            cart.forEach((item, index) => {
               if(item.id === id) {
                  cart.splice(index, 1)
               }
            })
            setCart([...cart])
            getTotal();
         }

      }

      const getTotal = () => {
         const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
         }, 0)
         setTotal(res)
      }

    return (
       <ProductContext.Provider value={{ products, addCart, cart, reduction, increase, remove, total, getTotal }}>
          {props.children}
       </ProductContext.Provider> 
      
    )
}

export default ProductContextProvider
