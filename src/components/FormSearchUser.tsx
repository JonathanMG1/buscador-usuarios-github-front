'use client';

import SearchIcon from '@/components/icons/SearchIcon';

interface Props {
  getUser: (username: string) => Promise<void>;
}

const FormSearchUser = ({ getUser }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    if (!username) return;
    await getUser(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-center gap-2 rounded-xl dark:bg-blue-900 shadow-md dark:shadow-none bg-white p-4 mb-6 "
    >
      <span className="min-w-[20px]">
        <SearchIcon className="fill-sky-400" />
      </span>
      <input
        name="username"
        type="text"
        placeholder="Buscar usuario de Github..."
        className="h-14 flex-1 rounded-lg bg-transparent p-2 dark:text-white
          dark:placeholder:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <button className="rounded-lg bg-sky-400  px-4 py-4 text-white font-bold">
        Buscar
      </button>
    </form>
  );
};

export default FormSearchUser;
