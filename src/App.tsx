import { useState } from 'react'

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
    baseFreq,
    setBaseFreq,
    harmonyFreq,
    // setHarmonyFreq,
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
        // harmonyFreq={harmonyFreq}
        // setHarmonyFreq={setHarmonyFreq}
        volume={volume}
        setVolume={setVolume}
        beatFreq={beatFreq}
        setBeatFreq={setBeatFreq}
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
