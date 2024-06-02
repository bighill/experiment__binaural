import { Frequency } from '../../type'

function Controls1({
  volume,
  setVolume,
  freq,
  setFreq,
}: {
  freq: Frequency
  setFreq: (freq: Frequency) => void
  volume: number
  setVolume: (volume: number) => void
}) {
  {
    /* TODO beat frequency ui component, worry about functionality later */
  }

  return (
    <div>
      <input
        type="range"
        min="-50"
        max="0"
        step="0.01"
        value={volume}
        onChange={(ev) => setVolume(Number(ev.target.value))}
      />

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
    </div>
  )
}

export default Controls1
