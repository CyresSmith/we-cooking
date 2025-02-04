'use client';

/* eslint-disable @typescript-eslint/no-misused-promises */
import { LogIn, LogOutIcon } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar';
import { Button } from '@ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@ui/dropdown-menu';

import { INGREDIENTS_ROUTE, SIGN_IN_ROUTE, TAGS_ROUTE } from '@routes';

import { getUserLetters } from '@utils';

export const AuthButton = () => {
    const { data: session } = useSession();

    const user = session?.user;

    const handleSignOut = async () => {
        await signOut();
    };

    return user ? (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={user.image ?? undefined} />
                    <AvatarFallback>{getUserLetters(user?.name)}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>{user.name ?? user.email ?? 'User'}</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link href={INGREDIENTS_ROUTE}>Ингредиенты</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <Link href={TAGS_ROUTE}>Метки</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    className="flex items-center justify-center"
                    onClick={handleSignOut}
                >
                    <LogOutIcon /> <span>Выйти</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ) : (
        <Button asChild>
            <Link href={SIGN_IN_ROUTE}>
                <LogIn /> Войти
            </Link>
        </Button>
    );
};
