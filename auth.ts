import NextAuth from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import Google from 'next-auth/providers/google';

import { prisma } from '@prisma';
import { Role } from '@prisma/client';

import { PrismaAdapter } from '@auth/prisma-adapter';

export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma) as Adapter,
    callbacks: {
        authorized: ({ auth }) => {
            return !!auth;
        },
        jwt({ token, user }) {
            if (user) {
                token['role'] = user.role;
            }

            return token;
        },
        session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.sub ?? '',
                    phone: token['phone'] as string,
                    role: (token['role'] as Role) ?? 'USER',
                },
            };
        },
    },
    events: {
        async linkAccount({ account, user }) {
            if (user.id && account) {
                await prisma.user.update({
                    data: { emailVerified: new Date() },
                    where: { id: user.id },
                });
            }
        },
    },
    pages: {
        signIn: '/sign-in',
    },
    providers: [Google],
    secret: process.env['AUTH_SECRET'],
    session: { strategy: 'jwt' },
});
