import React from 'react';

const InventoryTable = ({ inventory }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-300">품목코드</th>
            <th className="p-2 border border-gray-300">출고업체</th>
            <th className="p-2 border border-gray-300">제품명</th>
            <th className="p-2 border border-gray-300">출고예정일</th>
            <th className="p-2 border border-gray-300">출고수량</th>
            <th className="p-2 border border-gray-300">재고수량</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.InventoryID} className="text-center">
              <td className="p-2 border border-gray-300">{item.ItemName}</td>
              <td className="p-2 border border-gray-300">{item.Quantity} 개</td>
              <td className="p-2 border border-gray-300">
                {item.Price.toLocaleString()} 원
              </td>
              <td className="p-2 border border-gray-300">2024-02-26</td>
              <td className="p-2 border border-gray-300">{item.Quantity} 개</td>
              <td className="p-2 border border-gray-300">1 개</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
