import React from 'react';

type StarProps = {
  selected: boolean
}


const Star = (props: StarProps) => {
  return (
    (props.selected) ? <span><b>Star </b></span> : <span>Star </span>
  )
}

export default Star