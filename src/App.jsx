import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './json/quotes.json'
import colors from './assets/utils/colors'
import QuoteBox from './assets/components/QuoteBox'
import Quotes from './assets/components/Quotes'

function App() {
  
  let getRandomElement = arr =>{
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }
  let colorRandom = getRandomElement(colors)
  let quoteRandom= getRandomElement(quotes)

  const [quote, setQuote] = useState(quoteRandom)
  const [color, setColor] = useState(colorRandom)

  const getRandomElements =()=>{
    colorRandom = getRandomElement(colors)
    quoteRandom = getRandomElement(quotes)
    setColor(colorRandom)
    setQuote(quoteRandom)
  }
 
 
  return (
    <div className="App" style={{backgroundColor:color}}>
      <div className="contentQuote">
          <Quotes color ={color}/>
          <QuoteBox
            quote ={quote}
            color = {color}
            randomElements = {getRandomElements}
          />
      </div>

    </div>
  )
}

export default App