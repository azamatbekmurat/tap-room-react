import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Header(){
  return (
    <header>
      <Navbar />
      <style jsx>{`
          header {
            background-color: #cae5c5;
            color: #0a65af;
            text-align: center;
          }
          jumbotron {
            text-align: center;
            background-color: silver;
          }
        `}</style>
      <h1>Tap Room</h1>
    </header>
  )
}

export default Header
