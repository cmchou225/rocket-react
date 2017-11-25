import React from 'react';

const Agency = ({name, wiki}) => {
  return (
    <ul>
      <li><a href={wiki}>{name}</a></li>
    </ul>
  )
}

export default Agency;