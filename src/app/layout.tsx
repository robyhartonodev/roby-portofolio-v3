"use client"

import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '@/components/headers';
import { useEffect } from "react";

const roboto = Roboto({weight: "500", subsets: ["latin"]});

export default function RootLayout(
    {children}: {
        children: React.ReactNode
    }) {

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <html lang="en">
        <body className={`${roboto.className} bg-white dark:bg-midnight text-black dark:text-white`}>
        <Header></Header>

        <div className={"py-8 px-4 lg:py-8 lg:px-48"}>
            {children}
        </div>
        </body>
        </html>
    );
}
