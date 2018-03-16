import React, { Component } from 'react'
import mapmagic from 'mapmagic-gl'
import axios from 'axios'
import FormPin from './FormPin'
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

let map

class Map extends Component {

  state = {
    lng: 98.98,
    lat: 18.79,
    pins: pins,
  }

  componentDidMount = async () => {
    await this.getPinFormService()
    this.renderMap()
  }

  getPinFormService = async () => {
    await axios.get('http://localhost:4000/get-pins')
      .then(async (res) => {
        this.setState({
          pins: res.data
        })
      })
      .catch((err) => console.log(err))
  }

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

  getLocation = () => {
    map.addMarker({
      lng: 98.98,
      lat: 18.79,
      icon: 'mmg_pin_1_black_move',
      draggable: true,
      onDragEnd: (e) => {
        const { lng, lat } = e.lngLat
        this.setState({ lng, lat })
      }
    })
  }

  createMarker = (data) => {
    map.addMarker(data)
  }

  render() {
    return (
      <div>
        <div id="map" />
        <FormPin
          lng={this.state.lng}
          lat={this.state.lat}
          getLocation={this.getLocation}
          createMarker={this.createMarker}
        />
      </div>
    )
  }
}

export default Map
