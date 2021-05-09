import React, { useReducer } from 'react'
import AccordionTitle from './AccordionTitle/AccordionTitle'
import AccordionBody from './AccordionBody/AccordionBody'
import { reducer, TOOGLE_COLLAPSED } from './reducer'

type AccordionPropsType = {
  title: string
}

const UncontrolAccordion = (props: AccordionPropsType) => {
  // const [collapsed, setCollapsed] = useState(false)
  const [collapsed, dispatch] = useReducer(reducer, false)
  return (
    <div>
      <AccordionTitle
        title={props.title}
        setCollapsed={() => {
          dispatch({type: TOOGLE_COLLAPSED})
        }}
      />
      {!collapsed && <AccordionBody />}
    </div>
  )
}

export default UncontrolAccordion
