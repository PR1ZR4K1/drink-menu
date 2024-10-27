import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

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
	title: 'Fuck Shack Drink Menu',
	description:
		'The official drink menu of the Fuck Shack',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex justify-center items-center antialiased w-screen h-screen bg-black`}
			>
				<div className='w-[90%] h-4/5 flex justify-center items-center bg-white rounded-lg'>
					{children}
				</div>
			</body>
		</html>
	);
}
