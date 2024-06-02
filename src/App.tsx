import Controls1 from './components/controls_1/Controls1'
import useTones from './hooks/useTones'

function App() {
  const { isPlaying, setIsPlaying, freq, setFreq } = useTones()

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <main>
      <Controls1 freq={freq} setFreq={setFreq} />
      <div className="btn" onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </div>
    </main>
  )
}

export default App
