import React from 'react'


const QuoteBox = ({color, quote, randomElements}) => {
  return (
    <div className='box' style={{color:color}}>
      <p>{quote.quote}</p>
      <p>{quote.author}</p>
      <div className="boton">
        <button onClick={randomElements} className="botonSend" style={{backgroundColor:color}}> &#62;</button>
      </div>
      
    </div>
  )
}

export default QuoteBox