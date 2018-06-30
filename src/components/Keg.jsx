import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

function Keg(props) {
  return (
    <div className="color-toggle">
      <style jsx global>{`
        .color-toggle {
          background-color: #a7c3f2;
        }
        .color-toggle:hover {
          background-color: pink;
        }
      `}</style>
      <h3>{props.name}</h3>
      <div>
        <p><strong>Brewer: </strong><em>{props.brewer}</em></p>
        <p><strong>Description: </strong><em>{props.description}</em></p>
        <p><strong>Alcohol by volume: </strong><em>{props.abv}</em></p>
        <p><strong>Price: </strong><em>${props.price}</em></p>
        <p><strong>Remaining: </strong><em>{props.remaining} pints</em></p>
        <Image />
        <hr/>
      </div>

    </div>
  );
}

Keg.progTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.number,
  remaining: PropTypes.number
}
export default Keg;
