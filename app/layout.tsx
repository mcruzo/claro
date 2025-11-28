import "./globals.css";
import { RootLayoutProps } from "./types";

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
