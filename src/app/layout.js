import "./globals.css";
import { Noto_Serif } from "next/font/google";

const font = Noto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "@shreydan",
  description:
    "Shreyas Daniel Gaddam is a Machine Learning Engineer and Researcher",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
