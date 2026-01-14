import "./globals.css";
import { Space_Grotesk, Fraunces } from "next/font/google";
import ClientScripts from "./components/ClientScripts";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata = {
  title: "TimeCam",
  description: "TimeCam is a cinematic iOS camera that reimagines any place across time."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${fraunces.variable}`}>
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
