import  { createContext, useMemo, useState, type ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: {
                  default: "#0f172a",
                  paper: "#1f2937",
                },
                text: {
                  primary: "#fff",
                  secondary: "#b0b0b0",
                },
                primary: {
                  main: "#ff4c29",
                },
              }
            : {
                background: {
                  default: "#ffffff",
                  paper: "#fff",
                },
                text: {
                  primary: "#000",
                  secondary: "#444",
                },
                primary: {
                  main: "#ff4c29",
                },
              }),
        },
        typography: {
          fontFamily: `'Inter', sans-serif`,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeContextProvider;
