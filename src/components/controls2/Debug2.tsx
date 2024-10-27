import Card2 from './Card2'
import style from './Debug2.module.css'

function Debug2({
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
    <Card2>
      <div className={style.table}>
        <div className={style.tr}>
          <div className={style.tdLeft}>Tone Init</div>
          <div className={style.tdMiddle}>{hasToneInit ? 'Yes' : 'No'}</div>
          <div className={style.tdRight}></div>
        </div>

        <div className={style.tr}>
          <div className={style.tdLeft}>Playing</div>
          <div className={style.tdMiddle}>{isPlaying ? 'Yes' : 'No'}</div>
          <div className={style.tdRight}></div>
        </div>

        <div className={style.tr}>
          <div className={style.tdLeft}>Volume</div>
          <div className={style.tdMiddle}>{volume}</div>
          <div className={style.tdRight}>dB</div>
        </div>

        <div className={style.tr}>
          <div className={style.tdLeft}>Base Freq</div>
          <div className={style.tdMiddle}>{baseFreq}</div>
          <div className={style.tdRight}>Hz</div>
        </div>

        <div className={style.tr}>
          <div className={style.tdLeft}>Harmony Freq</div>
          <div className={style.tdMiddle}>{harmonyFreq}</div>
          <div className={style.tdRight}>Hz</div>
        </div>

        <div className={style.tr}>
          <div className={style.tdLeft}>Beat Freq</div>
          <div className={style.tdMiddle}>{beatFreq}</div>
          <div className={style.tdRight}>Hz</div>
        </div>

        <div className={style.tr}>
          <div className={style.tdLeft}>Base Pan</div>
          <div className={style.tdMiddle}>{basePan ?? '_'}</div>
          <div className={style.tdRight}></div>
        </div>

        <div className={style.tr}>
          <div className={style.tdLeft}>Harmony Pan</div>
          <div className={style.tdMiddle}>{harmonyPan ?? '_'}</div>
          <div className={style.tdRight}></div>
        </div>
      </div>
    </Card2>
  )
}

export default Debug2
