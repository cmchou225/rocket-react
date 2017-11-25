import React from 'react';
import Agency from './Agency.jsx'


const Launch = ({agencies, location, rocket, launchId, timeOfLaunch, timeOfLaunchRaw, date, status }) => {
  const allAgencies = agencies.map(agt => {
    return <Agency name={ agt.name } wiki={ agt.wiki} />
  });
  const classes = `${status} unconfirmed`;
  return (
    <tr className={classes}>
      <td>
        <p>{ date }</p>
        <p>Time: { timeOfLaunch }</p>
      </td>
      <td>
        <a href={rocket.wiki }>{ rocket.name }</a>
      </td>
      <td>
        {allAgencies}
      </td>
      <td>
        <div> 
          <a href={location.wikiURL}>{ location.name }</a> <br/>
          <a href={location.mapURL}>Map</a>
        </div>
      </td>
    </tr>
  )
}

export default Launch;