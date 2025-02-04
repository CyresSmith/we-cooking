'use client';

import { signIn } from 'next-auth/react';

import { Button } from '@ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';

import { Icon } from '@components/shared';

import { HOME_ROUTE } from '@routes';

export const SignInButtons = () => {
    const handleGoogleSignIn = () => {
        void signIn('google', { redirectTo: HOME_ROUTE });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-center text-2xl">{'sign-in'}</CardTitle>
            </CardHeader>

            <CardContent>
                <ul className="flex w-[320px] flex-col gap-3">
                    <li>
                        <Button className="w-full" onClick={handleGoogleSignIn}>
                            <Icon name="google" /> <span>{'google'}</span>
                        </Button>
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
};
