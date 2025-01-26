import "./globals.css";
import {cn} from "~/lib/utils";
import {sansRegular} from "~/lib/fonts";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Stories SDK for IOS, Android, &amp; Web &bull; Storyteller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-primary">
      <body className={cn("antialiased h-full", sansRegular.variable)}>
        {children}
      </body>
    </html>
  );
}
