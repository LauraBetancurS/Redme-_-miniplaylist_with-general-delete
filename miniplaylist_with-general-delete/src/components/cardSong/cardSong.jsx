const CardSong = ({ song, onLike, onRemove, onDelete }) => {
  return (
    <div className="component-cardsong">
      <img src={song.artworkUrl100} alt={song.trackName} />
      <h1>{song.trackName}</h1>
      <p>{song.artistName}</p>

      {/* Botón en lista principal */}
      {onLike && <button onClick={() => onLike(song)}>Me gusta</button>}

      {/* Delete solo en lista principal */}
      {onDelete && <button onClick={() => onDelete(song)}>Delete</button>}

      {/* Quitar solo en favoritos */}
      {onRemove && <button onClick={() => onRemove(song)}>Quitar</button>}
    </div>
  );
};

export default CardSong;
