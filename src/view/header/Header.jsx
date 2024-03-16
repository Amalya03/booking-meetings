import Deascription from "./description/Deascription";

const Header = () => {
  return (
    <header className="relative justify-center w-full flex">
      <img src="./assets/header/bacground.avif" alt="bacground" />
      <div className="absolute bg-black opacity-[0.5] top-0 w-full h-full" />
      <Deascription />
    </header>
  );
};

export default Header;
