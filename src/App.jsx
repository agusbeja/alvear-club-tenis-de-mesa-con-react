import './App.css'
import './index.css'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { Separador } from './components/Separador/Separador'
import { Inicio } from './components/Inicio/Inicio'
import { SobreNosotros } from './components/SobreNosotros/SobreNosotros'
import { Galeria } from './components/Galeria/Galeria'
import { Torneos } from './components/Torneos/Torneos'
import { Footer } from './components/Footer/Footer'

function App() {
  

  return (
  <>
    <Header />
    <NavBar />
    <Separador id="inicio" />
    <Inicio />
    <Separador id="sobre-nosotros" />
    <SobreNosotros />
    <Galeria />
    <Separador id="torneos" />
    <Torneos />
    <Footer />
  </>)
}

export default App
