import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InventoryList from './InventoryList';
import NewCodeRegister from './NewCodeRegister';
import StockManagement from './StockManagement';
import ProductManagement from './ProductManagement';
import ConsumableManagement from './ConsumableManagement';
import InventoryView from './InventoryView';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<InventoryList />} />
          <Route path="/new-code-register" element={<NewCodeRegister />} />
          <Route path="/stock-management" element={<StockManagement />} />
          <Route path="/product-management" element={<ProductManagement />} />
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
