import Controls1 from './components/controls1/Controls1'
import useTones from './hooks/useTones'
import Debug from './components/debug/Debug'
import Controls2 from './components/controls2/Controls2'

function App() {
  const {
    hasToneInit,
    volume,
    setVolume,
    isPlaying,
    setIsPlaying,
    oscillator,
    setOscillator,
    baseFreq,
    setBaseFreq,
    harmonyFreq,
    basePan,
    harmonyPan,
    beatFreq,
    setBeatFreq,
  } = useTones()

  return (
    <main>
      <div className="card">
        <Controls1
          baseFreq={baseFreq}
          setBaseFreq={setBaseFreq}
          volume={volume}
          setVolume={setVolume}
          beatFreq={beatFreq}
          setBeatFreq={setBeatFreq}
          oscillator={oscillator}
          setOscillator={setOscillator}
        />
      </div>

      <div className="card">
        <Controls2 beatFreq={beatFreq} setBeatFreq={setBeatFreq} />
      </div>

      <div className="card">
        <Debug
          hasToneInit={hasToneInit}
          isPlaying={isPlaying}
          volume={volume}
          baseFreq={baseFreq}
          harmonyFreq={harmonyFreq}
          basePan={basePan}
          harmonyPan={harmonyPan}
          beatFreq={beatFreq}
        />
      </div>

      <div className="card">
        <div className="btn" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </div>
      </div>
    </main>
  )
}

export default App
