import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import Moment from 'moment'

function NewKegForm(props) {
  let _name = null
  let _brewer = null
  let _description = null
  let _abv = null
  let _price = null
  let _remaining = null

  function handleNewKegFormSubmission(event) {
    event.preventDefault()
    props.onNewKegCreation({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value, timeOpen: new Moment()})
    _name.value = ''
    _brewer.value = ''
    _description.value = ''
    _abv.value = ''
    _price.value = ''
    _remaining.value = ''
  }

  var inputStyle =  {
    padding: '10px',
    fontSize: '20px',
    width: '300px',
    backgroundColor: '#d0d3d8',
    margin: '10px 30% 10px 37%',
    textAlign: 'center',
  }
  var button = {
    padding: '10px',
    fontSize: '20px',
    width: '320px',
    backgroundColor: '#d0d3d8',
    height: '45px',
    margin: '10px 30% 100px 37%'
  }
  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          style={inputStyle}
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input}}/>
        <input
          style={inputStyle}
          type='text'
          id='brewer'
          placeholder='Brewer Name'
          ref={(input) => {_brewer = input}}/>
        <input
          style={inputStyle}
          type='text'
          id='abv'
          placeholder='Alcohol by volume'
          ref={(input) => {_abv = input}}/>
        <input
          style={inputStyle}
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input}}/>
        <input
          style={inputStyle}
          type='text'
          id='remaining'
          placeholder='Remaining'
          ref={(input) => {_remaining = input}}/>
        <textarea
          style={inputStyle}
          id='description'
          placeholder='Give brief description of a beer'
          ref={(input) => {_description = input}}/>
        <button style={button} type='submit'>Add new keg!</button>
      </form>
    </div>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm
