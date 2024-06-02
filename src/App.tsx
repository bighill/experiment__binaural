import Controls1 from './components/controls_1/Controls1'
import useTones from './hooks/useTones'
import Debug from './components/debug/Debug'

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

      <div className="btn" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </div>
    </main>
  )
}

export default App
