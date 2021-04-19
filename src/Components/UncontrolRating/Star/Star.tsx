import React from 'react'

type StarPropsType = {
  selected: boolean
  setValue: (value: 1 | 2 | 3 | 4 | 5) => void
  value: 1 | 2 | 3 | 4 | 5
}

const Star = (props: StarPropsType) => {
  return (
    <span
      onClick={() => {
        props.setValue(props.value)
      }}
    >
      {props.selected ? <b>star </b> : 'star '}
    </span>
  )
}

export default Star
