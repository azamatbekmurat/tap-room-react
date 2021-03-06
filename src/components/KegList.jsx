import React from 'react'
import Keg from './Keg'
import PropTypes from 'prop-types'

function KegList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.kegList).map(function(kegId){
        var keg = props.kegList[kegId]
        return <Keg name={keg.name}
          brewer={keg.brewer}
          description={keg.description}
          abv={keg.abv}
          price={keg.price}
          remaining={keg.remaining}
          formattedWaitTime={keg.formattedWaitTime}
          key={kegId}
          currentRouterPath={props.currentRouterPath}
          onKegSelection={props.onKegSelection}
          kegId={kegId}/>
      })}
    </div>
  )
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
}

export default KegList

//
// var masterKegList = [
//   {
//     name: 'Ruby Zozzle',
//     brewer: 'Hi-Wheel',
//     description: 'Sparkling Wine & Grapefruit',
//     abv: '6.8%',
//     price: '7',
//     remaining: '20'
//   },
//   {
//     name: 'Tart N Juicy',
//     brewer: 'Epic',
//     description: 'Sour IPA',
//     abv: '4.5%',
//     price: '6',
//     remaining: '60'
//   },
//   {
//     name: 'Hamm\'s',
//     brewer: 'Miller/Coors',
//     description: 'American Lager',
//     abv: '4.7%',
//     price: '3',
//     remaining: '65'
//   },
//   {
//     name: 'Prismatic',
//     brewer: 'Ninkasi',
//     description: 'Juicy IPA',
//     abv:  '5.9%',
//     price: '6',
//     remaining: '75'
//   },
//   {
//     name: 'Juicy Haze',
//     brewer: 'New Belgium',
//     description: 'India Pale Ale',
//     abv:  '7.5%',
//     price: '6',
//     remaining: '18'
//   },
//   {
//     name: '8 Hop',
//     brewer: 'New Belgium',
//     description: 'Pale Ale',
//     abv:  '5.5%',
//     price: '6',
//     remaining: '58'
//   }
// ]
