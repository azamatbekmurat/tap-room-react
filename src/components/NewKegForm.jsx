import React from 'react'

function NewKegForm() {
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
      <form>
        <input
          style={inputStyle}
          type='text'
          id='name'
          placeholder='Beer Name'/>
        <input
          style={inputStyle}
          type='text'
          id='brewer'
          placeholder='Brewer Name'/>
        <input
          style={inputStyle}
          type='text'
          id='abv'
          placeholder='Alcohol by volume'/>
        <input
          style={inputStyle}
          type='text'
          id='price'
          placeholder='Price'/>
        <input
          style={inputStyle}
          type='text'
          id='remaining'
          placeholder='Volume'/>
        <textarea
          style={inputStyle}
          id='description'
          placeholder='Give brief description of a beer'/>
        <button style={button} type='submit'>Add new keg!</button>
      </form>
    </div>
  )
}

export default NewKegForm
