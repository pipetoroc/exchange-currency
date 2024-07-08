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
      <form className='div-input' onSubmit={handleSubmit} name='currencies'>
        <img src='/src/assets/logo.svg' alt='logo moeda' />
        <input className='div-input-search' list='supported-currencies' type='list' placeholder='Digite o nome da moeda' value={moeda} onChange={handleChange} />
        <datalist id='supported-currencies'>
          {
              Object.entries(supportedCodes).map(([code, name]) => (
                <option key={code} value={name} />
              ))
            }
        </datalist>
        <input className='div-input-search div-input-search_value' type='number' name='' id='' placeholder='R$ 0000' />
        <button className='div-button'>
          <img className='div-input_img' src='/src/assets/logo2.svg' alt='logo botao de converter' />
        </button>
        <img src='/src/assets/logo.svg' alt='logo moeda' />
        <input className='div-input-search' type='text' placeholder='Digite o nome da moeda' />
        <p className='p' />
      </form>
    </>
  )
}

export default App
