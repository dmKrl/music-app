import { createContext } from 'react';

const MediaPlayerContext = createContext({
  isShowing: false,
  changeIsShowing: () => {},
});

export default MediaPlayerContext;
