import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = ({ toggleDarkMode, mode }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1A2027" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "#00bcd4", fontWeight: "bold", mr: 1 }}
          >
            PRODUCT STORE
          </Typography>
          <ShoppingCartIcon sx={{ color: "#00bcd4" }} />
        </Box>

        <Box>
          <IconButton sx={{ color: "#90caf9" }}>
            <SettingsIcon />
          </IconButton>
          <IconButton sx={{ color: "#90caf9" }} onClick={toggleDarkMode}>
            {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;