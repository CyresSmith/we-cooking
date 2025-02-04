import { Exo_2 } from 'next/font/google';

export const exo = Exo_2({
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
    subsets: ['latin', 'cyrillic-ext', 'cyrillic'],
    variable: '--font-nunito',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
