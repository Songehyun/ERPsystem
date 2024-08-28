const express = require('express');
const sql = require('mssql');
const cors = require('cors'); // cors 라이브러리 추가
const app = express();
const port = 3000;

// CORS 설정 추가
app.use(cors());

const config = {
  user: 'songehyun-erp',
  password: '1234',
  server: 'localhost',
  database: 'ERP_Inventory',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// 데이터베이스 연결
sql
  .connect(config)
  .then((pool) => {
    if (pool.connected) console.log('Connected to MSSQL');

    // 테스트 API 엔드포인트
    app.get('/api/inventory', async (req, res) => {
      try {
        const result = await pool.request().query('SELECT * FROM Inventory');
        res.json(result.recordset);
      } catch (err) {
        res.status(500).send(err.message);
      }
    });
  })
  .catch((err) => console.error('Database Connection Failed!', err));

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
