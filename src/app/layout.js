import { Plus_Jakarta_Sans, Inter_Tight } from "next/font/google";
import "./globals.scss";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
});
const interTight = Inter_Tight({
    subsets: ["latin"],
    variable: "--font-interTight",
});

export const metadata = {
    title: "Habibullah Nahid ",
    description: "Designer and Developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${interTight.className} ${jakarta.variable}`}>
                {children}
            </body>
        </html>
    );
}
