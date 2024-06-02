import { useState, useEffect, useRef } from 'react'
import * as Tone from 'tone'

function useTones() {
  const [hasToneInit, setHasToneInit] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(-20)
  const [baseFreq, setBaseFreq] = useState(100)
  const [harmonyFreq, setHarmonyFreq] = useState(110)
  const [beatFreq, setBeatFreq] = useState(10)

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
        synthLeft.current.triggerAttack(baseFreq)
        synthRight.current.triggerAttack(harmonyFreq)
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
      synthLeft.current.frequency.setValueAtTime(baseFreq, Tone.now())
    }
  }, [baseFreq])

  /**
   * Set harmony frequency
   */
  useEffect(() => {
    if (isPlaying && synthRight.current) {
      synthRight.current.frequency.setValueAtTime(harmonyFreq, Tone.now())
    }
  }, [harmonyFreq])

  /**
   * Set beat frequency
   */
  useEffect(() => {
    if (isPlaying && synthLeft.current && synthRight.current) {
      const _harmonyFreq = baseFreq + beatFreq
      synthRight.current.frequency.setValueAtTime(_harmonyFreq, Tone.now())
      setHarmonyFreq(_harmonyFreq)
      console.log(_harmonyFreq)
    }
  }, [baseFreq, beatFreq])

  return {
    hasToneInit,
    isPlaying,
    setIsPlaying,
    volume,
    setVolume,
    basePan: panLeft.current?.pan.value,
    harmonyPan: panRight.current?.pan.value,
    baseFreq,
    setBaseFreq,
    harmonyFreq,
    setHarmonyFreq,
    beatFreq,
    setBeatFreq,
  }
}

export default useTones
