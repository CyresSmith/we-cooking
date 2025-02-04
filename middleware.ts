import { API_PREFIX, AUTH_ROUTES, HOME_ROUTE, PROTECTED_ROUTES, SIGN_IN_ROUTE } from '@routes';

import { auth } from '@auth';

export default auth(req => {
    const { nextUrl } = req;
    const { pathname } = nextUrl;

    const isLoggedIn = !!req.auth;

    const isApiRoute = pathname.startsWith(API_PREFIX);

    const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.includes(route));
    const isAuthRoute = AUTH_ROUTES.some(route => pathname.includes(route));

    if (isApiRoute) return;

    if (isAuthRoute && isLoggedIn) {
        return Response.redirect(new URL(HOME_ROUTE, nextUrl));
    }

    if (!isLoggedIn && isProtectedRoute) {
        return Response.redirect(new URL(SIGN_IN_ROUTE, nextUrl));
    }
});

export const config = {
    matcher: ['/((?!api|trpc|static|assets|_next|.*\\..*).*)', '/', '/(api|trpc)(.*)'],
};
