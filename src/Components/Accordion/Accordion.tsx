import React from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

type AccordionPropsType = {
  title: string
  collapsed: boolean
}

const Accordion = (props: AccordionPropsType) => {
  return (
    (props.collapsed)
      ?
      <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
      </div>
      :
      <div>
        <AccordionTitle title={props.title}/>
      </div>
  )
}

export default Accordion