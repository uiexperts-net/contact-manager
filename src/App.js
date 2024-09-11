// src/App.js
import React, { useState, useEffect } from 'react';
import { addItem, getItems } from './indexedDB';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems();
      setItems(allItems);
    };
    fetchItems();
  }, []);

  const handleAddItem = async () => {
    if (newItem) {
      await addItem({ name: newItem });
      setNewItem('');
      const allItems = await getItems();
      setItems(allItems);
    }
  };

  return (
    <div>
      <h1>IndexedDB with React</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
