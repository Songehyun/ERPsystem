import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import InventoryForm from './InventoryForm';
import InventoryTable from './InventoryTable';

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:3000/api/inventory')
      .then((response) => {
        setInventory(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the inventory!', error);
      });
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-4/5 p-4 bg-gray-100">
        <Header />
        <InventoryForm fetchData={fetchData} />
        <InventoryTable inventory={inventory} />
      </div>
    </div>
  );
};

export default InventoryList;
