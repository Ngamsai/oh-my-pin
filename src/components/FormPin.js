import React, { Component } from 'react'
import axios from 'axios'
import SocailLogin from './SocailLogin'

class FormPin extends Component {
  state = {
    addPoint: false,
    createdBy: '',
    namePlace: '',
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      createdBy: '',
      namePlace: '',
    })
  }

  changecreatedBy = (e) => {
    this.setState({ createdBy: e.target.value });
  }

  changeNamePlace = (e) => {
    this.setState({ namePlace: e.target.value });
  }

  addPinToService = () => {
    const { createdBy, namePlace } = this.state
    const { lng, lat } = this.props
    axios.post('http://localhost:4000/add-pin',
      {
        namePlace,
        createdBy,
        lng,
        lat,
      }
    )
  }

  createMarker = () => {
    const { createdBy, namePlace } = this.state
    const { lng, lat } = this.props
    const data = {
      lng,
      lat,
      description: `
      <strong>${namePlace}</strong>
      <p>โดย: ${createdBy}</p>
      `,
      icon: 'mmg_pin_1_orange',
      popup: {
        action: 'hover',
        offset: [0, -20],
      }
    }
    this.props.createMarker(data)
    this.addPinToService()
    this.setState({
      createdBy: '',
      namePlace: '',
    })
  }

  getLocation = () => {
    this.setState({ addPoint: true })
    this.props.getLocation()
  }

  render() {
    const { lng, lat } = this.props
    const { createdBy, namePlace, addPoint } = this.state
    return (
      <div className='form-layout' >
        <div>
          <SocailLogin />
        </div>
        {!addPoint ?
          <div style={{ marginTop: 20 }} >
            <button
              className='bt-add-point'
              onClick={() => this.getLocation()}
            >
              เพิ่มจุดของเรา
          </button>
          </div>

          :

          <div className='from-add-marker' >
            <div>
              <div className="label" >Your name</div>
              <input type='text' value={createdBy} onChange={this.changecreatedBy} />
            </div>
            <div>
              <div className="label" >Name place</div>
              <input type='text' value={namePlace} onChange={this.changeNamePlace} />
            </div>
            <div>
              <div className="label" >lng , lat</div>
              <input type='text' value={`${lng}, ${lat}`} readOnly />
            </div>
            <br />
            <div>
              <button
                onClick={() => this.createMarker()}
                disabled={createdBy && namePlace ? false : true}
              >
                เพิ่มจุด
              </button>
            </div>
          </div>

        }
      </div>
    )
  }
}

export default FormPin