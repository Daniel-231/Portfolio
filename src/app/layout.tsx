import type { Metadata, Viewport } from "next";
import Sidebar from "@/app/components/Sidebar";
import { ThemeSwitcherProvider } from "./components/ThemeSwitcher";
import { DM_Sans, Sniglet } from "next/font/google";
import "./globals.css";


/* Old Original Fonts

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

*/

// New Fonts
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const sniglet = Sniglet ({
  variable: "--font-sniglet-var",
  subsets: ["latin"],
  weight: ["400", "800"],
});


const siteUrl = "https://daniilklimenko.com";
const siteDescription =
  "Full-stack developer based in Athens, Greece, building end-to-end web applications with React, Next.js, Python, and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniil Klimenko — Full-Stack Developer",
    template: "%s · Daniil Klimenko",
  },
  description: siteDescription,
  keywords: [
    "Daniil Klimenko",
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Python",
    "Portfolio",
    "Athens Greece",
  ],
  authors: [{ name: "Daniil Klimenko", url: siteUrl }],
  creator: "Daniil Klimenko",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Daniil Klimenko",
    title: "Daniil Klimenko — Full-Stack Developer",
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniil Klimenko — Full-Stack Developer",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      data-theme={"dark"}
      className={`${dmSans.variable} ${sniglet.variable} h-full antialiased`} // Passing Fonts
    >
      <body className="min-h-full flex flex-col">
        <ThemeSwitcherProvider>
          <Sidebar />
          {children}
        </ThemeSwitcherProvider>
      </body>
    </html>
  );
}
