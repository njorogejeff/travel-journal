import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css'
import data from './data'

function App() {
  const cards = data.map(card => {
    return (
      <Card
        key={card.id}
        item={card}
      />
    )
  })

  return (
    <>
      <Navbar />
      <section className='px-9 pt-12 pb-7'>
        {cards}
      </section>
    </>
  )
}

export default App
