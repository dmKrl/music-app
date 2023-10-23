import { createContext } from 'react';

const BarPlayerContext = createContext({
  showInfoAboutTrack: {
    name: '',
    author: '',
    track_file: '',
  },
  isShowing: false,
  changeBarPlayerInfo: () => {},
  changeIsShowing: () => {},
});

export default BarPlayerContext;
