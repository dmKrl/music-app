import { createContext } from 'react';

const BarPlayerContext = createContext({
  showInfoAboutTrack: {
    name: '',
    author: '',
  },
  isShowing: false,
  changeBarPlayerInfo: () => {},
  changeIsShowing: () => {},
});

export default BarPlayerContext;
