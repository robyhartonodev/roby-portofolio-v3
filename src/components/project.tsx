"use client";

import { MuseoModerno } from 'next/font/google';
import Image from 'next/image';

const museoModerno = MuseoModerno({weight: "500", subsets: ["latin"]});

export default function Project() {
    const projects = [
        {image: "/pilos.svg", alt: "help", title: "Pilos", url: "https://github.com/THM-Health/PILOS"},
        {
            image: "/viktor.svg",
            alt: "help2",
            title: "VIKTOR",
            url: "https://www.mittelhessen.de/lokales/lahn-dill-kreis/braunfels/ideen-fuer-den-hol-und-bringdienst-1698537"
        },
        {
            image: "/fajour.svg",
            alt: "help3",
            title: "Fajour",
            url: "https://play.google.com/store/apps/details?id=com.fajour.app"
        }
    ];

    const onClickLeftButton = () => {
        const scrollDiv = document.getElementById("project-list");

        scrollDiv?.scrollTo({
            left: scrollDiv.scrollLeft - 500,
            behavior: "smooth"
        });
    };

    const onClickRightButton = () => {
        const scrollDiv = document.getElementById("project-list");

        scrollDiv?.scrollTo({
            left: scrollDiv.scrollLeft + 500,
            behavior: "smooth"
        });
    };

    const LeftRightButton = () => (
        <>
            <div className="hidden absolute md:flex items-center justify-start top-[50%] left-0">
                <button
                    className="p-4 rounded-full border-none w-16 h-16 flex items-center justify-center bg-white dark:bg-midnight opacity-70"
                    onClick={onClickLeftButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                    </svg>
                </button>
            </div>
            <div className="hidden absolute md:flex items-center justify-end top-[50%] right-0">
                <button
                    className="p-4 rounded-full border-none w-16 h-16 flex items-center justify-center bg-white dark:bg-midnight opacity-70"
                    onClick={onClickRightButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                    </svg>
                </button>
            </div>
        </>
    );

    const onItemClick = (item: { image: string, alt: string, title: string, url: string }) => {
        window.location.href = item.url;
    };

    return (
        <>
            <div className={`min-h-screen ${museoModerno.className}`}>
                <div className="text-[64px] md:text-[96px] mb-8 md:mb-32 flex justify-center md:justify-start">🚧
                    Projects
                </div>

                <div className="w-full relative">
                    {LeftRightButton()}

                    <div
                        id="project-list"
                        className="flex flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-32 w-full h-full overflow-x-hidden"
                    >
                        {
                            projects.map((item, index) => (
                                <div className="flex flex-col md:flex-none cursor-pointer" key={index} onClick={() => {
                                    onItemClick(item);
                                }}>
                                    <Image src={item.image}
                                           alt={item.alt}
                                           width={0}
                                           height={0}
                                           className="border p-8 rounded-xl w-full h-[24rem] md:w-[32rem] md:h-[32rem]"
                                    ></Image>

                                    <div className="flex justify-between">
                                        <div className="text-[40px]">
                                            {item.title}
                                        </div>
                                        <div
                                            className="bg-black text-xl text-white rounded-lg p-4 h-16 w-16 flex justify-center items-center translate-x-0 md:translate-x-4 -translate-y-8"
                                        >
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}