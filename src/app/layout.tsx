import { ThemeProvider } from "@/context/ThemeContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Poppins } from "next/font/google";
import "@/lib/main.js";
import { baseMetadata } from "@/constants/metadata";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata = baseMetadata;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-background text-foreground">
                <ThemeProvider>
                    <Header />
                    <main className="pt-20">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
