import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google"
import "./globals.css";

import { ClerkProvider } from '@clerk/nextjs'
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "evently",
  description: "Task management platform",
  icons: {
    icon: '/assets/images/evently_logo.svg'
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider appearance={{
        baseTheme: dark
    }} >
      <html lang="en">
        <body>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
            >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
