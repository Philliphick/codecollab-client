// import { useUser } from '@auth0/nextjs-auth0';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const ProtectedPage = () => {
//   const { user, isLoading } = useUser();
//   const router = useRouter();

//   // Redirect to login if user is not authenticated
//   if (!isLoading && !user) {
//     router.push('/login'); // Redirect to your login page
//     return null;
//   }

//   return (
//     <div>
//       <h1>Welcome to the Protected Page!</h1>
//       <p>Hello, {user ? user.name : 'guest'}!</p>
//       <Link href="/logout">
//         <a>Logout</a>
//       </Link>
//     </div>
//   );
// };

// export default ProtectedPage;