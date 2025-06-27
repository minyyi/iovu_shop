import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
  Paper,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

function Home() {
  const products = [
    {
      id: 1,
      name: "클래식 화이트 티셔츠",
      price: 29000,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      description: "깔끔하고 심플한 기본 티셔츠",
    },
    {
      id: 2,
      name: "스트라이프 네이비 티셔츠",
      price: 35000,
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop",
      description: "세련된 스트라이프 패턴의 티셔츠",
    },
    {
      id: 3,
      name: "그래픽 프린트 티셔츠",
      price: 42000,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
      description: "독특한 그래픽이 인상적인 티셔츠",
    },
  ];

  return (
    <Box sx={{ minHeight: "100%", width: "100%" }}>
      {/* Hero Section */}
      <Paper
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          textAlign: "center",
          py: 8,
          mb: 5,
          borderRadius: 0,
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            IOVU SHOP에 오신 것을 환영합니다
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            최고 품질의 티셔츠를 만나보세요
          </Typography>
        </Container>
      </Paper>

      {/* Products Section */}
      <Container maxWidth={false} sx={{ pb: 5 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 5, color: "text.primary" }}
        >
          인기 상품
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                component={Link}
                to={`/product/${product.id}`}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {product.price.toLocaleString()}원
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCart />}
                    sx={{ mt: 2, width: "100%" }}
                  >
                    상품 보기
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
