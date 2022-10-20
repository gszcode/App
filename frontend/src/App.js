import { Navbar } from './components/Navbar/Navbar'
import Landing from './Pages/Landing'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
