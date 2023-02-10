import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react'

import { store,persistor} from './config/store';
import Navigation from './Navigations';
import theme from './utils/theme';


function App() {

  return (
    <ThemeProvider theme={theme} >
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor} >
            <Navigation />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
export default App;