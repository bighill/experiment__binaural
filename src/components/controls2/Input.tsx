import { MIN_BASE_FREQ, MAX_BASE_FREQ } from './const'
import style from './Input.module.css'

interface InputProps {
  baseFreq: number
  setBaseFreq: (value: number) => void
}

export const Input = ({ baseFreq, setBaseFreq }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    setBaseFreq(value)
  }

  return (
    <input
      type="range"
      min={MIN_BASE_FREQ}
      max={MAX_BASE_FREQ}
      step="1"
      value={baseFreq}
      onChange={handleChange}
      className={style.input}
    />
  )
}
