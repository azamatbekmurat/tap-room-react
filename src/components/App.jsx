import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'
import KegList from './KegList'
import NewKegControl from './NewKegControl'
import Error404 from './Error404'
import AboutUs from './AboutUs'
import Moment from 'moment'
import Admin from './Admin'
import { v4 } from 'uuid'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterKegList: {},
      selectedKeg: null
    }
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this)
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this)

  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateKegElapsedWaitTime(),
      60000
    )
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer)
  }

  shouldComponentUpdate() {
    return true
  }

  updateKegElapsedWaitTime() {
    var newMasterKegList = Object.assign({}, this.state.masterKegList)
    Object.keys(newMasterKegList).forEach(kegId => {
      newMasterKegList[kegId].formattedWaitTime = (newMasterKegList[kegId].timeOpen).fromNow(true)
    })
    this.setState({masterKegList: newMasterKegList})
  }

  handleChangingSelectedKeg(kegId) {
    this.setState({selectedKeg: kegId})
  }

  handleAddingNewKegToList(newKeg){
    var newKegId = v4()
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    newMasterKegList[newKegId].formattedWaitTime = newMasterKegList[newKegId].timeOpen.fromNow(true);
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
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
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newkegform' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} onKegSelection={this.handleChangingSelectedKeg} selectedKeg={this.state.selectedKeg}/>} />
          <Route path='/aboutus' component={AboutUs} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    )
  }

}

export default App
