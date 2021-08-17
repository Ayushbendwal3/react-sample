import ButtonFunction from './components/ButtonFunctional'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello world!</h1>
      <ButtonFunction increment={10} name="Ayush" />
    </div>
  )
}

export default App
