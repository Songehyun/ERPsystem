import React, { useState } from 'react';
import axios from 'axios';

const InventoryForm = ({ fetchData }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      ItemName: itemName,
      Quantity: quantity,
      Price: price,
    };

    axios
      .post('http://localhost:3000/api/inventory', newItem)
      .then(() => {
        fetchData(); // 새로운 데이터를 가져와 목록을 업데이트
        setItemName('');
        setQuantity('');
        setPrice('');
      })
      .catch((error) => {
        console.error('There was an error adding the item!', error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white shadow-md rounded-lg flex space-x-4"
    >
      <div className="flex-1">
        <label className="block text-gray-700">품목명:</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex-1">
        <label className="block text-gray-700">수량:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex-1">
        <label className="block text-gray-700">가격:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex items-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          추가
        </button>
      </div>
    </form>
  );
};

export default InventoryForm;
