import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../dataSlice'
import { persistReducer, } from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import persistStore from 'redux-persist/es/persistStore';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, dataReducer)

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]

})

export const persistor = persistStore(store)