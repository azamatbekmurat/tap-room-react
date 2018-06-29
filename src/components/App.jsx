import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'
import KegList from './KegList'
import NewKegForm from './NewKegForm'
import Error404 from './Error404'

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newkegform' component={NewKegForm} />
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
