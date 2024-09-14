import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom-components/header";
import Footer from "@/components/custom-components/footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-7255780745640035"
        ></meta>
        <meta
          name="google-site-verification"
          content="B7bk0lZ8erO_gdIJbWXsOWsUZAkd48i8wxa2ecf0SME"
        />
        <script
          data-grow-initializer=""
          dangerouslySetInnerHTML={{
            __html: `!(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTo0MDA2ZDMxMy1lYWI2LTQzMDAtYjY3Ny0wZDA3MWI2OWZmMDY=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})()`,
          }}
        />
      </head>
      <body className={cn("text-[17px]", inter.className)}>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
