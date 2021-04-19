import React from 'react'
import './App.css'
import PageTitle from '../AppTitle/AppTitle'
import Accordion from '../Accordion/Accordion'
import Rating from '../Rating/Rating'
import OnOff from '../OnOff/OnOff'
import UncontrolAccordion from '../UncontrolAccordion/UncontrolAccordion'
import UncontrolRating from '../UncontrolRating/UncontrolRating'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <PageTitle title="I'm page title HAHAHAH" />
      </header>
      Article
      <Rating value={2} />
      {/*<Accordion title='Menu' collapsed={true} />
      <Accordion title='Users' collapsed={false} />*/}
      <UncontrolAccordion title={'Menu'} />
      Article 2{/*<Rating value={4} />*/}
      <UncontrolRating />
      <OnOff />
      <OnOff />
      <OnOff />
    </div>
  )
}

export default App
