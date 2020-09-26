import React, { createRef } from 'react';
import './App.css';
/*
const data = [
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
  { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
  { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
  { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
  { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
  { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
]
*/

const data = [
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'bongo', letter: 'E', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'tom tom', letter: 'A', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass 3', letter: 'S', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'shotgun', letter: 'D', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'high hat', letter: 'Z', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
  { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
]

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    //this.audio = createRef()
    this.handleKeydown = this.handleKeydown.bind(this)
  }
   componentDidMount(){
     document.addEventListener("keydown",this.handleKeydown)
   }

   componentWillUnmount(){
     document.removeEventListener("keydown",this.handleKeydown)
   }

   //use this syntax need binding, use arrow syntax no need binding 
   handleKeydown(e){
     if(e.keyCode===this.props.letter.charCodeAt()){
       this.audio.play();
       this.audio.currentTime = 0;
       console.log(this.audio.parentElement.id);
       this.props.handleDisplay(this.props.id)
     }
   }

   handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    console.log(this.audio.parentElement.id);
    this.props.handleDisplay(this.props.id)
  }
  render () {
    return (
      <div className="drum-pad" 
      id={this.props.id}
      onClick={this.handleClick}
      //onKeyDown={this.handleKeydown}
      >
      <h1>{this.props.letter}</h1>
      <audio className="clip" 
      id={this.props.letter} 
      src={this.props.src}
      ref={ref=>this.audio=ref}
      >
      </audio>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    }
    //this.handleDisplay = this.handleDisplay.bind(this)
  }

  //use arrow syntax no need binding  
  handleDisplay = (display) => this.setState({display})
  //use function declaration syntax need binding  
  //handleDisplay(display){this.setState({display})}
  
  render() {
  return (
    <div className="App" id="drum-machine">
      <div id="display">{!this.state.display?"Dururum durm":this.state.display}</div>
      <div id="drum-pads">{data.map(d=>{
        return <DrumPad 
        key={d.id}
        id={d.id}
        letter={d.letter}
        src={d.src}
        handleDisplay={this.handleDisplay}
        />
      })}
    </div>
    </div>
  )}
}

export default App;

/**
 0. show drum pad
 1. output sound
 2. trigger click
 3. trigger key
 4. output sound name
 */