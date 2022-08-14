import HeaderButton from "./HeaderButton";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-8 px-16 font-read">
      <Logo />
      <HeaderButton />
    </header>
  );
};

export default Header;
