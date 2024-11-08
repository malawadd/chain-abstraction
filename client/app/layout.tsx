import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";
import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import {Providers} from "./components/Providers";
import {Header} from "./components/Header";
import {ToastContainer} from "react-toastify";
import clsxm from "@/src/lib/clsxm";

const manrope = Manrope({subsets: ["latin"]});
export const metadata: Metadata = {
    title: "abstract gifts",
    description:
        "Empower your community by effortlessly creating and delivering Gifts filled with digital assets, with zero friction for users.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={clsxm(manrope.className, 'relative')}>
        <div
            className='-z-10 fixed inset-0 bg-gradient-to-b from-[#a7c3ff] via-[#B1C2DA50] to-[#B1C2DA] min-h-screen'></div>
        <Providers>
            <div data-header-trigger></div>
            <Header/>
            {children}
        </Providers>
        <ToastContainer/>
        </body>
        </html>
    );
}
