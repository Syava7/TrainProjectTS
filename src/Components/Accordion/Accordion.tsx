import React from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

type AccordionTitleProps = {
  title: string
}

const Accordion = (props: AccordionTitleProps) => {
  return (
    <div>
      <AccordionTitle title={props.title} />
      <AccordionBody />
    </div>
  )
}

export default Accordion