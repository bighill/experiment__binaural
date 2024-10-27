import useTones from './hooks/useTones'

import Controls2 from './components/controls2/Controls2'

function App() {
  const { beatFreq, setBeatFreq, isPlaying, setIsPlaying } = useTones()

  return (
    <main>
      <Controls2
        beatFreq={beatFreq}
        setBeatFreq={setBeatFreq}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </main>
  )
}

export default App
