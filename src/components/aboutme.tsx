import { MuseoModerno } from 'next/font/google';
import Image from 'next/image';

const museoModerno = MuseoModerno({weight: "500", subsets: ["latin"]});

export default function AboutMe() {
    const stacks = ["Java", "JavaScript", "php", "Typescript", "Docker", "Vue", "Angular", "React", "Spring Boot", "Laravel", "Kotlin", "Azure"];

    const randomStyle = ["text-white bg-indigo-600", "text-white bg-black", "bg-slate-300 text-black", "bg-indigo-300 text-black"];

    const getRandomClassName = () => {
        const randomIndex = Math.floor(Math.random() * randomStyle.length);
        return randomStyle[randomIndex];
    };

    return (
        <>
            <div className={`min-h-screen flex flex-col md:flex-row justify-between items-center ${museoModerno.className}`}>
                <div className="w-full md:w-1/3 order-last md:order-first">
                    <div className="text-[64px] md:text-[96px] mb-4 md:mb-8">My name is <span className="font-bold">Roby</span></div>
                    <div className="text-[18px] md:text-[24px] mb-8 md:mb-36">I am software developer focused on crafting great experiences
                    </div>
                    <div className="flex flex-row gap-3 flex-wrap">
                        {
                            stacks.map((item, index) => (
                                <div key={index} className={`rounded-xl p-4 ${getRandomClassName()}`}>
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="-z-10 hidden md:flex md:w-2/3 order-first md:order-last">
                    <Image src="/me.svg"
                           alt="me"
                           width={0}
                           height={0}
                           className="scale-x-[-1] -translate-y-96 translate-x-0 md:-translate-y-96 md:translate-x-96 w-full h-auto"
                    >
                    </Image>
                </div>
            </div>
        </>
    );
}