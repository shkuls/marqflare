import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marqflare",
  description: "Marqflare is a full-service digital marketing agency that helps businesses grow online.",
};

export default function RootLayout({ children }) {
  return (
<html>
 <head>

  <meta name="facebook-domain-verification" content="7uqd897sr4f6idmjgs75ugfu528gyb" />
  </head>
  <body className={inter.className}>{children}</body>
</html>
  
  );
}
