export default function shuffleTracks({ allTracks }) {
  const randomAllTracks = Array.from(allTracks);
  let currentIndex = randomAllTracks.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = randomAllTracks[currentIndex];
    randomAllTracks[currentIndex] = randomAllTracks[randomIndex];
    randomAllTracks[randomIndex] = temporaryValue;
  }

  return randomAllTracks;
}
