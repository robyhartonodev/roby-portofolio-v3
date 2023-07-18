import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '@/components/headers';

const roboto = Roboto({weight: "500", subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${roboto.className} py-8 px-4 lg:py-8 lg:px-32 bg-white`}>

        <Header></Header>

        <div>
            {children}
        </div>
        </body>
        </html>
    );
}
