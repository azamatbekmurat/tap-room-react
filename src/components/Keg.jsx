import React from 'react';
import PropTypes from 'prop-types';

fuction Keg(props) {
  return (
    <div>
      <style jsx global>{`
        .color-toggle {
          background-color: green;
        }
        .color-toggle:hover {
          background-color: pink;
        }
      `}</style>
      <div className="color-toggle">
        <h3>{props.name} - {props.brewer}</h3>
        <p><em>{props.description}</em></p>
        <p><em>{props.abv}</em></p>
        <p><em>{props.price}</em></p>
        <p><em>{props.remaining}</em></p>
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
