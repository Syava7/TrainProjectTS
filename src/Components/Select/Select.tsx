import React, { useState } from 'react'
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
  const [active, setActive] = useState(false)

  const selectedItem = props.items.find(i => i.value === props.value)

  const onItemClick = (value: any) => {
    props.onChange(value); setActive(!active)
  }

  return (
    <>
      <div className={s.select}>
        <span className={s.main} onClick={() => setActive(!active)}>{selectedItem && selectedItem.title}</span>
        {active && (
          <div className={s.items}>
            {props.items.map(i => (
              <div className={s.item + ' ' + (selectedItem === i ? s.selected : '')}  key={i.value}
                   onClick={() => {onItemClick(i.value)}}>{i.title}</div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Select
