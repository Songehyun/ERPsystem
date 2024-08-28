import React, { useState } from 'react';
import axios from 'axios';

const InventoryForm = ({ fetchData }) => {
  const [newItem, setNewItem] = useState({
    ItemName: '',
    Quantity: '',
    Price: '',
    Location: '',
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/inventory', newItem)
      .then(() => {
        fetchData();
        setNewItem({ ItemName: '', Quantity: '', Price: '', Location: '' });
      })
      .catch((error) => {
        console.error('There was an error adding the inventory!', error);
      });
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-6">
      <h2 className="text-lg font-bold mb-4">새로운 품목 추가</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">품목명</label>
            <input
              type="text"
              name="ItemName"
              value={newItem.ItemName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">수량</label>
            <input
              type="number"
              name="Quantity"
              value={newItem.Quantity}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">가격</label>
            <input
              type="number"
              name="Price"
              value={newItem.Price}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">위치</label>
            <input
              type="text"
              name="Location"
              value={newItem.Location}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          추가
        </button>
      </form>
    </div>
  );
};

export default InventoryForm;
