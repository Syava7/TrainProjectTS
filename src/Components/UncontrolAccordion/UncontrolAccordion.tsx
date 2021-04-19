import React, { useState } from 'react'
import AccordionTitle from './AccordionTitle/AccordionTitle'
import AccordionBody from './AccordionBody/AccordionBody'
import { Button } from 'react-bootstrap'

type AccordionPropsType = {
  title: string
}

const UncontrolAccordion = (props: AccordionPropsType) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <AccordionTitle title={props.title} />
      <Button
        variant='primary'
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      >
        Toogle
      </Button>
      {!collapsed && <AccordionBody />}
    </div>
  )
}

export default UncontrolAccordion
