var Queue = (props) => (
  <tbody>
    <tr><th>Queue</th></tr>
    {
      props.queueList.map(song => <Song song={song} onClickFunc={props.onClickFunc}/>)
    }
  </tbody>
);