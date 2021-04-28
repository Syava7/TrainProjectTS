import React from "react";
import s from './Select.module.css'

type ItemsType = {
  title: string
  value: any
}

type SelectPropsType = {
  items: ItemsType[]
  value: any
  onChange: (value: any) => void
}

const Select = (props: SelectPropsType) => {

  const selectedItem = props.items.find(i => i.value === props.value )

  return(
    <div>
      <h3>{selectedItem && selectedItem.title}</h3>
      {props.items.map(i => <div key={i.value}>{i.title}</div>)}
    </div>
  )
}


export default Select;