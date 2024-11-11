import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Image from 'next/image';
import { imagePath } from 'src/constants';
import 'src/styles/globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <input type="checkbox" id="toggle-sidebar-checker" />
                <div className="sidebar"></div>
                <div className="wrap-header-content">
                    <div className="header">
                        <Image src={imagePath.logo} alt="logo" width={120} height={50} className="h-auto" />
                        <label htmlFor="toggle-sidebar-checker" className="toggle-sidebar">
                            <div></div>
                            <div></div>
                            <div></div>
                        </label>
                    </div>
                    {children}
                </div>
            </body>
        </html>
    );
}
