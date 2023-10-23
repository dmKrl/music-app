import { createContext } from 'react';

const TracksContext = createContext({
  allTracks: [],
  changeIsLoading: () => {},
});

export default TracksContext;
