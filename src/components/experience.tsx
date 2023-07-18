import { MuseoModerno } from 'next/font/google';
import Image from 'next/image';

const museoModerno = MuseoModerno({weight: "500", subsets: ["latin"]});

export default function Experience() {
    const experiences = [
        {time: "04.2023 - Now", title: "Empulse - Fullstack developer"},
        {time: "04.2020 - 03.2023", title: "THM Gießen - Digital Medicine (M.Sc.)"},
        {time: "04.2019 - 03.2023", title: "BDH Klinik Braunfels - Working student as Fullstack developer"},
        {time: "2016 - 2020", title: "THM Gießen - Medical Informatics (B.Sc.)"},
    ];

    return (
        <>
            <div className={`min-h-screen ${museoModerno.className}`}>
                <div
                    className="text-[64px] md:text-[96px] mb-8 md:mb-32 flex justify-center md:justify-start">Experiences
                </div>

                <div className="space-y-8 md:space-y-24">
                    {experiences.map((item, index) => (
                        <div className="flex space-x-16" key={index}>
                            <div className="relative">
                                <div className="rounded-full h-16 w-16 bg-indigo-600">
                                </div>
                                <div className="w-2 h-64 absolute top-0 left-7 bg-indigo-600"></div>
                            </div>
                            <div className="space-y-2 md:space-y-8">
                                <div className="text-[28px] md:text-[48px] font-bold">{item.time}</div>
                                <div className="text-[20px] md:text-[24px]">{item.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}