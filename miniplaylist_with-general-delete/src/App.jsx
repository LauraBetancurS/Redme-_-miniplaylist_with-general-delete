import CardSongList from "./components/cardSongList/cardSongList.jsx";
import { useState, useEffect } from "react";

function App() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");
  const [likedSongs, setLikedSongs] = useState([]);

  const filteredSongs = songs.filter((song) =>
    song.trackName.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetch('https://itunes.apple.com/search?term=12&entity=song&limit=12')
      .then((res) => res.json())
      .then((data) => setSongs(data.results));
  }, []);

  // Agregar a favoritos y quitar de la lista principal
  function handleLike(song) {
    setLikedSongs((prev) => [...prev, song]);
    setSongs((prev) => prev.filter((s) => s.trackId !== song.trackId));
  }

  // Quitar de favoritos (no vuelve a la lista principal)
  function handleRemoveFavorite(song) {
    setLikedSongs((prev) => prev.filter((s) => s.trackId !== song.trackId));
  }

  // Delete en la lista principal (borra de songs)
  function handleDeleteSong(song) {
    setSongs((prev) => prev.filter((s) => s.trackId !== song.trackId));
  }

  return (
    <div>
      <header></header>
      <main>
        <input
          type="text"
          placeholder="Buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Lista principal: like + delete */}
        <CardSongList
          songs={filteredSongs}
          onLike={handleLike}
          onDelete={handleDeleteSong}
        />
<h1>LIKED SONGS</h1>
        {/* LIKED SONGS: solo si hay favoritas */}
        {likedSongs.length > 0 && (
          <>
            
            {/* En favoritos solo pasamos onRemove */}
            <CardSongList
              songs={likedSongs}
              onRemove={handleRemoveFavorite}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
