import React, { useState } from 'react'
import './App.css'
import PageTitle from '../AppTitle/AppTitle'
import Accordion from '../Accordion/Accordion'
import Rating, { RatingValueType } from '../Rating/Rating'
import OnOff from '../OnOff/OnOff'
import UncontrolAccordion from '../UncontrolAccordion/UncontrolAccordion'
import UncontrollRating from '../UncontrolRating/UncontrolRating'

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <PageTitle title="I'm page title HAHAHAH" />
      </header>
      Controlled
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Accordion title='Menu' collapsed={true} />
      Uncontrolled
      <UncontrolAccordion title={'Users'} />
      <UncontrollRating />
      <OnOff />
      <OnOff />
      <OnOff />
    </div>
  )
}

export default App
