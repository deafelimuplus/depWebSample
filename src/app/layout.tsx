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
        {children}
        <div className="bottom-gradient" />
        <Script src="https://raw.githubusercontent.com/deafelimuplus/depWebSample/refs/heads/main/src/app/assets/js/vendor/jquery-1.12.4.min.js" />
        <Script src="https://raw.githubusercontent.com/deafelimuplus/depWebSample/refs/heads/main/src/app/assets/js/vendor/modernizr-3.7.1.min.js" />
        <Script src="https://raw.githubusercontent.com/deafelimuplus/depWebSample/refs/heads/main/src/app/assets/js/popper.min.js" />
        <Script src="https://raw.githubusercontent.com/deafelimuplus/depWebSample/refs/heads/main/src/app/assets/js/bootstrap.4.5.2.min.js" />
        <Script src="https://raw.githubusercontent.com/deafelimuplus/depWebSample/refs/heads/main/src/app/assets/js/jquery.easing.min.js" />
        <Script src="https://raw.githubusercontent.com/deafelimuplus/depWebSample/refs/heads/main/src/app/assets/js/scrolling-nav.js" />
        <Script src="https://raw.githubusercontent.com/deafelimuplus/depWebSample/refs/heads/main/src/app/assets/js/wow.min.js" />
        <Script src="https://raw.githubusercontent.com/deafelimuplus/depWebSample/refs/heads/main/src/app/assets/js/main.js" />
      </body>
    </html>
  );
}
