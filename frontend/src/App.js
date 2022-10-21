import { Navbar } from './components/Navbar/Navbar'
import Landing from './Pages/Landing/Landing'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import { FeaturedProducts } from './Pages/FeaturedProducts/FeaturedProducts'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <FeaturedProducts />
      <Footer />
    </>
  )
}

export default App
