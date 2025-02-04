import type { Metadata } from 'next';

import { clsx } from 'clsx';

import './globals.css';

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
            <body className={clsx(exo.className, 'antialiased')}>{children}</body>
        </html>
    );
}
