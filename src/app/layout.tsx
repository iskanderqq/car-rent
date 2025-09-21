import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './styles/index.scss'

const jakartaFont = Plus_Jakarta_Sans({
	variable: '--font-jakarta-sans',
	subsets: ['latin', 'cyrillic-ext'],
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Car rent',
	description: 'by Iskander Nureev',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${jakartaFont.className}`}>{children}</body>
		</html>
	)
}
