# Binaural Beats Generator

Audio

- Play two tones that are slightly out of tune
- Do the math to figure out tone frequencies that produce a desired beat frequency

Canvas

- Visual representation of the two wave forms in real time
- Use canvas or [Victory](https://commerce.nearform.com/open-source/victory/docs)

UI

- Control a general base frequency
  - Base freq hard-panned left
  - Harmony freq hard-panned right
- Control the difference between two tones to produce varying beat frequencies
- Use [Tone.js](https://tonejs.github.io/)

## Resources

[webmd: What are binaural beats?](https://www.webmd.com/balance/what-are-binaural-beats)

### 5 Brain wave frequencies

Gamma

- 30-100Hz
- Increased cognitive enhancement
- Attention to detail, helping in memory recall
- A different way of thinking, which is a sign of creativity

Beta

- 14-30Hz
- Keeping your attention focused
- Analytical thinking and solving problems
- Stimulating energy and action
- High-level cognition

Alpha

- 8-14Hz
- Relaxed, focused, and productive
- Easily engage in activities and the environment because you are in a state of flow

Theta

- 4-8Hz
- Meditation
- Deep relaxation
- Creativity

Delta

- 1-4Hz
- Deep sleep
- Anti-aging: cortisol reduction/DHEA increase
- Access to the unconscious mind

## Project

NOTE strongly consider managing state through dexie

- possibly two versions of the audio engine
- one as-is via hooks and another via indexeddb
- react router to nav between them

NOTE maybe a visual pulse that matches the beat, experiment

TODO refactor UI

- research by hacking at these

  - react

    - MUI material-ui https://mui.com/material-ui/react-slider/
    - MUI base-ui (w/out mui styles) https://mui.com/base-ui/react-slider/
    - https://zillow.github.io/react-slider/
    - https://github.com/n3r4zzurr0/range-slider-input#styling

  - canvas
    - https://github.com/akalverboer/CanvasSlider
    - https://codepen.io/weslito/pen/Vwzpoa
    - canvas custom
