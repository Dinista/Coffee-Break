import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Nunito } from "next/font/google";
import "./globals.css";
import Provider from "@/auth/provider/provider";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const pacificoSans = Pacifico({
  variable: "--font-pacifico-sans",
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

const zainSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoffeBreak - Give it a Break",
  description: "Implemented with NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Provider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${pacificoSans.variable} ${zainSans.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </Provider>
    </html>
  );
}
