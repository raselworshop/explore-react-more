
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Price from './Components/Price/Price'
// import Daisynav from './Components/DaisyNav/Daisynav'

function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <Daisynav></Daisynav> */}
      <h1 className='bg-red-500 text-7xl'>Vite + React</h1>
      <Price></Price>
    </>
  )
}

export default App
