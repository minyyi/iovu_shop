import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { ShoppingCart, Home, Store } from "@mui/icons-material";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth={false}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: "bold",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              IOVU SHOP
            </Typography>
          </Link>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              startIcon={<Home />}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              홈
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/"
              startIcon={<Store />}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              상품
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/"
              startIcon={<ShoppingCart />}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              장바구니
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
