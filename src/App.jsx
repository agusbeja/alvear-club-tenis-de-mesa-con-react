import './App.css'
import './index.css'
import { Separador } from './components/Separador/Separador'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  

  return (
  <>
    <Header />
    <NavBar />
    <Separador id="inicio" />
    <Separador id="sobre-nosotros" />
    <Separador id="torneos" />

  </>)
}

export default App
