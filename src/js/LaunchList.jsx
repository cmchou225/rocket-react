import React from 'react';
import Launch from './Launch.jsx';

const LaunchList = ({launches}) => {
  const allLaunches = launches.map(launch => {
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

export default LaunchList;