"use client";

import Image from 'next/image';
import { useEffect } from "react";

export default function Header() {

    useEffect(() => {
        console.log("initialized");
    }, []);

    const setLocalStorageTheme = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

    };

    const darkButton = () => (
        <div className="cursor-pointer"
             onClick={() => {
                 localStorage.theme = "dark";
                 setLocalStorageTheme();
             }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-8 h-8">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
            </svg>
        </div>
    );

    const lightButton = () => (
        <div>
            <div className="cursor-pointer"
                 onClick={() => {
                     localStorage.theme = "light";
                     setLocalStorageTheme();
                 }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-8 h-8">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                </svg>

            </div>
        </div>
    );

    return (
        <>
            {/* Small breakpoint */}
            <div
                className="flex md:hidden flex-row items-center justify-between sticky top-0 p-4 bg-white dark:bg-midnight shadow-sm z-10 opacity-95">
                <Image src="/logo.svg" alt="logo" width="36" height="36"></Image>
                <div>
                    {localStorage.theme === "light" ? darkButton() : lightButton()}
                </div>
            </div>

            {/* Medium breakpoint onwards */}
            <div
                className="hidden md:block flex-row items-center justify-between space-y-4 md:space-y-0 sticky top-0 p-4 bg-white dark:bg-midnight shadow-sm z-10 opacity-95">
                <div className="flex items-center justify-between">
                    <div
                        className="flex flex-row justify-start items-center space-y-4 md:space-y-0 space-x-0 md:space-x-8"
                    >
                        <Image src="/logo.svg" alt="logo" width="72" height="72"></Image>
                        <div className="hover:text-slate-500 cursor-pointer">About Me</div>
                        <div className="hover:text-slate-500 cursor-pointer">Projects</div>
                        <div className="hover:text-slate-500 cursor-pointer">Experiences</div>
                    </div>
                    <div>
                        {localStorage.theme === "light" ? darkButton() : lightButton()}
                    </div>
                </div>
            </div>
        </>
    );
}