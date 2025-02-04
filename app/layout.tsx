import { SessionProvider } from 'next-auth/react';

import type { Metadata } from 'next';

import { clsx } from 'clsx';

import './globals.css';

import { Footer } from '@components/footer';
import { Header } from '@components/header';

import { exo } from '@fonts';

import { auth } from '@auth';

export const metadata: Metadata = {
    description: 'Recipes for cooking',
    title: 'We cooking',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    return (
        <html lang="uk">
            <body className={clsx(exo.className, 'flex min-h-screen flex-col antialiased')}>
                <SessionProvider session={session}>
                    <Header />
                    <div className="flex-1">{children}</div>
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
}
