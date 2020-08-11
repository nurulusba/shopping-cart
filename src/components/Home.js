import React from 'react'
import './css/Home.css'
import leaf from '../img/leaf.png'
import logo from '../img/logo.svg'

function Home() {
    return (
        <div>
        <section id="main">
          <div className="main-text">
            <span>The only</span> <br />  one who can tell you  <br />
            'you can't' is you. ...
            </div>
          <img src={leaf} width="420" alt="leaf-main-image" />
        </section>
      </div>
    )
}

export default Home
