import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, sm: 5, md: 10, lg: 15 },
        py: { xs: 5, md: 8 },
        backgroundColor: "#0f172a",
        gap: { xs: 5, md: 0 },
      }}
    >
      {/* Left side text */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: 300,
            mb: 1,
            fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
          }}
        >
          Hello<span style={{ color: "#ff4c29" }}>.</span>
        </Typography>

        {/* "I'm Raju" with horizontal line */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            mb: 1,
            gap: 2,
          }}
        >
          {/* Horizontal orange line */}
          <Box
            sx={{
              height: "3.5px",
              width: { xs: "20px", sm: "30px", md: "35px", lg: "60px" },
              backgroundColor: "#ff4c29",
              borderRadius: "5px",
            }}
          />

          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: 400,
              fontSize: {
                xs: "1.6rem",
                sm: "3rem",
                md: "3rem",
                lg: "3rem",
                xl: "3rem",
              },
            }}
          >
            I'm Raju
          </Typography>
        </Box>

        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            mt: 1,
            fontSize: {
              xs: "1.7rem",
              sm: "2rem",
              md: "3rem",
              lg: "3rem",
              xl: "3.2rem",
            },
          }}
        >
          Software Developer
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            mt: 10,
            justifyContent: { xs: "center", md: "flex-start" },
            flexWrap: { xs: "nowrap", sm: "wrap" },
            overflowX: { xs: "auto", sm: "visible" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff4c29",
              textTransform: "none",
              px: { xs: 4, sm: 3, md: 4, lg: 4, xl: 3.5 },
              py: 1.1,
              fontSize: {
                xs: "0.75rem",
                sm: "1rem",
                md: "1.2rem",
                xl: "1.2rem",
                lg: "1.2rem",
              },
              whiteSpace: "nowrap",
              "&:hover": { backgroundColor: "#e63d17" },
            }}
          >
            Got a project?
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              textTransform: "none",
              px: { xs: 4, sm: 3 },
              py: 1.1,
              fontSize: {
                xs: "0.75rem",
                sm: "1rem",
                md: "1.2rem",
                xl: "1.2rem",
                lg: "1.2rem",
              },
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "white",
                color: "#0f172a",
                borderColor: "white",
              },
            }}
          >
            My resume
          </Button>
        </Box>
      </Box>

      {/* Right side image */}
      <Box
        sx={{
          mt: { xs: 5, md: 0 },
        }}
      >
        <Box
          component="img"
          src="https://via.placeholder.com/250"
          alt="Profile"
          sx={{
            width: { xs: 180, sm: 220, md: 250, lg: 280, xl: 300 },
            height: { xs: 180, sm: 220, md: 250, lg: 280, xl: 300 },
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0px 0px 20px rgba(0,0,0,0.5)",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
