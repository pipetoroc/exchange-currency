import { NavBar } from './components/navBar/NavBar'
import './App.css'
import { useEffect, useState } from 'react'
import getSupportedCodes from './services/getSupportedCodes'

function App () {
  const [moeda, setMoeda] = useState('')
  const [supportedCodes, setSupportedCodes] = useState({})

  const handleSubmit = evt => {
    evt.preventDefault()

    console.log(moeda)
  }

  const handleChange = evt => {
    setMoeda(evt.target.value)
  }

  // const APIKEY = 'a1d5447d54ede580d6c8273b'
  // useEffect(() => {
  //   fetch(`https://v6.exchangerate-api.com/v6/${APIKEY}/latest/USD`)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, [])

  useEffect(() => {
    getSupportedCodes().then(supportedCodesObject => setSupportedCodes(supportedCodesObject))
  }, [])

  console.log(supportedCodes)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Conversão de Moedas com Facilidade</h1>
      <div className='div'>
        <a href=''>Comprar</a>
        <a href=''>Vender</a>
      </div>
      <div className='div-input'>
        <img src='/src/assets/logo.svg' alt='logo moeda' />
        <form onSubmit={handleSubmit}>
          <input className='div-input-search' list='supported-currencies' type='list' placeholder='Digite o nome da moeda' value={moeda} onChange={handleChange} />
          <datalist id='supported-currencies'>
            {
              Object.entries(supportedCodes).map(([code, name]) => (
                <option key={code} value={name} />
              ))
            }
          </datalist>
        </form>
        <p placeholder='0000'>-</p>
        <button className='div-button'>
          <img className='div-input_img' src='/src/assets/logo2.svg' alt='logo botao de converter' />
        </button>
        <img src='/src/assets/logo.svg' alt='logo moeda' />
        <input className='div-input-search' type='text' placeholder='Digite o nome da moeda' />
        <p placeholder='0000'>-</p>
      </div>
    </>
  )
}

export default App
