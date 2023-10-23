import { createContext } from 'react';

const IsLoadingPageContext = createContext({
  isLoading: Boolean(),
  changeIsLoading: () => {},
});

export default IsLoadingPageContext;
