import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';


import SearchView from './view/Search';
import History from './view/History';
import FavoriteView from './view/Favorite';
import DetailView from './view/Detail';
import TabBar from "./component/tab-bar";
import Box from './component/box';
import theme from './utils/theme';
import Button from './component/button';
import { Left, More } from './component/icons';


const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center' }} >
      <HomeStack.Screen name="Search" component={SearchView} options={{ headerShown: false }} />
      <HomeStack.Screen name="Detail" component={DetailView} options={({ route, navigation }) => {
        return {
          title: (route.params && route.params.title) || 'Boş',
          headerStyle: {
            backgroundColor: theme.colors.softRed,
            shadowColor: 'transparent'
          },
          headerShadowVisible:false,
          headerLeft: () => (
            <Button
              px={20}
              height='100%'
              onPress={() => navigation.navigate('Search')}>
              <Left color={theme.colors.textDark} />
            </Button>
          ),
          headerRight: () => (
            <Button
              px={20}
              height='100%'
              onPress={() => navigation.navigate('Search')}
            >
              <More color={theme.colors.textDark} />
            </Button>
          )
        }
      }}
      />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme} >
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle:{
                backgroundColor:theme.colors.softRed
              }
            }}
            initialRouteName='SearchHome' tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="SearchHome" component={SearchStack} options={{
              headerShown: false
            }} />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>


  );
}
export default App;