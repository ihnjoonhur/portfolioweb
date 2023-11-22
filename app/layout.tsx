import "./globals.css";
import { Space_Mono, Fira_Sans } from "next/font/google";

export const metadata = {
  title: "Bryan Yi",
  description: "Bryan Yi's Portfolio",
};

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spacemono",
  display: "swap",
});
const firasans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-firasans",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" className={`${spacemono.variable} ${firasans.variable}`}>
        <body>{children}</body>
      </html>
    </>
  );
}
