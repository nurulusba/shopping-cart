import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import ProductContextProvider from './contexts/ProductContext'

function App() {
  return (
   
    <ProductContextProvider>
       <div className='app'>
         <Router>
           <Header />
           <Section />
         </Router>
        </div>
    </ProductContextProvider>
      
    
  
  );
}

export default App;
