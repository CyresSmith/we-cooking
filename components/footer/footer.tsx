import Link from 'next/link';

import { Icon } from '@components/shared';

export const Footer = () => {
    return (
        <div className="container flex gap-5 py-5">
            <Link href={'/'}>
                <Icon className="fill-foreground" name="logo" />
            </Link>
        </div>
    );
};
