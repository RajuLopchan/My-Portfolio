import React, { useContext } from "react";
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../ThemeContext";

const pages = ["Home", "About", "Skills", "Projects", "Contacts"];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.mode === "light" ? "#f8f9fa" : theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 15 },
          py: 1.5,
        }}
      >
        {/* Left side name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            cursor: "pointer",
            color: "#72e2f9ff",
          }}
        >
          Raju Lopchan
        </Typography>

        {/* Desktop nav links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              disableRipple
              sx={{
                my: 2,
                color: theme.palette.text.primary,
                display: "block",
                fontWeight: 300,
                textTransform: "none",
                "&:hover": {
                  color: "#72e2f9ff",
                  backgroundColor: "transparent",
                },
              }}
            >
              {page}
            </Button>
          ))}
          <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={{ width: "100%" }}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
            <MenuItem onClick={colorMode.toggleColorMode}>
              <Typography textAlign="center" sx={{ width: "100%" }}>
                {theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"}
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
