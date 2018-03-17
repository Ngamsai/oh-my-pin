import React, { Component } from 'react'

class FormPin extends Component {
  state = {
    pinLocation: false,
    createdBy: '',
    namePlace: '',
  }

  render() {
    return (
      <div className='form-layout' >

        <div className='from-add-marker' >
          <div>
            <div className="label" >Your name</div>
            <input type='text' />
          </div>
          <div>
            <div className="label" >Name place</div>
            <input type='text' />
          </div>
          <div>
            <div className="label" >lng , lat</div>
            <input type='text' readOnly />
          </div>
          <br />
          <div>

            {
              this.state.pinLocation ?
                <button> เพิ่มจุด </button>
                :
                <button className='bt-add-point'>
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