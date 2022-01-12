import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [lorems, setLorems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = count
    if (count < 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }

    setLorems(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>tired of boring ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
        />
        <button type='submit' className='btn'>
          {' '}
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {lorems.map((lorem, index) => {
          return <p key={index}> {lorem} </p>
        })}
      </article>
    </section>
  )
}

export default App
