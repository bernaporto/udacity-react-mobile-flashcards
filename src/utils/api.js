import { AsyncStorage } from 'react-native';
import { generateUID } from './utils';

export const StorageKey = {
  DECK_LIST: 'Flashcards:DECK_LIST',
};

function getApi() {
  return {
    async create(data) {
      const id = generateUID();
      const entry = { ...data, id };

      await AsyncStorage.mergeItem(
        StorageKey.DECK_LIST,
        JSON.stringify({
          [id]: entry,
        }),
      );

      return entry;
    },

    async readAll() {
      const result = await AsyncStorage.getItem(StorageKey.DECK_LIST);
      return JSON.parse(result);
    },

    delete(id) {
      return AsyncStorage.getItem(StorageKey.DECK_LIST)
        .then((results) => {
          const data = JSON.parse(results);
          delete data[id];

          AsyncStorage.setItem(
            StorageKey.DECK_LIST,
            JSON.stringify(data)
          );
        });
    }
  }
};

export default getApi();
