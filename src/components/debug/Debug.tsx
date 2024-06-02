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
    <div className={style.table}>
      <div className={style.tr}>
        <div className={style.tdLeft}>
          <label>Tone Init</label>
        </div>
        <div className={style.tdRight}>
          <span className={style.value}>{hasToneInit ? 'Yes' : 'No'}</span>
        </div>
      </div>

      <div className={style.tr}>
        <div className={style.tdLeft}>
          <label>Playing</label>
        </div>
        <div className={style.tdRight}>
          <span className={style.value}>{isPlaying ? 'Yes' : 'No'}</span>
        </div>
        <div></div>
      </div>

      <div className={style.tr}>
        <div className={style.tdLeft}>
          <label>Volume</label>
        </div>
        <div className={style.tdRight}>
          <span className={style.value}>{volume}</span>
          dB
        </div>
      </div>

      <div className={style.tr}>
        <div className={style.tdLeft}>
          <label>Base Freq</label>
        </div>
        <div className={style.tdRight}>
          <span className={style.value}>{baseFreq}</span>
          Hz
        </div>
      </div>

      <div className={style.tr}>
        <div className={style.tdLeft}>
          <label>Harmony Freq</label>
        </div>
        <div className={style.tdRight}>
          <span className={style.value}>{harmonyFreq}</span>
          Hz
        </div>
      </div>

      <div className={style.tr}>
        <div className={style.tdLeft}>
          <label>Beat Freq</label>
        </div>
        <div className={style.tdRight}>
          <span className={style.value}>{beatFreq}</span>
          Hz
        </div>
      </div>

      <div className={style.tr}>
        <div className={style.tdLeft}>
          <label>Base Pan</label>
        </div>
        <div className={style.tdRight}>
          <span className={style.value}>{basePan ?? '_'}</span>
        </div>
      </div>

      <div className={style.tr}>
        <div className={style.tdLeft}>
          <label>Harmony Pan</label>
        </div>
        <div className={style.tdRight}>
          <span className={style.value}>{harmonyPan ?? '_'}</span>
        </div>
      </div>
    </div>
  )
}

export default Debug
