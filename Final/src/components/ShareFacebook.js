import React from 'react'

class ShareFacebook extends React.Component {
  render() {
    return (
      <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//workshop-oh-my-pin.firebaseapp.com/">
        <button className="bt-social">Share on Facebook</button>
      </a>
    )
  }
}

export default ShareFacebook