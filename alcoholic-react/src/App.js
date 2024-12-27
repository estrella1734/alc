import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  TextField,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  const [products, setProducts] = useState([]); // 存儲商品資料
  const [cart, setCart] = useState([]); // 存儲購物車資料

  // 使用 useEffect 在元件載入時獲取商品資料
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/items'); // 從後端 API 獲取商品資料
        if (!response.ok) {
          throw new Error('無法獲取商品資料');
        }
        const data = await response.json();
        setProducts(data); // 將取得的商品資料儲存到 state 中
      } catch (error) {
        console.error('獲取商品資料時發生錯誤:', error);
      }
    };

    fetchProducts();
  }, []); // 空依賴陣列，確保只在元件第一次載入時呼叫一次 API

  // 加入商品到購物車
  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => [
      ...prevCart,
      { ...product, quantity: Number(quantity) },
    ]);
    alert(`${quantity} 件 ${product.itemName} 已加入購物車！`);
  };

  return (
    <div style={{ backgroundColor: '#003E3E', minHeight: '100vh' }}>
      {/* 頂部導航欄 */}
      <AppBar position="sticky" style={{ backgroundColor: '#005757' }}>
        <Toolbar>
          <Typography
            variant="h4"
            style={{
              flexGrow: 1, // 讓文字佔據所有可用空間
              fontWeight: 'bold', // 加粗字體
              color: '#E0E0E0', // 字體顏色
              backgroundColor: '#005757', // 背景顏色
              textAlign: 'center', // 文字置中
            }}
          >
            申野酒品團購
          </Typography>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 商品卡片區域 */}
      <Grid container spacing={3} style={{ padding: '20px' }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.itemNo}>
            <Card style={{ maxWidth: 345 }}>
              {/* 商品圖片 */}
              <CardMedia
                component="img"
                alt={product.itemName}
                height="200"
                image={product.itemNo || 'https://via.placeholder.com/300'} // 若無圖片則顯示預設圖片
              />
              {/* 商品內容 */}
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {product.itemName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.saleDesc}
                </Typography>
                <Typography variant="h5" style={{ margin: '10px 0' }}>
                  NT${product.price}
                </Typography>
              </CardContent>
              {/* 操作按鈕 */}
              <CardActions>
                <TextField
                  label="數量"
                  type="number"
                  defaultValue={1}
                  InputProps={{ inputProps: { min: 1 } }}
                  style={{ width: '80px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    const quantity = e.currentTarget.previousSibling.value;
                    handleAddToCart(product, quantity);
                  }}
                >
                  加入購物車
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
