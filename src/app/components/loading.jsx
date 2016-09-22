import React from 'react'

const Loading = () => {
  return (
    <div>
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
      <div className="loader-text center">
        Loading
      </div>
    </div>
  )
};

export default Loading
