// Sample music data (replace later with backend API)
const musicLibrary = [
  {
    id: 1,
    title: "Sunny Day",
    artist: "FreeBeat",
    file: "assets/music/sunny-day.mp3",
  },
  {
    id: 2,
    title: "Night Sky",
    artist: "OpenTune",
    file: "assets/music/night-sky.mp3",
  },
];

const musicContainer = document.getElementById("music-library");

musicLibrary.forEach((track) => {
  const musicDiv = document.createElement("div");
  musicDiv.classList.add("music-item");

  musicDiv.innerHTML = `
        <div>
            <strong>${track.title}</strong> by ${track.artist}<br>
            <audio controls src="${track.file}"></audio>
        </div>
        <div>
            <a href="${track.file}" download>Download</a>
        </div>
    `;

  musicContainer.appendChild(musicDiv);
});
