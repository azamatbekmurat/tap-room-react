import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return(
    <navbar>
      <style jsx>{`
        navbar a {
          text-decoration: none;
          color: white;
          margin-right: 5%;
          margin-left: 7.5%;
        }
        navbar a:hover {
          color: red;
        }
      `}</style>
      <Link to="/"> Home </Link><Link to="/newkegform"> Create new keg! </Link><Link to="/about"> About Us </Link>
    </navbar>
  );
}


export default Navbar;
