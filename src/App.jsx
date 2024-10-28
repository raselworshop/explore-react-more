
import './App.css'
import LineChart from './Components/LineChart/LineChart'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import Price from './Components/Price/Price'
// import Daisynav from './Components/DaisyNav/Daisynav'

function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <Daisynav></Daisynav> */}
      <h1 className='bg-red-500 text-7xl'>Vite + React</h1>
      <Price></Price>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
