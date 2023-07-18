import { MuseoModerno } from 'next/font/google';
import Image from 'next/image';

const museoModerno = MuseoModerno({weight: "500", subsets: ["latin"]});

export default function Project() {
    const projects = [
        {image: "/pilos.svg", alt: "help", title: "Pilos"},
        {image: "/pilos.svg", alt: "help2", title: "Pilos 2"},
        {image: "/pilos.svg", alt: "help3", title: "Pilos 3"},
        {image: "/pilos.svg", alt: "help4", title: "Pilos 4"},
        {image: "/pilos.svg", alt: "help5", title: "Pilos"},
        {image: "/pilos.svg", alt: "help6", title: "Pilos"},
        {image: "/pilos.svg", alt: "help4", title: "Pilos"},
        {image: "/pilos.svg", alt: "help5", title: "Pilos"},
        {image: "/pilos.svg", alt: "help6", title: "Pilos"},
    ];

    return (
        <>
            <div className={`min-h-screen ${museoModerno.className}`}>
                <div className="text-[64px] md:text-[96px] mb-8 md:mb-32 flex justify-center md:justify-start">Projects</div>
                <div className="flex flex-row space-x-32 w-full h-full overflow-x-hidden">
                    {
                        projects.map((item, index) => (
                            <div className="flex-none cursor-pointer" key={index}>
                                <Image src={item.image}
                                       alt={item.alt}
                                       width={0}
                                       height={0}
                                       className="border p-8 rounded-xl w-[20rem] h-[24rem] md:w-[32rem] md:h-[32rem]"
                                ></Image>

                                <div className="flex justify-between">
                                    <div className="text-[40px]">
                                        {item.title}
                                    </div>
                                    <div
                                        className="bg-black text-xl text-white rounded-lg p-4 h-16 w-16 flex justify-center items-center translate-x-4 -translate-y-8"
                                    >
                                        {index + 1}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}