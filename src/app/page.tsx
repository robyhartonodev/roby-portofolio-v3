import AboutMe from '@/components/aboutme';
import Project from '@/components/project';
import Experience from '@/components/experience';

export default function Home() {
    return (
        <>
            <div className="space-y-0 md:space-y-16">
                <AboutMe></AboutMe>
                <Project></Project>
                <Experience></Experience>
            </div>
        </>
    );
}
