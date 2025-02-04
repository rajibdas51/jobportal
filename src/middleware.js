import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token');

  const { pathname } = req.nextUrl;
  // if user is not logged in and tries to access protected routes,redirect to login page
  if (!token && pathname !== '/login' && pathname !== '/register') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // If user is logged in redirect to home page
  if (token && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next(); // Continue to the next middleware
}

export const config = {
  matcher: [
    '/',
    '/dashboard/:path*',
    '/jobs/:path*',
    '/profile/:path*',
    '/login',
    '/register',
  ],
};
