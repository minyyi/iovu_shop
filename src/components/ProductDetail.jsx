import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Chip,
  Paper,
  Divider,
  Alert,
} from "@mui/material";
import { ArrowBack, ShoppingCart, Favorite } from "@mui/icons-material";

function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const products = [
    {
      id: 1,
      name: "클래식 화이트 티셔츠",
      price: 29000,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      description: "깔끔하고 심플한 기본 티셔츠",
      details:
        "100% 면 소재로 제작된 프리미엄 기본 티셔츠입니다. 편안한 착용감과 깔끔한 디자인으로 일상생활에서 활용하기 좋습니다.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["화이트", "블랙", "네이비"],
    },
    {
      id: 2,
      name: "스트라이프 네이비 티셔츠",
      price: 35000,
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop",
      description: "세련된 스트라이프 패턴의 티셔츠",
      details:
        "클래식한 스트라이프 패턴이 적용된 네이비 티셔츠입니다. 세련된 디자인으로 캐주얼부터 세미포멀까지 다양한 스타일에 매칭 가능합니다.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["네이비", "그레이", "브라운"],
    },
    {
      id: 3,
      name: "그래픽 프린트 티셔츠",
      price: 42000,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop",
      description: "독특한 그래픽이 인상적인 티셔츠",
      details:
        "특별한 그래픽 프린트가 적용된 티셔츠입니다. 개성 있는 디자인으로 스타일리시한 룩을 완성할 수 있습니다.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["화이트", "블랙", "레드"],
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Box sx={{ minHeight: "100%", width: "100%", py: 5 }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            상품을 찾을 수 없습니다
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            startIcon={<ArrowBack />}
          >
            홈으로 돌아가기
          </Button>
        </Container>
      </Box>
    );
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("사이즈와 컬러를 선택해주세요.");
      return;
    }
    alert(
      `장바구니에 추가되었습니다!\n상품: ${product.name}\n사이즈: ${selectedSize}\n컬러: ${selectedColor}`
    );
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert("사이즈와 컬러를 선택해주세요.");
      return;
    }
    alert(
      `바로 구매하겠습니다!\n상품: ${product.name}\n사이즈: ${selectedSize}\n컬러: ${selectedColor}`
    );
  };

  return (
    <Box sx={{ minHeight: "100%", width: "100%", py: 5 }}>
      <Container maxWidth={false}>
        <Button
          component={Link}
          to="/"
          variant="outlined"
          startIcon={<ArrowBack />}
          sx={{ mb: 4 }}
        >
          홈으로 돌아가기
        </Button>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Grid container spacing={4}>
            {/* Product Image */}
            <Grid item xs={12} md={6}>
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    borderRadius: 2,
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Card>
            </Grid>

            {/* Product Info */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {product.name}
              </Typography>

              <Typography variant="h6" color="text.secondary" paragraph>
                {product.description}
              </Typography>

              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: "bold", mb: 3 }}
              >
                {product.price.toLocaleString()}원
              </Typography>

              <Divider sx={{ my: 3 }} />

              {/* Product Details */}
              <Typography variant="h6" gutterBottom>
                상품 상세 정보
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {product.details}
              </Typography>

              {/* Size Selection */}
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                사이즈
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
                {product.sizes.map((size) => (
                  <Chip
                    key={size}
                    label={size}
                    variant={selectedSize === size ? "filled" : "outlined"}
                    color={selectedSize === size ? "primary" : "default"}
                    clickable
                    onClick={() => handleSizeClick(size)}
                    sx={{
                      "&:hover": {
                        backgroundColor:
                          selectedSize === size
                            ? "primary.main"
                            : "primary.light",
                        color: "white",
                      },
                    }}
                  />
                ))}
              </Box>

              {/* Color Selection */}
              <Typography variant="h6" gutterBottom>
                컬러
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 4, flexWrap: "wrap" }}>
                {product.colors.map((color) => (
                  <Chip
                    key={color}
                    label={color}
                    variant={selectedColor === color ? "filled" : "outlined"}
                    color={selectedColor === color ? "primary" : "default"}
                    clickable
                    onClick={() => handleColorClick(color)}
                    sx={{
                      "&:hover": {
                        backgroundColor:
                          selectedColor === color
                            ? "primary.main"
                            : "primary.light",
                        color: "white",
                      },
                    }}
                  />
                ))}
              </Box>

              {/* Selected Options Display */}
              {(selectedSize || selectedColor) && (
                <Alert severity="info" sx={{ mb: 3 }}>
                  <Typography variant="body2">
                    선택된 옵션: {selectedSize && `사이즈 ${selectedSize}`}{" "}
                    {selectedSize && selectedColor && " | "}{" "}
                    {selectedColor && `컬러 ${selectedColor}`}
                  </Typography>
                </Alert>
              )}

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCart />}
                  onClick={handleAddToCart}
                  sx={{ flex: 1, minWidth: 150 }}
                >
                  장바구니에 추가
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Favorite />}
                  onClick={handleBuyNow}
                  sx={{ flex: 1, minWidth: 150 }}
                >
                  바로 구매
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default ProductDetail;
