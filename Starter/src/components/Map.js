import React, { Component } from 'react'
import '../styles/map.css'
import '../../node_modules/mapmagic-gl/dist/mapmagic-gl.css'

let pins = [
  {
    lng: 98.97,
    lat: 18.80,
    namePlace: 'วัดเจ็ดยอด',
    createdBy: 'ชลธิต',
  },
  {
    lng: 98.92,
    lat: 18.8047,
    namePlace: 'บ้านฉันเอง',
    createdBy: 'ชลธิต'
  }
]

class Map extends Component {

  state = {
    lng: 98.98,
    lat: 18.79,
    pins: pins,
  }

  render() {
    return (
      <div>
        <div id="map" />
      </div>
    )
  }
}

export default Map
