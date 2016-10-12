var Song = (props) => (
  <tr onClick={props.onClickFunc} data-song={JSON.stringify(props.song)}>
    <td>{props.song.artist}</td>
    <td>{props.song.title}</td>
  </tr>
);