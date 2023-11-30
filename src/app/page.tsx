'use client';
import { User } from '@/interface/user';
import FormSearchUser from '@/components/FormSearchUser';
import UserCardInfo from '@/components/UserCardInfo';
import { useState } from 'react';

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      setUser(null);
      setError('Usuario no existe');
      return;
    }
    setUser(await res.json());
    setError(null);
  };

  return (
    <>
      <FormSearchUser getUser={getUser} />
      {user && <UserCardInfo user={user} />}
      {error && (
        <div className="rounded-lg bg-red-500 p-4 text-white">{error}</div>
      )}
    </>
  );
};

export default Home;
