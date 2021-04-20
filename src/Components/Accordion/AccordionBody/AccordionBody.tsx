import React from 'react'
import { ItemsType } from "../Accordion";

type AccordionBodyPropsType = {
  items: ItemsType[]
  onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {

  const elementsLi = props.items.map((i, index) => (
    <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>
  ))

  return (
    <div>
      <ul>
        {elementsLi}
      </ul>
    </div>
  )
}

export default AccordionBody
