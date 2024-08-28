import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-blue-900 text-white p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/new-code-register" className="hover:text-gray-300">
              신규코드등록
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/stock-management" className="hover:text-gray-300">
              입고등록
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/product-management" className="hover:text-gray-300">
              출고관리(제품)
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/consumable-management" className="hover:text-gray-300">
              출고관리(소모품)
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/inventory-view" className="hover:text-gray-300">
              재고조회
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
