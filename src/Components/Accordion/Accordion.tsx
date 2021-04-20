import React from 'react'
import AccordionTitle from './AccordionTitle/AccordionTitle'
import AccordionBody from './AccordionBody/AccordionBody'

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onToogle: (collapsed: boolean) => void
  items: ItemsType[]
  onClick: (value: any) => void
}

export type ItemsType = {
  title: string
  value: number
}

const Accordion = (props: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={props.title}
                      onToogle={() => props.onToogle(!props.collapsed)}
                       />
      {!props.collapsed && <AccordionBody items={props.items}
                                          onClick={props.onClick}/>}
    </div>
  )
}

export default Accordion
