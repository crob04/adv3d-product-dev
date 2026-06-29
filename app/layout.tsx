import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advanc3D Product Development — From CAD File to Functional Prototype",
  description:
    "Upload a CAD file, get DFM-aware feedback and a quote in 24 hours, and move into a functional prototype with engineering-grade materials. NDA-ready. US-based. HP MJF, SLA, FDM, and TPU in-house.",
};

const themeBootstrap = `(function(){try{var t=localStorage.getItem('adv3d-theme');var d=t==='dark'||((t===null||t==='system')&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&f[]=satoshi@400,500,700&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="font-body bg-brand-bg text-brand-text dark:bg-brand-dark-bg dark:text-brand-dark-text antialiased">
        {children}
      </body>
    </html>
  );
}