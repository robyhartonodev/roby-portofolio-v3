import { MuseoModerno } from 'next/font/google';
import Image from 'next/image';

const museoModerno = MuseoModerno({weight: "500", subsets: ["latin"]});

export default function Experience() {
    const experiences = [
        {time: "04.2020-04:2023", title: "Empulse - Fullstack developer"}
    ];

    return (
        <>
            <div className={`min-h-screen ${museoModerno.className}`}>
                <div className="text-[64px] md:text-[96px] mb-8 md:mb-32 flex justify-center md:justify-start">Experiences</div>

                <div className="space-y-8 md:space-y-24">
                    <div className="flex space-x-16">
                        <div className="relative">
                            <div className="rounded-full h-16 w-16 bg-indigo-600">
                            </div>
                            <div className="w-2 h-64 absolute top-0 left-7 bg-indigo-600"></div>
                        </div>
                        <div className="space-y-8">
                            <div className="text-[48px] font-bold">04.2023 - Now</div>
                            <div className="text-[24px]">Test job title</div>
                        </div>
                    </div>
                    <div className="flex space-x-16">
                        <div className="relative">
                            <div className="rounded-full h-16 w-16 bg-indigo-600">
                            </div>
                            <div className="w-2 h-64 absolute top-0 left-7 bg-indigo-600"></div>
                        </div>
                        <div className="space-y-8">
                            <div className="text-[48px] font-bold">04.2023 - Now</div>
                            <div className="text-[24px]">Test job title</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}