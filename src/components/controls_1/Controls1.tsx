import style from './Controls1.module.css'

function Controls1({
  volume,
  setVolume,
  baseFreq,
  setBaseFreq,
  //   harmonyFreq,
  //   setHarmonyFreq,
  beatFreq,
  setBeatFreq,
}: {
  volume: number
  setVolume: (volume: number) => void
  baseFreq: number
  setBaseFreq: (baseFreq: number) => void
  // harmonyFreq: number
  // setHarmonyFreq: (harmonyFreq: number) => void
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
          step="1"
          value={volume}
          onChange={(ev) => setVolume(Number(ev.target.value))}
        />
      </section>

      <section className={style.control}>
        <label>Base Frequency</label>
        <input
          type="range"
          min="40"
          max="300"
          step="1"
          value={baseFreq}
          onChange={(ev) => setBaseFreq(Number(ev.target.value))}
        />
      </section>

      {/* <section className={style.control}>
        <label>Harmony Frequency</label>
        <input
          type="range"
          min="40"
          max="300"
          step="1"
          value={harmonyFreq}
          onChange={(ev) => setHarmonyFreq(Number(ev.target.value))}
        />
      </section> */}

      <section className={style.control}>
        <label>Beat Frequency</label>
        <input
          type="range"
          min="0"
          max="100"
          value={beatFreq}
          onChange={(ev) => setBeatFreq(Number(ev.target.value))}
        />
      </section>
    </div>
  )
}

export default Controls1
