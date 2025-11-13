import News from './pages/News'
import Lore from './pages/Lore'
import Recruit from './pages/Recruit'
import Matchmaking from './pages/Matchmaking'
import Profile from './pages/Profile'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/news" element={<News />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/matchmaking" element={<Matchmaking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
