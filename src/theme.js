import { createTheme } from "@mui/material/styles";

export default function Team() {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
   
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      neutral: {
        main: "#fff",
        contrastText: "#fff",
      },
      added: {
        main: "#035ce1d4",
        contrastText: "#035ce1d4",
      },
    },
  });
  return theme;
}
