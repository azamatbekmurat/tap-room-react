import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return(
    <navbar>
      <style jsx>{`
        navbar a {
          color: 'grey';
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
