import { useState } from 'react'
import Login from './components/Login'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Login />
      <Footer />
    </>
  )
}

export default App
