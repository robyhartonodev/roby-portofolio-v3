import Image from 'next/image';

export default function Header() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0 space-x-0 md:space-x-8">
                    <Image src="/logo.svg" alt="logo" width="72" height="72"></Image>
                    <div className="hover:text-slate-500 cursor-pointer">About Me</div>
                    <div className="hover:text-slate-500 cursor-pointer">Projects</div>
                    <div className="hover:text-slate-500 cursor-pointer">Experiences</div>
                </div>
                {/*<div className="p-4">*/}
                {/*    <button className="bg-slate-300 text-black font-bold p-4 rounded-xl w-32">DE</button>*/}
                {/*</div>*/}
            </div>
        </>
    );
}