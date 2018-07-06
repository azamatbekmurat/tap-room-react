import React from 'react'
import PropTypes from 'prop-types'

function KegDetail(props){
  return (
    <div>
      <h3>{props.selectedKeg.name}</h3>
      <div>
        <p><strong>Brewer: </strong><em>{props.selectedKeg.brewer}</em></p>
        <p><strong>Description: </strong><em>{props.selectedKeg.description}</em></p>
        <p><strong>Alcohol by volume: </strong><em>{props.selectedKeg.abv}</em></p>
        <p><strong>Price: </strong><em>${props.selectedKeg.price}</em></p>
        <p><strong>Remaining: </strong><em>${props.selectedKeg.remaining}</em></p>
        <Image />
        <hr/>
      </div>
    </div>
  )
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
}

export default KegDetail
