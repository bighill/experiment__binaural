import style from './Debug.module.css'

function Debug({
  hasToneInit,
  isPlaying,
  volume,
  baseFreq,
  harmonyFreq,
  basePan,
  harmonyPan,
  beatFreq,
}: {
  hasToneInit: boolean
  isPlaying: boolean
  volume: number
  baseFreq: number
  harmonyFreq: number
  basePan: number | undefined
  harmonyPan: number | undefined
  beatFreq: number
}) {
  return (
    <div className={style.debug}>
      <section className={style.row}>
        <div>Tone Init</div>
        <div className={style.value}>
          <span>{hasToneInit ? 'Yes' : 'No'}</span>
        </div>
        <div></div>
      </section>

      <section className={style.row}>
        <div>Playing</div>
        <div className={style.value}>
          <span>{isPlaying ? 'Yes' : 'No'}</span>
        </div>
        <div></div>
      </section>

      <section className={style.row}>
        <div>Volume</div>
        <div className={style.value}>
          <span>{volume}</span>
        </div>
        <div>
          <span>dB</span>
        </div>
      </section>

      <section className={style.row}>
        <div>Base Freq</div>
        <div className={style.value}>
          <span>{baseFreq}</span>
        </div>
        <div>
          <span>Hz</span>
        </div>
      </section>

      <section className={style.row}>
        <div>Harmony Freq</div>
        <div className={style.value}>
          <span>{harmonyFreq}</span>
        </div>
        <div>
          <span>Hz</span>
        </div>
      </section>

      <section className={style.row}>
        <div>Beat Freq</div>
        <div className={style.value}>
          <span>{beatFreq}</span>
        </div>
        <div>
          <span>Hz</span>
        </div>
      </section>

      <section className={style.row}>
        <div>Base Pan</div>
        <div className={style.value}>
          <span>{basePan ?? '_'}</span>
        </div>
        <div></div>
      </section>

      <section className={style.row}>
        <div>Harmony Pan</div>
        <div className={style.value}>
          <span>{harmonyPan ?? '_'}</span>
        </div>
        <div></div>
      </section>
    </div>
  )
}

export default Debug
