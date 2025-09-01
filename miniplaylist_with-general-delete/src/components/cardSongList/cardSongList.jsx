import CardSong from "./../cardSong/cardSong.jsx";

const cardSongList = ({ songs, onLike, onRemove, onDelete }) => {
  return (
    <div className="component-cardSongList">
      {songs.map((song) => (
        <CardSong
          song={song}
          key={song.trackId}
          onLike={onLike}
          onRemove={onRemove}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default cardSongList;
