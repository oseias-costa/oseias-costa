import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { GlobalStyle } from "./lib/GlobalStyle";
import StyledComponentsRegistry from "./lib/registry";
import localFont from "next/font/local";

const coolvetica = localFont({
  src: "./lib/coolvetica.otf",
  display: "swap",
  variable: "--font-coolvetica",
});

const manrope = Manrope({
  weight: ["300", "700", "400"],
  display: "swap",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Oséias Costa",
  description: "Portfólio Desenvolvedor de Software Oséias Costa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header>
        <meta
          name="google-site-verification"
          content="XZl57Xh7vwYIHKZZIFyf2DJHnaTZ134vA3j4riBt618"
        />
      </header>
      <body className={`${manrope.variable} ${coolvetica.variable}`}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
