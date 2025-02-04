import Link from 'next/link';

import { AuthButton } from '@components/auth-button';
import { Icon } from '@components/shared';

export const Header = () => {
    return (
        <div className="container flex justify-between gap-5 py-5">
            <Link className="flex items-center gap-3" href={'/'}>
                <Icon className="fill-accent" name="logo" />
                <span className="text-2xl text-primary">We cooking</span>
            </Link>

            <AuthButton />
        </div>
    );
};
