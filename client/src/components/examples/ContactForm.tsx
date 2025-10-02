import ContactForm from "../ContactForm";
import { ThemeProvider } from "@/hooks/use-theme";

export default function ContactFormExample() {
  return (
    <ThemeProvider>
      <ContactForm />
    </ThemeProvider>
  );
}
