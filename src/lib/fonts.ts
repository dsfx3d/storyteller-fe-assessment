import {Inter} from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

export const sansRegular = localFont({
  src: [
    {path: "../app/fonts/EuclidCircularB-Regular.woff", weight: "400"},
    {
      path: "../app/fonts/EuclidCircularB-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});
