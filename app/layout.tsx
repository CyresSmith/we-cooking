import type { Metadata } from 'next';

import { clsx } from 'clsx';

import './globals.css';

import { Footer } from '@components/footer';
import { Header } from '@components/header';

import { exo } from '@fonts';

export const metadata: Metadata = {
    description: 'Recipes for cooking',
    title: 'We cooking',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <body className={clsx(exo.className, 'flex min-h-screen flex-col antialiased')}>
                <Header />
                <div className="flex-1">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
