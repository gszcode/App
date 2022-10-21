import { Navbar } from './components/Navbar/Navbar'
import Landing from './Pages/Landing/Landing'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import { Search } from './components/Search/Search'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
