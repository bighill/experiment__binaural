import { useState, useEffect, useRef } from 'react'
import * as Tone from 'tone'

function useTones() {
  const [hasToneInit, setHasToneInit] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(-10)
  const [oscillator, setOscillator] = useState<OscillatorType>('sine')
  const [baseFreq, setBaseFreq] = useState(100)
  const [harmonyFreq, setHarmonyFreq] = useState(102)
  const [beatFreq, setBeatFreq] = useState(2)

  /**
   * Set these vars here
   * Don't instantiate before user interaction
   */
  const synthLeft = useRef<Tone.Synth | null>(null)
  const synthRight = useRef<Tone.Synth | null>(null)
  const panLeft = useRef<Tone.Panner | null>(null)
  const panRight = useRef<Tone.Panner | null>(null)

  /**
   * Handle init synth tones
   */
  const handleInitSynth = () => {
    if (synthLeft.current && synthRight.current) {
      synthLeft.current.dispose()
      synthRight.current.dispose()
    }

    Tone.start().then(() => {
      synthLeft.current = new Tone.Synth({
        volume: volume,
        oscillator: { type: oscillator },
      }).toDestination()

      synthRight.current = new Tone.Synth({
        volume: volume,
        oscillator: { type: oscillator },
      }).toDestination()

      panLeft.current = new Tone.Panner(-1).toDestination()
      panRight.current = new Tone.Panner(1).toDestination()
      synthLeft.current.connect(panLeft.current)
      synthRight.current.connect(panRight.current)

      setHasToneInit(true)
      handlePlayPause()
    })
  }

  /**
   * Handle play/pause synth tones
   */
  const handlePlayPause = () => {
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
      handleInitSynth()
    } else {
      handlePlayPause()
    }

    return () => {
      if (synthLeft.current && synthRight.current) {
        synthLeft.current.triggerRelease()
        synthRight.current.triggerRelease()
      }
    }
  }, [isPlaying])

  /**
   * Update volume
   */
  useEffect(() => {
    if (isPlaying && synthLeft.current && synthRight.current) {
      synthLeft.current.volume.setValueAtTime(volume, Tone.now())
      synthRight.current.volume.setValueAtTime(volume, Tone.now())
    }
  }, [volume])

  /**
   * Update oscillator
   */
  useEffect(() => {
    if (isPlaying && synthLeft.current && synthRight.current) {
      handleInitSynth()
    }
  }, [oscillator])

  /**
   * Update base frequency
   */
  useEffect(() => {
    if (isPlaying && synthLeft.current) {
      synthLeft.current.frequency.setValueAtTime(baseFreq, Tone.now())
    }
  }, [baseFreq])

  /**
   * Update harmony frequency
   */
  useEffect(() => {
    if (isPlaying && synthRight.current) {
      synthRight.current.frequency.setValueAtTime(harmonyFreq, Tone.now())
    }
  }, [harmonyFreq])

  /**
   * Update beat frequency
   */
  useEffect(() => {
    const _harmonyFreq = baseFreq + beatFreq
    setHarmonyFreq(_harmonyFreq)
    if (isPlaying && synthLeft.current && synthRight.current) {
      synthRight.current.frequency.setValueAtTime(_harmonyFreq, Tone.now())
    }
  }, [baseFreq, beatFreq])

  return {
    hasToneInit,
    isPlaying,
    setIsPlaying,
    volume,
    setVolume,
    oscillator,
    setOscillator,
    basePan: panLeft.current?.pan.value,
    harmonyPan: panRight.current?.pan.value,
    baseFreq,
    setBaseFreq,
    harmonyFreq,
    beatFreq,
    setBeatFreq,
  }
}

export default useTones
