import Navigation from "../Navigation";
import { ThemeProvider } from "@/hooks/use-theme";

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}
