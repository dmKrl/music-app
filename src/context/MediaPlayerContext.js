import { createContext } from 'react';

const MediaPlayerContext = createContext({
  showInfoAboutTrack: {
    name: '',
    author: '',
    track_file: '',
  },
  isShowing: false,
  changeMediaPlayerInfo: () => {},
  changeIsShowing: () => {},
});

export default MediaPlayerContext;
