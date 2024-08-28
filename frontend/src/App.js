import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InventoryList from './InventoryList'; // InventoryList를 사용
import NewCodeRegister from './NewCodeRegister';
import StockManagement from './StockManagement';
import ConsumableManagement from './ConsumableManagement';
import InventoryView from './InventoryView';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<InventoryList />} /> {/* 메인 페이지 */}
          <Route path="/new-code-register" element={<NewCodeRegister />} />
          <Route path="/stock-management" element={<StockManagement />} />
          <Route path="/product-management" element={<InventoryList />} />{' '}
          {/* 이 경로에 InventoryList 연결 */}
          <Route
            path="/consumable-management"
            element={<ConsumableManagement />}
          />
          <Route path="/inventory-view" element={<InventoryView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
