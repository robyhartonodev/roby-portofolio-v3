import Image from 'next/image';

export default function Header() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex justify-start items-center space-x-8">
                    <Image src="/logo.svg" alt="logo" width="72" height="72"></Image>
                    <div>About Me</div>
                    <div>Projects</div>
                    <div>Experiences</div>
                </div>
                <div>
                    <button className="bg-slate-300 text-black font-bold p-4 rounded-xl min-w-[8rem]">DE</button>
                </div>
            </div>
        </>
    );
}