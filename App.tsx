import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store'

function App() {
  return (
      <StoreProvider store={store}>
        <Navigation />
      </StoreProvider>
  );
}

export default App;
