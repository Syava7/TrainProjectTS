import React from 'react'

type AccordionTitlePropsType = {
  title: string
  onToogle: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return (
    <div>
      <h3 onClick={() => props.onToogle()}>{props.title}</h3>
    </div>
  )
}

export default AccordionTitle
