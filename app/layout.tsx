import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bluesky-campus-discovery.woodsyfield22.chatgpt.site"),
  title: "Bluesky Campus Discovery",
  description: "Find relevant campus people, feeds, and conversations on Bluesky.",
  openGraph: {
    title: "Bluesky Campus Discovery",
    description: "Find your people without losing the calm.",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Bluesky Campus Discovery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluesky Campus Discovery",
    description: "Find your people without losing the calm.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
