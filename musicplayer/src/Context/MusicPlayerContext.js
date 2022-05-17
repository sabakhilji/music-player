import React,{useState} from "react";

const MusicPlayerContext=React.createContext([{},()=>{}]);

const MusicPlayerProvider=(props)=>{
    const [state,setState]=useState({
        audioPlayer:new Audio(),
        tracks:[
       { name:'track1',url:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'},
       {name:"track2",url:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'},
       {name:"track3",url:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'},
       
    ],
    currentTrackIndex:null,
    isPlaying:false,
    })
    return(
        <MusicPlayerContext.Provider value={[state,setState]}>{props.children}
        </MusicPlayerContext.Provider>
    );
};

export  {MusicPlayerContext,MusicPlayerProvider}
