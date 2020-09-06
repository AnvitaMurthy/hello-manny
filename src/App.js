import React from 'react';
import logo from './logo.svg';
import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import m1 from './m1.mp4';
import m2 from './m2.mp4';
import m3 from './m3.mp4';
import m4 from './m4.mp4';
import m5 from './m5.mp4';
import m7 from './m7.mp4';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    play={true}
    // cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src={m1}  />
    <div data-src={m2} />
    <div data-src={m3} />
    <div data-src={m4} />
    <div data-src={m5} />
    <div data-src={m7} />

    
  </AutoplaySlider>
);

function App() {
  return (
    slider
  );
}

export default App;
