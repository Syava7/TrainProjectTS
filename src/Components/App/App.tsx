import React, { useState } from 'react'
import './App.css'
import PageTitle from '../AppTitle/AppTitle'
import Accordion from '../Accordion/Accordion'
import Rating, { RatingValueType } from '../Rating/Rating'
import UncontrollOnOff from '../UncontrollOnOff/UncontrollOnOff'
import OnOff from '../OnOff/OnOff'
import UncontrolAccordion from '../UncontrolAccordion/UncontrolAccordion'
import UncontrollRating from '../UncontrolRating/UncontrolRating'

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [on, setOn] = useState<boolean>(false)

  return (
    <div className='App'>
      <header className='App-header'>
        <PageTitle title="I'm page title HAHAHAH" />
      </header>
       Controlled Controlled Controlled
      <OnOff on={on}
             onClickToogle={setOn}/>
      <Rating value={ratingValue}
              onClick={setRatingValue} />
      <Accordion title='Menu'
                 collapsed={collapsed}
                 onToogle={setCollapsed}
                 items={[{title: 'Igor', value: 1},
                         {title: 'Victor', value: 2},
                         {title: 'Valera', value: 3},
                         {title: 'Anna', value: 4},
                 ]}
                 onClick={(id) => alert(`${id}`)}/>

       Uncontrolled Uncontrolled Uncontrolled

      <UncontrolAccordion title={'Users'} />
      <UncontrollRating />
      <UncontrollOnOff />
    </div>
  )
}

export default App
