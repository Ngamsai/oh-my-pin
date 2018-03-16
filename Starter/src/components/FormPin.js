import React, { Component } from 'react'

class FormPin extends Component {
  state = {
    addPoint: false,
    createdBy: '',
    namePlace: '',
  }

  render() {
    const { lng, lat } = this.props
    const { createdBy, namePlace, addPoint } = this.state
    return (
      <div className='form-layout' >
        {!addPoint ?
          <div style={{ marginTop: 20 }} >
            <button
              className='bt-add-point'
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