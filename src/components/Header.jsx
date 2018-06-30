import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Header(){
  return (
    <header>
      <Navbar />
        <style jsx>{`
          header {
            background-color: grey;
            color: white;
            text-align: center;
          }
          jumbotron {
            text-align: center;
            background-color: silver;
          }
          .imageDisplay {
            background-image:
            width: 100%;
            height: 100px;
          }
        `}</style>
        <h1>Tap Room</h1>
      </header>
  )
}

export default Header
