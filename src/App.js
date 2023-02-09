import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './config/store';
import Navigation from './Navigations';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <SafeAreaProvider>
        <Provider store={store}>
        <Navigation/>
        </Provider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
export default App;