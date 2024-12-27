import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

function ProductPage() {
  const [items, setItems] = useState([]);  // 存儲商品資料
  const [loading, setLoading] = useState(true);  // 設定加載狀態

  // 使用 useEffect 在元件加載時請求商品資料
  useEffect(() => {
    // 向後端 API 發送請求
    axios.get('http://localhost:8080/api/items')
      .then(response => {
        setItems(response.data);  // 設定商品資料
        console.log(response.data);  // 確認是否正確收到資料
  console.log(response.data);  // 在 useEffect 內部，查看返回的資料
        setLoading(false);  // 完成請求，設定加載狀態為 false
      })
      .catch(error => {
        console.error('Error fetching items:', error);
        setLoading(false);  // 請求失敗，設定加載狀態為 false
      });
  }, []);  // 空陣列，確保只有第一次渲染時請求

  if (loading) {
    return <div>Loading...</div>;  // 顯示加載中的提示
  }

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h3" style={{ textAlign: 'center' }}>商品列表</Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {items.map(item => (
          <Card key={item.itemNo} style={{ maxWidth: 345 }}>
            {/* 商品圖片 */}
            <CardMedia
             component="img"
             alt={item.itemName}  // 圖片的描述
             height="200"
             image={`http://localhost:8080/api/images/${item.itemNo}`} // 使用 item.itemNo 來獲取圖片
             title={item.itemName}  // 圖片的標題
             onError={(e) => {
               e.target.onerror = null;  // 防止死循環
               e.target.src = "https://via.placeholder.com/200";  // 設定一個占位符圖片
             }}
           />
            <CardContent>
              <Typography variant="h5" component="div">
                {item.itemName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.saleDesc}
              </Typography>
              <Typography variant="h6">
                ¥{item.price}
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                加入購物車
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
