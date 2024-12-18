import React, { useState, useEffect, useMemo} from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme, Box } from "@mui/material";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

function App() {
  const storedMode = localStorage.getItem("themeMode") || "light";
  const [mode, setMode] = useState(storedMode);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeProvider theme={theme} noSsr>
        <CssBaseline /> 
        <Box minHeight={"100vh"}>
          <Navbar toggleDarkMode={toggleDarkMode} mode={mode} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
