import React from 'react'
import { auth } from './auth'
import { redirect } from 'next/navigation';
import Link from 'next/link';

const HomePage = async() => {
  const response = await auth();

  if(!response) {
    redirect('api/auth/signin');
  }
  return (
    <div>
      <h1>Hello This IS Landing page </h1>
      <button><Link href='api/auth/signout'>Logout</Link></button>
    </div>
  )
}

export default HomePage