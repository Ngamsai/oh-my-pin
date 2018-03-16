import React, { Component } from 'react'
import mapmagic from 'mapmagic-gl'
import '../styles/map.css' // add this line
import '../../node_modules/mapmagic-gl/dist/mapmagic-gl.css'

let map // add this line
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

  // add this function
  componentDidMount = () => {
    this.renderMap()
  }

  // add this function
  renderMap = () => {
    const { pins } = this.state
    map = new mapmagic.Map({
      container: 'map',
      app_id: 'example-m82la',
      api_key: 'Yjk4YTliYzRmMTVlN2Y4ODhlYzRjZDE5OTU0NmViNjk',
      center: [98.98, 18.79],
      zoom: 12,
    })
    map.on('load', () => {
      pins.forEach(obj => {
        map.addMarker({
          lng: obj.lng,
          lat: obj.lat,
          description: `
              <strong>${obj.namePlace}</strong> 
              <p>โดย: ${obj.createdBy}</p>
            `,
          icon: 'mmg_pin_1_orange',
          popup: {
            action: 'hover',
            offset: [0, -20],
          }
        })
      })
    })
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
