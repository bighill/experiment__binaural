import { Frequency } from '../../type'

function Controls1({
  freq,
  setFreq,
}: {
  freq: Frequency
  setFreq: (freq: Frequency) => void
}) {
  {
    /* TODO volume */
  }
  {
    /* TODO beat frequency ui component, worry about functionality later */
  }

  return (
    <div>
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
