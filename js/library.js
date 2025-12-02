const musicLibrary = document.getElementById("music-library");
const searchInput = document.getElementById("search");
const genreFilter = document.getElementById("genreFilter");

/*
THIS WILL LATER COME FROM YOUR BACKEND API !!
*/
const musicData = [
  {
    title: "Sunny Day",
    artist: "FreeBeat",
    genre: "Afrobeats",
    file: "assets/music/sunny-day.mp3",
  },
  {
    title: "Quiet Strings",
    artist: "Strings Pro",
    genre: "Instrumental",
    file: "assets/music/strings.mp3",
  },
  {
    title: "Holy Praise",
    artist: "Heaven Voices",
    genre: "Gospel",
    file: "assets/music/praise.mp3",
  },
  {
    title: "Street Vibes",
    artist: "Urban Flow",
    genre: "Hip-Hop",
    file: "assets/music/hiphop.mp3",
  },
];

function displayMusic(tracks) {
  musicLibrary.innerHTML = "";

  tracks.forEach((track) => {
    const card = document.createElement("div");
    card.classList.add("track");

    card.innerHTML = `
            <h3>${track.title}</h3>
            <p>${track.artist}</p>
            <p class="genre">${track.genre}</p>
            <audio controls src="${track.file}"></audio>
            <a class="download-btn" href="${track.file}" download>Download</a>
        `;

    musicLibrary.appendChild(card);
  });
}

function filterMusic() {
  const searchTerm = searchInput.value.toLowerCase();
  const genre = genreFilter.value;

  let results = musicData.filter(
    (track) =>
      track.title.toLowerCase().includes(searchTerm) ||
      track.artist.toLowerCase().includes(searchTerm)
  );

  if (genre !== "all") {
    results = results.filter((track) => track.genre === genre);
  }

  displayMusic(results);
}

searchInput.addEventListener("input", filterMusic);
genreFilter.addEventListener("change", filterMusic);

displayMusic(musicData);
