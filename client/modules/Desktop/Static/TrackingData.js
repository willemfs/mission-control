import React, { Component } from 'react';

import style from './CesiumPage.css';

class TrackingData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "41.826544",
      longitude: "-71.401364",
      altitude: "500m",
      velocity: "10km/s",
      temperature: "50\xB0F",
      timeToOverhead: "0000"
    }
  }

  render() {
    return (
      <div className={style.trackingData}>
        <h1>TRACKING</h1>
        Latitude:
        <span className={style.data}> {this.state.latitude}</span>
        <br />
        Longitude:
        <span className={style.data}> {this.state.longitude}</span>
        <br />
        Altitude:
        <span className={style.data}> {this.state.altitude}</span>
        <br />
        Velocity:
        <span className={style.data}> {this.state.velocity}</span>
        <br />
        Temperature:
        <span className={style.data}> {this.state.temperature}</span>
        <br />
        Time To Next Overhead:
        <span className={style.data}> {this.state.timeToOverhead}</span>
        <br /> <br />
      </div>
    );
  }
}

export default TrackingData;
