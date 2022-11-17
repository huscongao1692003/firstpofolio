import React, { Component } from 'react';
import Wave from 'react-wavify'

const Wavevy = () => (
  <div style={{ bottom: '0' }}>

    <Wave fill='#34ebe1'
      paused={false}
      options={{
        height: 1,
        amplitude: 20,
        speed: 0.2,
        points: 10
      }}
    />
    <div style={{ backgroundColor: "#34ebe1", width: "100%", height: "200px", zIndex: "1", top: "-4px", position: "relative" }}></div>

  </div>
)
export default Wavevy;