import React from 'react';

type AccordionTitleProps = {
  title: string
}


const AccordionTitle = (props: AccordionTitleProps) => {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}

export default AccordionTitle