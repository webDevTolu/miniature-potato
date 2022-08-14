import logo from "../assets/images/Logo 3.png";

const Logo = () => {
  return (
    <div className="flex items-baseline font-read">
      <img src={logo} alt="logo" />
      <span className="font-semibold text-lg md:text-xl lg:text-2xl">SAlytics</span>
    </div>
  );
};

export default Logo;
