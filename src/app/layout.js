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
  {/* Facebook Domain Verification */}
  <meta name="facebook-domain-verification" content="yqnpy714fp1dwetc1h1f761wsvag7w" />
  <body className={inter.className}>{children}</body>
</html>
  
  );
}
