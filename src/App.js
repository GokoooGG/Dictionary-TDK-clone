import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';

import SearchView from './view/Search';
import History from './view/History';
import FavoriteView from './view/Favorite';
import DetailView from './view/Detail';
import TabBar from "./component/tab-bar";
import Box from './component/box';
import theme from './utils/theme';


const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Search" component={SearchView} options={{ headerTitleAlign: 'center' }} />
      <HomeStack.Screen name="Detail" component={DetailView} options={{ headerTitleAlign: 'center' }}/>
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName='SearchHome' tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="History" component={History} options={{ headerTitleAlign: 'center' }} />
            <Tab.Screen name="SearchHome" component={SearchStack} options={{
              headerShown: false
            }} />
            <Tab.Screen name="Favorite" component={FavoriteView} options={{ headerTitleAlign: 'center' }} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>


  );
}
export default App;