import { MAX_BEAT_FREQ, MIN_BEAT_FREQ } from '../controls2/const'
import style from './Controls1.module.css'

function Controls1({
  volume,
  setVolume,
  oscillator,
  setOscillator,
  baseFreq,
  setBaseFreq,
  beatFreq,
  setBeatFreq,
}: {
  volume: number
  setVolume: (volume: number) => void
  oscillator: string
  setOscillator: (oscillator: OscillatorType) => void
  baseFreq: number
  setBaseFreq: (baseFreq: number) => void
  beatFreq: number
  setBeatFreq: (beatFreq: number) => void
}) {
  return (
    <div className={style.table}>
      <div className={style.tr}>
        <div className={style.tdLeft}>
          <label>Volume</label>
        </div>
        <div className={style.tdRight}>
          <input
            type="range"
            min="-50"
            max="0"
            step="1"
            value={volume}
            onChange={(ev) => setVolume(Number(ev.target.value))}
          />
        </div>
      </div>

      <div className={style.tr}>
        <div className={style.tdLeft}>
          <label>Base Frequency</label>
        </div>
        <div className={style.tdRight}>
          <input
            type="range"
            min="40"
            max="300"
            step="1"
            value={baseFreq}
            onChange={(ev) => setBaseFreq(Number(ev.target.value))}
          />
        </div>
      </div>

      <div className={style.tr}>
        <div className={style.tdLeft}>
          <label>Beat Frequency</label>
        </div>
        <div className={style.tdRight}>
          <input
            type="range"
            min={MIN_BEAT_FREQ}
            max={MAX_BEAT_FREQ}
            value={beatFreq}
            onChange={(ev) => setBeatFreq(Number(ev.target.value))}
          />
        </div>
      </div>

      <div className={style.tr}>
        <div className={style.tdLeft}>
          <label>Oscillator</label>
        </div>
        <div className={style.tdRight}>
          <select
            value={oscillator}
            onChange={(ev) => setOscillator(ev.target.value as OscillatorType)}
          >
            <option value="sine">Sine</option>
            <option value="square">Square</option>
            <option value="sawtooth">Sawtooth</option>
            <option value="triangle">Triangle</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Controls1
