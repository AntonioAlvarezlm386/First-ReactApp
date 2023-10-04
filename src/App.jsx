import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import { Route, Routes } from 'react-router-dom'
import Astros from './components/Astros.jsx'
import ResponsiveAppBar from './components/AppBar.jsx'
import './App.css'



function App() {
  //cambiar las links a una constante de objeto
  const linksData = [
    { name: 'Home', href: '/' },
    { name: 'Astros', href: '/astros' },
    { name: 'About', href: '/about' },
  ]


  return (
    <>
      <Navbar header='Navbar' links={linksData}/>
      {/* implementacion de react router */}
      <Routes>
        <Route
          path='/'
          element={<Main/>}
        />
          
        <Route
          path='/astros'
          element={<Astros/>}
        />

        <Route
          path='/about'
          element={<About/>}
        />
      </Routes>
    </>
  )
}


export default App
