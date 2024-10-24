import Script from "next/script";
import { Fira_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom-components/header";
import Footer from "@/components/custom-components/footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import Share from "@/components/Sidebar-Elements/ShareButtons";
import Head from "next/head";

export const inter = Inter({
  subsets: ["latin"],
  preload: true,
});

export const nato = Fira_Sans({
  subsets: ["latin"],
  weight: "800",
  preload: true,
});

export const GlobalYear: number = new Date().getFullYear();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7255780745640035" />
        <meta
          name="google-site-verification"
          content="B7bk0lZ8erO_gdIJbWXsOWsUZAkd48i8wxa2ecf0SME"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7255780745640035"
          crossOrigin="anonymous"
        ></script>
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "oc9qqhsos1");
        `,
          }}
        />
        <Script
          src="https://fundingchoicesmessages.google.com/i/pub-7255780745640035?ers=1"
          strategy="beforeInteractive"
          async
        />
        <Script id="googlefcPresent" strategy="beforeInteractive">
          {`
            (function() {
              function signalGooglefcPresent() {
                if (!window.frames['googlefcPresent']) {
                  if (document.body) {
                    const iframe = document.createElement('iframe');
                    iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
                    iframe.style.display = 'none';
                    iframe.name = 'googlefcPresent';
                    document.body.appendChild(iframe);
                  } else {
                    setTimeout(signalGooglefcPresent, 0);
                  }
                }
              }
              signalGooglefcPresent();
            })();
          `}
        </Script>
      </head>
      <body className={cn ? cn("text-[17px]", inter.className) : "text-[17px]"}>
        <Header />
        <Share />
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
