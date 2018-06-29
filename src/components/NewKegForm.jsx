import React from 'react';

function NewKegForm() {
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer Name'/>
        <input
          type='text'
          id='abv'
          placeholder='Alcohol by volume'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        <input
          type='text'
          id='remaining'
          placeholder='Volume'/>
        <textarea
          id='description'
          placeholder='Give brief description of a beer'/>
        <button type='submit'>Add new keg!</button>
      </form>
    </div>
  );
}

export default NewKegForm;
