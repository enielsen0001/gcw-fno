import { ThemeProvider } from "@/context/ThemeContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Plus_Jakarta_Sans, Lora, Source_Code_Pro } from "next/font/google";
import "@/lib/main.js";
import { baseMetadata } from "@/constants/metadata";


const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-plus-jakarta-sans",
    display: 'swap',
});

const lora = Lora({
    subsets: ['latin'],
    style: ['italic', 'normal'],
    variable: '--font-serif',
    display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    style: ['normal'],
    variable: '--font-mono',
    display: 'swap',
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
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
