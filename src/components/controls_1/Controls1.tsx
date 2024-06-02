import { Frequency } from '../../type'
import style from './Controls1.module.css'

function Controls1({
  volume,
  setVolume,
  freq,
  setFreq,
  beatFreq,
  setBeatFreq,
}: {
  freq: Frequency
  setFreq: (freq: Frequency) => void
  volume: number
  setVolume: (volume: number) => void
  beatFreq: number
  setBeatFreq: (beatFreq: number) => void
}) {
  return (
    <div className={style.controls}>
      <section className={style.control}>
        <label>Volume</label>
        <input
          type="range"
          min="-50"
          max="0"
          step="0.01"
          value={volume}
          onChange={(ev) => setVolume(Number(ev.target.value))}
        />
      </section>

      <section className={style.control}>
        <label>Base Frequency</label>
        <input
          type="range"
          min="20"
          max="800"
          value={freq.base}
          onChange={(ev) => setFreq({ ...freq, base: Number(ev.target.value) })}
        />
      </section>

      <section className={style.control}>
        <label>Harmony Frequency</label>
        <input
          type="range"
          min="20"
          max="800"
          value={freq.harmony}
          onChange={(ev) =>
            setFreq({ ...freq, harmony: Number(ev.target.value) })
          }
        />
      </section>

      <section className={style.control}>
        <label>Beat Frequency</label>
        <input
          type="range"
          min="1"
          max="100"
          value={beatFreq}
          onChange={(ev) => setBeatFreq(Number(ev.target.value))}
        />
      </section>
    </div>
  )
}

export default Controls1
