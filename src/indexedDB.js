// src/indexedDB.js
import { openDB } from 'idb';

// Define database name and version
const DB_NAME = 'my-database';
const DB_VERSION = 1;

// Open or create a new database
export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // Create an object store with a key path
      const store = db.createObjectStore('items', {
        keyPath: 'id',
        autoIncrement: true
      });
      // Create an index
      store.createIndex('name', 'name');
    },
  });
};

// Add item to IndexedDB
export const addItem = async (item) => {
  const db = await initDB();
  return db.add('items', item);
};

// Get all items from IndexedDB
export const getItems = async () => {
  const db = await initDB();
  return db.getAll('items');
};
