import localFont from "next/font/local";

export const sansRegular = localFont({
  src: [
    {path: "../app/fonts/EuclidCircularB-Regular.woff", weight: "400"},
    {
      path: "../app/fonts/EuclidCircularB-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../app/fonts/EuclidCircularB-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});
