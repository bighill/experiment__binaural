import { useState } from 'react'

function PlayPause() {
  const [isPlay, setIsPlay] = useState<boolean>(false)

  const handleClick = () => {
    setIsPlay(!isPlay)
  }

  return (
    <div className="btn" onClick={handleClick}>
      {isPlay ? 'Play' : 'Pause'}
    </div>
  )
}

export default PlayPause
