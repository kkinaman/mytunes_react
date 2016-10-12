class App extends React.Component {

  constructor(props) {
    super(props);

    this.state= {
      songList: [],
      queueList: [],
      curSong: []
    };
  }

  setSongs(data) {
    this.setState({
      songList: data,
      curSong: data[0]
    })
  }

  componentDidMount() {
    return this.props.gatherSongFunc((data) => { this.setSongs(data); });
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div id='player' className='col-md-12'>
            <Player curSong={this.state.curSong}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <table id='library'>
              <Library onClickFunc={this.onLibSongClick.bind(this)} songList={this.state.songList}/>
            </table>
          </div>
          <div className='col-md-6'>
            <table id='queue'>
              <Queue onClickFunc={this.onQueueSongClick.bind(this)} queueList={this.state.queueList}/>
            </table>
          </div>
        </div>
      </div>
    );
  }

  onLibSongClick (event) {
    var song = JSON.parse(event.target.parentElement.dataset.song);
    this.state.queueList.push(song);
    if (this.state.queueList.length === 1) {
      this.setState({
        curSong: song
      });
    } else {
      this.setState({
        queueList: this.state.queueList
      });
    }
  }

  onQueueSongClick (event) {
    debugger;
    var song = JSON.parse(event.target.parentElement.dataset.song);
    //remove this song from queue
    var newQueueList = this.state.queueList.filter(function(curSong) {
      return curSong.objectId !== song.objectId;
    });
    //put shift back at beginning of array
    newQueueList.unshift(song);
    this.setState({
      curSong: song,
      queueList: newQueueList
    });
  }
}