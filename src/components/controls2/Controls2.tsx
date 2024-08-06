import style from './Controls2.module.css'

interface Props {
  beatFreq: number
  setBeatFreq: (beatFreq: number) => void
}

function Controls2({ beatFreq, setBeatFreq }: Props) {
  return (
    <div className={style.controls2}>
      <div className={style.left}>
        <div>Gamma</div>
        <div>Beta</div>
        <div>Alpha</div>
        <div>Theta</div>
        <div>Delta</div>
      </div>
      <div className={style.center}>
        <div
          className={style.trigger}
          onClick={() => setBeatFreq(beatFreq + 1)}
        >
          trigger
          {/* TODO click/tap to set beatFreq */}
          {/* TODO drag to set beatFreq */}
        </div>
      </div>
      <div className={style.right}>
        {/* TODO scale height to match trigger */}
        <div>30-100Hz</div>
        <div>14-30Hz</div>
        <div>8-14Hz</div>
        <div>4-8Hz</div>
        <div>1-4Hz</div>
      </div>
    </div>
  )
}

export default Controls2
