import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'
import KegList from './KegList'
import NewKegForm from './NewKegForm'
import Error404 from './Error404'
import AboutUs from './AboutUs'

function App(){
  return (
    <div>
      <style jsx global>{`
          div {
            margin: 30px 30px 0 30px;
          }
          body {
          font-family: Helvetica, Arial, sans-serif;
        }
        `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newkegform' component={NewKegForm} />
        <Route path='/about' component={AboutUs} />
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
