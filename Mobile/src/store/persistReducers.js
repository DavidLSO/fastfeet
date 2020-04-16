import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'Fastfeet',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'problems', 'deliverie'],
    },
    reducers,
  );

  return persistedReducer;
};
