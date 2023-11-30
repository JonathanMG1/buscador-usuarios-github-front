import SunIcons from '@/components/icons/SunIcons';

const Navbar = () => {
  return (
    <header className="flex items-center gap-2 space-x-2 mb-10">
      <h1 className="text-white text-3xl font-bold flex-grow">Buscador</h1>
      <span className="uppercase text-white ">Light</span>

      <button>
        <SunIcons className="fill-white" />
      </button>
    </header>
  );
};

export default Navbar;
