import { createTheme } from "@mui/material";
import { useMemo } from "react";

const useTheme = () =>
  useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: "#000000",
          },
          secondary: {
            main: "#61BB46",
          },
        },
      }),
    []
  );

export default useTheme;
