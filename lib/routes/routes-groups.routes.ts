import { SIGN_IN_ROUTE } from './auth.routes';
import { CREATE_ROUTE, EDIT_ROUTE, TYPES_ROUTE } from './segments.routes';

/**
 *An array of routs that are accessible to logged in users.
 *This routes required authentication
 *@type {string[]}
 */
export const PROTECTED_ROUTES: string[] = [CREATE_ROUTE, EDIT_ROUTE];

/**
 *An array of routs that are accessible to logged in users with admin role.
 *This routes required authentication
 *@type {string[]}
 */
export const ADMIN_ROUTES: string[] = [TYPES_ROUTE];

/**
 *An array of routs that are used for authentication.
 *This routes will redirect logged users to home
 *@type {string[]}
 */
export const AUTH_ROUTES: string[] = [SIGN_IN_ROUTE];
