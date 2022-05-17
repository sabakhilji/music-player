import logo from './logo.svg';
import './App.css';
import React from "react";
import { MusicPlayerProvider } from './Context/MusicPlayerContext';
import TrackList from './Component/TrackList';
import PlayerControls from './Component/PlayerControl';
const App=()=> {
  return (
    <div className="App">
      <header className="App-header">
        <MusicPlayerProvider>
        <div className='container'>
          <TrackList></TrackList>
          <PlayerControls />
        </div>
        </MusicPlayerProvider>
        
      </header>
    </div>
  );
}

export default App;