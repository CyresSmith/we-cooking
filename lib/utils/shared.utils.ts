import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getUserLetters = (name: null | string | undefined) => {
    const [firstName, lastName] = name?.split(' ') ?? [];

    return firstName
        ? lastName
            ? firstName.slice(0, 1).concat(lastName.slice(0, 1))
            : firstName.slice(0, 2)
        : '';
};
