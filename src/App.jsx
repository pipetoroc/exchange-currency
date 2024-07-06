import './App.css'

function App () {
  return (
    <>
      <header>
        <nav>
          <ul>
            <a href=''><img src='./assets/logo3.svg' alt='logo do aplicativo CUCO' /></a>
            <a href=''> <li>Converter</li></a>
            <a href=''> <li>FAQ</li></a>
            <a href=''> <li>Contact</li></a>
          </ul>
        </nav>
      </header>
      <h1>Conversão de Moedas com Facilidade</h1>
      <a href=''>Comprar</a>
      <a href=''>Vender</a>
      <div>
        <img src='./assets/logo.svg' alt='logo moeda' />
        <input type='text' placeholder='Digite o nome da moeda' />
        <p placeholder='0000'>-</p>
      </div>
      <img src='./assets/logo2.svg' alt='logo botao de converter' />
    </>
  )
}

export default App
