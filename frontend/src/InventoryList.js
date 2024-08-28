import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import InventoryForm from './InventoryForm';
import InventoryTable from './InventoryTable';

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);
  const [page, setPage] = useState(1); // 현재 페이지 상태
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수

  const fetchData = (page) => {
    axios
      .get('http://localhost:3000/api/inventory', {
        params: { page, limit: 15 },
      })
      .then((response) => {
        setInventory(response.data.items);
        setTotalPages(Math.ceil(response.data.totalItems / 15)); // 전체 페이지 수 계산
      })
      .catch((error) => {
        console.error('There was an error fetching the inventory!', error);
      });
  };

  useEffect(() => {
    fetchData(page); // 페이지 로드 시 데이터 가져오기
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-4/5 p-4 bg-gray-100">
        <Header />
        <InventoryForm fetchData={() => fetchData(page)} />
        <InventoryTable inventory={inventory} />
        <div className="mt-4 flex justify-center space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            이전
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-4 py-2 ${
                page === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              } rounded`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryList;
