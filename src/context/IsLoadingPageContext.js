import { createContext } from 'react';

const IsLoadingPageContext = createContext({
  isLoading: '',
  isLoadingError: '',
  changeIsLoading: () => {},
});

export default IsLoadingPageContext;
