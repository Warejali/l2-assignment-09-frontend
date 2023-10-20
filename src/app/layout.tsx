import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const userLoggedIn = isLoggedIn()


export const metadata: Metadata = {
  title: "Cleaning Service",
  description: "Cleaning service company",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </Providers>
  );
}
