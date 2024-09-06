import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UrantiaBot",
  description: "A chatbot aligned with the Urantia Book and the Love of the Universe, powered by OpenAI",
  icons: {
    icon: "https://s3.amazonaws.com/prismcortex.net/logos/LightBot.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="https://s3.amazonaws.com/prismcortex.net/logos/LightBot.svg" alt="OpenAI Logo" />
      </body>
    </html>
  );
}