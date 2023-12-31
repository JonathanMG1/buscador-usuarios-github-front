import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={robotoMono.className}>
        <div className=" min-h-screen dark:bg-blue-950 bg-blue-50 grid place-content-center px-4 ">
          <div className="sm:w-[500px] md:w-[600px] lg:w-[700px] ">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
