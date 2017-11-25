import React from 'react';

const Agency = ({name, wiki}) => {
  return (
    <ul>
      <a href={wiki}>{name}</a>
    </ul>
  )
}

export default Agency;