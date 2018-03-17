import React, { Component } from 'react'
import axios from 'axios'
import ShareFacebook from './ShareFacebook'
import loginFacebookService from '../libs/loginFacebookService'

class FormPin extends Component {
  state = {
    addPoint: false,
    createdBy: '',
    namePlace: '',
    loginStatus: false,
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
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
    axios.post('http://128.199.230.111:4000/add-pin',
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
      namePlace: '',
    })
  }

  getLocation = () => {
    this.setState({ addPoint: true })
    this.props.getLocation()
  }

  loginFacebook = async () => {
    const dataUserFacebook = await loginFacebookService()
    this.setState({
      createdBy: dataUserFacebook.user.displayName,
      loginStatus: true
    })
  }

  render() {
    const { lng, lat } = this.props
    const { createdBy, namePlace, addPoint } = this.state
    return (
      <div className='form-layout' >
        <div>
          <ShareFacebook />
          {!this.state.loginStatus &&  <button className="bt-social" onClick={() => this.loginFacebook()}>Login with Facebook</button>}
        </div>

        <div className='from-add-marker' >
          <div>
            <div className="label" >Your name</div>
            <input type='text' value={createdBy} onChange={this.changecreatedBy} disabled={this.state.loginStatus} />
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


            {
              this.state.addPoint ?
                <button
                  onClick={() => this.createMarker()}
                  disabled={createdBy && namePlace ? false : true}
                >
                  เพิ่มจุด
                </button>
                :
                <button
                  className='bt-add-point'
                  onClick={() => this.getLocation()}
                >
                  เพิ่มจุดของเรา
                </button>
            }

          </div>
        </div>
        
      </div>
    )
  }
}

export default FormPin