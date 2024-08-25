"use client";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

import { createTheme } from "@mui/material";

let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    custom: theme.palette.augmentColor({
      color: {
        main: "#FFFFFF",
      },
      name: "custom",
    }),
  },
});

export default theme;
