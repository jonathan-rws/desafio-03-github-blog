import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Issues } from './pages/Issues'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issues" element={<Issues />} />
    </Routes>
  )
}
