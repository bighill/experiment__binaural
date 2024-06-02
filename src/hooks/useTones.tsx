import { useState, useEffect, useRef } from 'react'
import * as Tone from 'tone'

import { Frequency } from '../type'

function useTones() {
  const [hasToneInit, setHasToneInit] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(-20)
  const [freq, setFreq] = useState<Frequency>({
    base: 440,
    harmony: 550,
  })

  /**
   * Set these vars here
   * Don't instantiate before user interaction
   */
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
        synthLeft.current = new Tone.Synth({ volume: volume }).toDestination()
        synthRight.current = new Tone.Synth({ volume: volume }).toDestination()
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
   * Set volume
   */
  useEffect(() => {
    if (isPlaying && synthLeft.current && synthRight.current) {
      synthLeft.current.volume.setValueAtTime(volume, Tone.now())
      synthRight.current.volume.setValueAtTime(volume, Tone.now())
    }
  }, [volume])

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
  // TODO convert status report to Debug component
  useEffect(() => {
    const status = {
      hasToneInit,
      isPlaying,
      volume,
      pan: {
        base: panLeft.current?.pan.value,
        harmony: panRight.current?.pan.value,
      },
      freq,
    }
    console.table(status)
  }, [hasToneInit, isPlaying, volume, freq, panLeft, panRight])

  return {
    volume,
    setVolume,
    isPlaying,
    setIsPlaying,
    freq,
    setFreq,
  }
}

export default useTones
