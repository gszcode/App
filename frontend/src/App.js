import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Landing } from './Pages/Landing/Landing'
import { Search } from './components/Search/Search'
import { Contact } from './Pages/Contact/Contact'
import { About } from './Pages/About/About'
import { Footer } from './components/Footer/Footer'
import { UserAccess } from './Pages/UserAccess/UserAccess'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user-access" element={<UserAccess />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
