var Library = (props) => (
  <tbody>
    <tr><th>Library</th></tr>
    {
      props.songList.map(song =>  <Song song={song} onClickFunc={props.onClickFunc}/>)
    }
  </tbody>
);