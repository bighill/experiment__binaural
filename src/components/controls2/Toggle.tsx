import Card from './Card2'
import style from './Toggle.module.css'

interface ToggleProps {
  isPlaying: boolean
  setIsPlaying: (value: boolean) => void
}

export const Toggle = ({ isPlaying, setIsPlaying }: ToggleProps) => {
  return (
    <Card isBtn>
      <div className={style.toggle} onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </div>
    </Card>
  )
}
