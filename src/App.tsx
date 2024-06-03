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

  // TODO mobile-first layout

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

      {/* TODO Controls2 
          - [ ] volume 
          - [ ] baseFreq 
          - [ ] beatFreq 
          - (not oscillator)
          - [ ] FUI
      */}

      {/* TODO toggle debug data */}
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

      {/* TODO visual pulse that matches the beat, experiment */}
      {/* 
        research by hacking at these

        react
        - MUI material-ui https://mui.com/material-ui/react-slider/
        - MUI base-ui (w/out mui styles) https://mui.com/base-ui/react-slider/
        - https://zillow.github.io/react-slider/
        - https://github.com/n3r4zzurr0/range-slider-input#styling

        canvas
        - https://github.com/akalverboer/CanvasSlider
        - https://codepen.io/weslito/pen/Vwzpoa
        - canvas custom
      */}
      <div className="card">
        <div className="btn" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </div>
      </div>
    </main>
  )
}

export default App
