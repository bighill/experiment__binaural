import { useState } from 'react'

import Controls1 from './components/controls_1/Controls1'
import useTones from './hooks/useTones'

function App() {
  const { volume, setVolume, isPlaying, setIsPlaying, freq, setFreq } =
    useTones()
  const [beatFreq, setBeatFreq] = useState(1)

  return (
    <main>
      <Controls1
        freq={freq}
        setFreq={setFreq}
        volume={volume}
        setVolume={setVolume}
        beatFreq={beatFreq}
        setBeatFreq={setBeatFreq}
      />
      <div className="btn" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </div>
    </main>
  )
}

export default App
