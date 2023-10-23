import { createContext } from 'react';

const BarPlayerContext = createContext({
  showInfoAboutTrack: {
    name: '',
    author: '',
  },
  changeBarPlayerInfo: () => {},
});

export default BarPlayerContext;
