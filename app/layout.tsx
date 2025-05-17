import { Geist } from "next/font/google";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
    <body className="min-h-screen bg-background text-foreground text-black" data-theme="light">
    <div className="relative flex flex-col gap-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto w-full pb-18">
          {children}
         </div>
      </body>
    </html>
  );
}
