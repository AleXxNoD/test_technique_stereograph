import './App.css'
import MainScene from './components/MainScene'

function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full h-full px-16 py-4'>
        <div className='w-full h-full overflow-hidden'>
          <MainScene />
        </div>
      </div>
    </div>
  )
}

export default App
