import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import { useSelector } from 'react-redux'

function App() {
  const searchValue = useSelector(state => state.search.value)
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
