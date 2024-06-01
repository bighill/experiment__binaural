import useTones from './hooks/useTones'

function App() {
  const { isPlaying, setIsPlaying, freq, setFreq } = useTones()

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <main>
      <input
        type="range"
        min="20"
        max="800"
        value={freq.base}
        onChange={(ev) => setFreq({ ...freq, base: Number(ev.target.value) })}
      />

      <input
        type="range"
        min="20"
        max="800"
        value={freq.harmony}
        onChange={(ev) =>
          setFreq({ ...freq, harmony: Number(ev.target.value) })
        }
      />

      <div className="btn" onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </div>
    </main>
  )
}

export default App
