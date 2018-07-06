import React from 'react'
import PropTypes from 'prop-types'

function ConfirmationQuestions(props){
  return (
    <div>
      <p>Are you sure you want to add new keg?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes!</button>
    </div>
  )
}

ConfirmationQuestions.PropTypes = {
  onTroubleshootingConfirmation: PropTypes.func
}

export default ConfirmationQuestions