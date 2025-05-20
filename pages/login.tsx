import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Masuk ke Portal Berita</h1>
      <button onClick={() => signIn('google')} className="btn">Masuk dengan Google</button>
      <button onClick={() => signIn('github')} className="btn mt-2">Masuk dengan GitHub</button>
    </div>
  );
}