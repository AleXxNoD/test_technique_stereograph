import './App.css'
import MainScene from './components/MainScene'
import Menu from './components/Menu'

function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full h-full px-16 py-4'>
        <div className='w-full h-full overflow-hidden'>
          <MainScene />
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default App
