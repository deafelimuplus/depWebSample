import type { Metadata } from "next";
import Script from 'next/script'

// import "./globals.css";
import './assets/css/animate.css';
import './assets/css/LineIcons.2.0.css';
import './assets/css/bootstrap.4.5.2.min.css';
import './assets/css/default.css';
import './assets/css/style.css';

import { Header } from "./components";
import { Preloader } from "./components";

export const metadata: Metadata = {
  title: "Next.js on Firebase App Hosting",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark-theme">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="dots" />
        <Header />
        {children}
        <div className="bottom-gradient" />
        <Script src="./assets/js/vendor/jquery-1.12.4.min.js" />
      </body>
    </html>
  );
}
