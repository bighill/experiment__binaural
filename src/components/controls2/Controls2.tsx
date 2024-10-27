import { useEffect, useState } from 'react'

import style from './Controls2.module.css'
import { Toggle } from './Toggle'
import { MIN_BEAT_FREQ, MAX_BEAT_FREQ, COLOR_OVERLAP } from './const'
import Debug2 from './Debug2'

interface Controls2Props {
  isPlaying: boolean
  setIsPlaying: (value: boolean) => void
  beatFreq: number
  setBeatFreq: (value: number) => void
}

const Controls2: React.FC<Controls2Props> = ({
  isPlaying,
  setIsPlaying,
  beatFreq,
  setBeatFreq,
}) => {
  const [topPercentage, setTopPercentage] = useState(50)
  const [bottomPercentage, setBottomPercentage] = useState(30)

  useEffect(() => {
    const percentage =
      ((beatFreq - MIN_BEAT_FREQ) / (MAX_BEAT_FREQ - MIN_BEAT_FREQ)) * 100
    const topPercentage = percentage + COLOR_OVERLAP / 2
    const bottomPercentage = percentage - COLOR_OVERLAP / 2
    setTopPercentage(topPercentage)
    setBottomPercentage(bottomPercentage)
  }, [beatFreq])

  const handleClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    const rect = ev.currentTarget.getBoundingClientRect()
    const y = rect.bottom - ev.clientY
    const height = rect.height
    const percentage = (y / height) * 100
    let newBeatFreq =
      MIN_BEAT_FREQ + (percentage / 100) * (MAX_BEAT_FREQ - MIN_BEAT_FREQ)
    newBeatFreq = Math.round(newBeatFreq)
    setBeatFreq(newBeatFreq)
  }

  return (
    <div
      className={style.div}
      style={{
        background: `linear-gradient(to top, tomato ${bottomPercentage}%, orange ${topPercentage}%)`,
      }}
      onClick={handleClick}
    >
      <div>
        <Toggle isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

        <Debug2
          hasToneInit={true}
          isPlaying={isPlaying}
          volume={0.5}
          baseFreq={200}
          harmonyFreq={202}
          basePan={0.5}
          harmonyPan={0.5}
          beatFreq={beatFreq}
        />
      </div>

      {/* TODO swipe on a grid shorter than 100vh */}
      <div id="right">TODO swipe on a grid shorter than 100vh</div>
    </div>
  )
}

export default Controls2
