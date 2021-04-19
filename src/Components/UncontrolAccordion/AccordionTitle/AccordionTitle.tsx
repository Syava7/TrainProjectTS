import React from 'react'

type AccordionTitlePropsType = {
  title: string
  setCollapsed: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return (
    <div>
      <h3
        onClick={() => {
          props.setCollapsed()
        }}
      >
        {props.title}
      </h3>
    </div>
  )
}

export default AccordionTitle
