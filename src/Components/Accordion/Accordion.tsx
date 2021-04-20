import React from 'react'
import AccordionTitle from './AccordionTitle/AccordionTitle'
import AccordionBody from './AccordionBody/AccordionBody'

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onToogle: (collapsed: boolean) => void
}

const Accordion = (props: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={props.title}
                      onToogle={() => props.onToogle(!props.collapsed)}
                       />
      {!props.collapsed && <AccordionBody />}
    </div>
  )
}

export default Accordion
