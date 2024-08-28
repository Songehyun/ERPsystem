import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-blue-900 text-white p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <a href="/" className="hover:text-gray-300">
              신규코드등록
            </a>
          </li>
          <li className="mb-4">
            <a href="/" className="hover:text-gray-300">
              입고등록
            </a>
          </li>
          <li className="mb-4">
            <a href="/" className="hover:text-gray-300">
              출고관리(제품)
            </a>
          </li>
          <li className="mb-4">
            <a href="/" className="hover:text-gray-300">
              출고관리(소모품)
            </a>
          </li>
          <li className="mb-4">
            <a href="/" className="hover:text-gray-300">
              재고조회
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
