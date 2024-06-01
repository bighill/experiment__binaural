import { useState, useEffect, useRef } from 'react'
import * as Tone from 'tone'

import { Frequency } from '../type'

const useTones = () => {
  const [hasToneInit, setHasToneInit] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [freq, setFreq] = useState<Frequency>({
    base: 440,
    harmony: 550,
  })

  const synthLeft = useRef<Tone.Synth | null>(null)
  const synthRight = useRef<Tone.Synth | null>(null)
  const panLeft = useRef<Tone.Panner | null>(null)
  const panRight = useRef<Tone.Panner | null>(null)

  /**
   * Handle update synth
   */
  const handleUpdateSynth = () => {
    if (isPlaying) {
      if (synthLeft.current && synthRight.current) {
        synthLeft.current.triggerAttack(freq.base)
        synthRight.current.triggerAttack(freq.harmony)
      } else {
        console.error('no synth')
      }
    } else {
      if (synthLeft.current && synthRight.current) {
        synthLeft.current.triggerRelease()
        synthRight.current.triggerRelease()
      }
    }
  }

  /**
   * Play / Pause
   */
  useEffect(() => {
    if (isPlaying && !hasToneInit) {
      console.log('instantiate tone... this should only happen once')
      Tone.start().then(() => {
        synthLeft.current = new Tone.Synth().toDestination()
        synthRight.current = new Tone.Synth().toDestination()
        panLeft.current = new Tone.Panner(-1).toDestination()
        panRight.current = new Tone.Panner(1).toDestination()
        synthLeft.current.connect(panLeft.current)
        synthRight.current.connect(panRight.current)

        setHasToneInit(true)
        handleUpdateSynth()
      })
    } else {
      handleUpdateSynth()
    }

    return () => {
      if (synthLeft.current && synthRight.current) {
        synthLeft.current.triggerRelease()
        synthRight.current.triggerRelease()
      }
    }
  }, [isPlaying])

  /**
   * Set base frequency
   */
  useEffect(() => {
    if (isPlaying && synthLeft.current) {
      synthLeft.current.frequency.setValueAtTime(freq.base, Tone.now())
    }
  }, [freq.base])

  /**
   * Set harmony frequency
   */
  useEffect(() => {
    if (isPlaying && synthRight.current) {
      synthRight.current.frequency.setValueAtTime(freq.harmony, Tone.now())
    }
  }, [freq.harmony])

  /**
   * Status report
   */
  useEffect(() => {
    const status = {
      hasToneInit,
      isPlaying,
      freq,
      pan: {
        base: panLeft.current?.pan.value,
        harmony: panRight.current?.pan.value,
      },
    }
    console.table(status)
  }, [hasToneInit, isPlaying, freq, panLeft, panRight])

  return {
    isPlaying,
    setIsPlaying,
    freq,
    setFreq,
  }
}

export default useTones
