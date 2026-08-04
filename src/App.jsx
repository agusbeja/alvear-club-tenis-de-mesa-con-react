import './App.css'
import './index.css'
import { Separador } from './components/Separador/Separador'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'

function App() {
  

  return (
  <>
    <Header />
    <NavBar />
    <Separador id="inicio" />
    <Separador id="sobre-nosotros" />
    <Separador id="torneos" />
    <Footer />
  </>)
}

export default App
