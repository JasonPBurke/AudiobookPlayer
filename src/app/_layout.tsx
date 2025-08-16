import "../../global.css";
import { Slot } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#2e3440",
    card: "#1b212e",
    primary: "#d8dee9",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <Slot />
    </ThemeProvider>
  );
}
