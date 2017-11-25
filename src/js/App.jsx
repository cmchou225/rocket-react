import React, {Component} from 'react';
import Launch from './Launch.jsx';

export default class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      launches: []
    }
  }
  componentDidMount() {
    const HOST = location.origin;
    fetch(`${HOST}/data`).then((res => res.json()))
    .then(launches => {
      const launchesAll = launches.map(lch => {
        const time = lch.timeOfLaunch;
        const confirmed = time !== 'TBD';
        lch.status = confirmed ? 'confirmed' : 'unconfirmed';
        lch.timeOfLaunch = lch.status ? new Date(time).toTimeString() : time;
        lch.date = new Date(lch.timeOfLaunchRaw).toDateString();
        return lch;  
      })
      this.setState({launches: launchesAll});
    })
  }
  
  render() {
    const allLaunches = this.state.launches.map(launch => {
      return <Launch 
        key={ launch.launchId}
        agencies={ launch.agencies }
        launchId={ launch.launchId }
        location={ launch.location }
        rocket={ launch.rocket }
        timeOfLaunch={ launch.timeOfLaunch }
        timeOfLaunchRaw={ launch.timeOfLaunchRaw }
        status={ launch.status }
        date={ launch.date } />
    });

    return (
      <div>
          <h1 className="title">Infinity and Beyond</h1>
        <table>
          <thead>
            <tr>
              <th>Launch Date</th>
              <th>Rocket | Configuration </th>
              <th>Agency</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            { allLaunches }
          </tbody>
        </table>
        </div>
    );
  }
}