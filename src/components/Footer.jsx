import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
        color: "white",
        py: 5,
        mt: "auto",
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ color: "#667eea", fontWeight: "bold" }}
            >
              IOVU SHOP
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#bdc3c7", lineHeight: 1.6 }}
            >
              최고 품질의 티셔츠를 만나보세요
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#667eea" }}>
              고객지원
            </Typography>
            <List dense sx={{ p: 0 }}>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary="문의하기"
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary="배송안내"
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary="교환/반품"
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#667eea" }}>
              회사정보
            </Typography>
            <List dense sx={{ p: 0 }}>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary="회사소개"
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary="이용약관"
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary="개인정보처리방침"
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#bdc3c7",
                      cursor: "pointer",
                      "&:hover": { color: "#667eea" },
                    },
                  }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "#34495e" }} />

        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: "#95a5a6" }}
        >
          &copy; 2025 IOVU SHOP. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
