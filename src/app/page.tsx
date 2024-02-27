import AboutMe from '@/components/aboutme';
import Project from '@/components/project';
import Experience from '@/components/experience';
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Portofolio - Roby Hartono</title>
            </Head>
            <div className="space-y-0 md:space-y-16">
                <AboutMe></AboutMe>
                <Project></Project>
                <Experience></Experience>
            </div>
        </>
    );
}
