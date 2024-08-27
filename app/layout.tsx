import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import localFont from "next/font/local";
import "./globals.css";
// import { motion } from "framer-motion";

export const metadata: Metadata = {
  metadataBase: new URL("https://eth.vercel.app/"),
  title: "Eth Portfolio",
  description: "personal portfolio website",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <Providers>
          {/* <motion.div
            // key={router.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          > */}
            {children}{" "}
          {/* </motion.div> */}
        </Providers>
      </body>
    </html>
  );
}
