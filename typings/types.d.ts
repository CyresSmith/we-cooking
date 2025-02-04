import { type DefaultSession } from 'next-auth';

import { Role } from '@prisma/client';

declare module 'next-auth' {
    interface User {
        id: string;
        name: string;
        email: string;
        emailVerified: Date;
        image: string;
        role: Role;
        createdAt: Date;
        updatedAt: Date;
    }

    interface Session {
        user: {
            id: string;
            role: Role;
        } & DefaultSession['user'];
    }
}
