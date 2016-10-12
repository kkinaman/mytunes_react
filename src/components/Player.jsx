var Player = (props) => (
  <div>
    <audio controls autoPlay id="musicPlayer" src={props.curSong.url}/>
    <div>
      Currently playing: {props.curSong.title} ({props.curSong.artist})
    </div>
  </div>
);