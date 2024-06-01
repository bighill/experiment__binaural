import useTones from './hooks/useTones'

function App() {
  const {
    isPlaying,
    setIsPlaying,
    frequency1,
    frequency2,
    setFrequency1,
    setFrequency2,
  } = useTones()

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <main>
      <input
        type="range"
        min="20"
        max="800"
        value={frequency1}
        onChange={(e) => setFrequency1(Number(e.target.value))}
      />

      <input
        type="range"
        min="20"
        max="800"
        value={frequency2}
        onChange={(e) => setFrequency2(Number(e.target.value))}
      />

      <div className="btn" onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </div>
    </main>
  )
}

export default App
