const express = require('express');
const sql = require('mssql');
const cors = require('cors'); // cors 라이브러리 추가
const bodyParser = require('body-parser'); // body-parser 추가
const app = express();
const port = 3000;

// CORS 설정 추가
app.use(cors());

// body-parser 설정 추가 (POST 요청에서 데이터를 파싱하기 위해 필요)
app.use(bodyParser.json());

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

    // GET 요청 처리 - 재고 목록 가져오기
    app.get('/api/inventory', async (req, res) => {
      try {
        const result = await pool.request().query('SELECT * FROM Inventory');
        res.json(result.recordset);
      } catch (err) {
        res.status(500).send(err.message);
      }
    });

    // POST 요청 처리 - 재고 항목 추가하기
    app.post('/api/inventory', async (req, res) => {
      try {
        console.log(req.body); // 들어오는 데이터 출력
        const { ItemName, Quantity, Price } = req.body;

        await pool
          .request()
          .input('ItemName', sql.NVarChar, ItemName)
          .input('Quantity', sql.Int, Quantity)
          .input('Price', sql.Money, Price)
          .query(
            'INSERT INTO Inventory (ItemName, Quantity, Price) VALUES (@ItemName, @Quantity, @Price)',
          );
        res.status(200).send('Item added successfully');
      } catch (err) {
        console.error(err.message); // 오류 메시지 출력
        res.status(500).send(err.message);
      }
    });
  })
  .catch((err) => console.error('Database Connection Failed!', err));

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
