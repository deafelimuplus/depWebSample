import type { Metadata } from "next";
import Script from 'next/script'

// import "./globals.css";
import './assets/css/animate.css';
import './assets/css/LineIcons.2.0.css';
import './assets/css/bootstrap.4.5.2.min.css';
import './assets/css/default.css';
import './assets/css/style.css';

export const metadata: Metadata = {
  title: "Next.js on Firebase App Hosting",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <div className="dots" />
        {children}
        <div className="bottom-gradient" />

        { /* ====== Jquery js ======*/ }
        <script src="/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="/js/vendor/modernizr-3.7.1.min.js"></script>

        { /*====== Bootstrap js ======*/ }
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.4.5.2.min.js"></script>

        
        { /*====== Scrolling Nav js ======*/ }
        <script src="/js/jquery.easing.min.js"></script>
        <script src="/js/scrolling-nav.js"></script>
        
        { /*====== wow js ======*/ }
        <script src="/js/wow.min.js"></script>
        
        { /*====== Main js ======*/ }
        <script src="/js/main.js"></script>
    
      </body>
    </html>
  );
}
