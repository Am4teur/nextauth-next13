import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import NextAuthProvider from "./nextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAuth App",
  description: "Learn how to use NextAuth on NextJS 13",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
