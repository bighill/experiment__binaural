import { useState, useEffect, useRef } from 'react'
import * as Tone from 'tone'

const useTones = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasToneInit, setHasToneInit] = useState(false)
  const [frequency1, setFrequency1] = useState(440)
  const [frequency2, setFrequency2] = useState(550)
  const synth1 = useRef<Tone.Synth | null>(null)
  const synth2 = useRef<Tone.Synth | null>(null)

  useEffect(() => {
    console.log({ isPlaying, hasToneInit })

    if (isPlaying && !hasToneInit) {
      console.log('instantiate tone... this should only happen once')
      Tone.start().then(() => {
        synth1.current = new Tone.Synth().toDestination()
        synth2.current = new Tone.Synth().toDestination()
        setHasToneInit(true)
      })
    }
  }, [isPlaying, hasToneInit])

  useEffect(() => {
    if (isPlaying) {
      if (synth1.current && synth2.current) {
        synth1.current.triggerAttack(frequency1)
        synth2.current.triggerAttack(frequency2)
        console.log('synth exists', { frequency1, frequency2 })
      } else {
        console.log('no synth')
      }
    } else {
      if (synth1.current && synth2.current) {
        synth1.current.triggerRelease()
        synth2.current.triggerRelease()
      }
    }

    return () => {
      if (synth1.current && synth2.current) {
        synth1.current.dispose()
        synth2.current.dispose()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (isPlaying && synth1.current) {
      synth1.current.frequency.setValueAtTime(frequency1, Tone.now())
    }
  }, [frequency1])

  useEffect(() => {
    if (isPlaying && synth2.current) {
      synth2.current.frequency.setValueAtTime(frequency2, Tone.now())
    }
  }, [frequency2])

  return {
    isPlaying,
    setIsPlaying,
    frequency1,
    setFrequency1,
    frequency2,
    setFrequency2,
  }
}

export default useTones
