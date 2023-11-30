import SearchIcon from '@/components/icons/SearchIcon';

const FormSearchUser = () => {
  return (
    <form className="flex flex-wrap items-center gap-2 rounded-xl bg-blue-900 p-2 mb-6 ">
      <span className="min-w-[20px]">
        <SearchIcon className="fill-sky-400" />
      </span>
      <input
        type="text"
        placeholder="Buscar usuario de Github..."
        className="h-14 flex-1 rounded-lg bg-transparent p-2 text-white 
          placeholder:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <button className="rounded-lg bg-sky-400  px-4 py-4 text-white font-bold">
        Buscar
      </button>
    </form>
  );
};

export default FormSearchUser;
