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

const pages = ["Home", "About","Services", "Skills", "Projects", "Contacts"];

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
      elevation={theme.palette.mode === "light" ? 2 : 0}
      sx={{
        backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
        color: theme.palette.mode === "light" ? "#222" : theme.palette.text.primary,
        boxShadow: theme.palette.mode === "light" ? "0 2px 8px rgba(0,0,0,0.04)" : "none",
        borderBottom: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 25 },
          py: 0.8,
        }}
      >
        {/* Left side name */}
        <Typography
          component="a"
          href="#home"
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "1.8rem",
            cursor: "pointer",
            letterSpacing: 0.8,
            textDecoration: 'none',
            ...(theme.palette.mode === "light"
              ? { color: "#2563eb" }
              : { color: "#72e2f9ff" }),
          }}
        >
          Raju Lopchan
        </Typography>

        {/* Desktop nav links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: 'center' }}>
          {pages.map((page) => {
            let linkProps = {};
            if (page === "Home") linkProps = { component: 'a', href: '#home' };
            if (page === "About") linkProps = { component: 'a', href: '#about' };
            if (page === "Contacts") linkProps = { component: 'a', href: '#contact' };
            return (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                disableRipple
                {...linkProps}
                sx={{
                  my: 1.5,
                  color: theme.palette.mode === "light" ? "#222" : theme.palette.text.primary,
                  display: "block",
                  fontWeight: 400,
                  textTransform: "none",
                  fontSize: "0.9rem",
                  letterSpacing: 0.5,
                  borderRadius: 2,
                  transition: "background 0.2s, color 0.2s",
                  '&:hover': {
                    color: theme.palette.mode === "light" ? "#2563eb" : "#72e2f9ff",
                    backgroundColor: theme.palette.mode === "light" ? "#f3f6fa" : "transparent",
                  },
                }}
              >
                {page}
              </Button>
            );
          })}
          <Box sx={{ width: { md: 32, lg: 48 } }} />
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
              page === "Contacts"
                ? <MenuItem key={page} onClick={handleCloseNavMenu} component="a" href="#contact">
                    <Typography textAlign="center" sx={{ width: "100%" }}>
                      {page}
                    </Typography>
                  </MenuItem>
                : <MenuItem key={page} onClick={handleCloseNavMenu}>
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
