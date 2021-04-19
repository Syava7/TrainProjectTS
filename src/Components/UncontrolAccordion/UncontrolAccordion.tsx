import React, { useState } from 'react'
import AccordionTitle from './AccordionTitle/AccordionTitle'
import AccordionBody from './AccordionBody/AccordionBody'

type AccordionPropsType = {
  title: string
}

const UncontrolAccordion = (props: AccordionPropsType) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <AccordionTitle
        title={props.title}
        setCollapsed={() => {
          setCollapsed(!collapsed)
        }}
      />
      {!collapsed && <AccordionBody />}
    </div>
  )
}

export default UncontrolAccordion
