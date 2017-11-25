import React, {Component} from 'react';
import LaunchList from './LaunchList.jsx';
import FetchError from './FetchError.jsx';

export default class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      launches: [],
      success: false,
      loading: true
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
        lch.timeOfLaunch = confirmed ? new Date(time).toTimeString() : time;
        lch.date = new Date(lch.timeOfLaunchRaw).toDateString();
        return lch;  
      })
      this.setState({launches: launchesAll, success: true, loading: false});
    })
  }
  
  render() {
    const content = this.state.success && !this.state.loading 
      ? <LaunchList launches={this.state.launches}/> 
      : <FetchError />
    return ( 
      <div>
        <h1 className="title">Infinity and Beyond</h1>
        {this.state.loading ? <h3>Loading </h3> : content}
      </div>
    )}
}