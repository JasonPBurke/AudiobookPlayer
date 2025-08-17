import "../../global.css";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Slot } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import PlayerProvider from "@/providers/PlayerProvider";

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
      <ClerkProvider tokenCache={tokenCache}>
        <PlayerProvider>
          <Slot />
        </PlayerProvider>
      </ClerkProvider>
    </ThemeProvider>
  );
}
