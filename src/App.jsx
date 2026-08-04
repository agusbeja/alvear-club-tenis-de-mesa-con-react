import './App.css'
import './index.css'
import { Inicio } from './components/Inicio/Inicio'
import { Separador } from './components/Separador/Separador'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { SobreNosotros } from './components/SobreNosotros/SobreNosotros'
import { Torneos } from './components/Torneos/Torneos'

function App() {
  

  return (
  <>
    <Header />
    <NavBar />
    <Separador id="inicio" />
    <Inicio />
    <Separador id="sobre-nosotros" />
    <SobreNosotros />
    <Separador id="torneos" />
    <Torneos />
    <Footer />
  </>)
}

export default App
