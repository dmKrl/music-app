import { createContext } from 'react';

const TracksContext = createContext({
  allTracks: [],
  changeTracks: () => {},
});

export default TracksContext;
