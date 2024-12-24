import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Meet Landing Page",
  description: "Meet landing page design from Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}
