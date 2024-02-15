// import { getSession, withMiddlewareAuthRequired } from '@auth0/nextjs-auth0';
// import { NextRequest, NextResponse } from 'next/server';

// async function middleware(req) {
//   if (req.nextUrl.pathname.startsWith('/api/auth')) {
//     return;
//   }

//   const response = NextResponse.next({
//     request: {
//       headers: new Headers(req.headers),
//     },
//   });

//   const user = await getSession(req, response);
//   console.log(`User: ${user}`);
//   const token = user?.accessToken;
//   console.log(`Token: ${token}`);

//   response.headers.set('Authorization', `Bearer ${token}`);

//   return response;
// }

// export default withMiddlewareAuthRequired(middleware);

// export const config = {
//   matcher: ['/private/:path*', '/api/:path*'],
// };
import { getSession, withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';
import { NextResponse } from 'next';

async function middleware(req) {
  try {
    console.log('Middleware is executing')
    if (req.nextUrl.pathname.startsWith('/api/auth')) {
      return;
    }

    const response = NextResponse.next({
      request: {
        headers: new Headers(req.headers),
      },
    });

    const user = await getSession(req, response);
    console.log(`User: ${user}`);
    const token = user?.accessToken;
    console.log(`Token: ${token}`);

    response.headers.set('Authorization', `Bearer ${token}`);

    return response;
  } catch (error) {
    console.error('Error in middleware:', error);
    throw error; // Rethrow the error to propagate it further
  }
}

export default withMiddlewareAuthRequired(middleware);

export const config = {
  matcher: ['/private/:path*', '/api/:path*'],
};
