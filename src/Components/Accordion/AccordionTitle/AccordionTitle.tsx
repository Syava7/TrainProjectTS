import React from 'react';

type AccordionTitlePropsType = {
  title: string
}


const AccordionTitle = (props: AccordionTitlePropsType) => {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}

export default AccordionTitle