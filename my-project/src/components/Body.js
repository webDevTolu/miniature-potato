import AssetItem from "./AssetItem";
import logoImage from "../assets/images/placeholderLogo.svg";

const Body = () => {
  return (
    <div className="p-16 w-full grid lg:grid-cols-4 gap-8">
      <AssetItem imageSrc={logoImage} name="Algorand" availability={true} />
      <AssetItem imageSrc={logoImage} name="Algorand" availability={true} />
      <AssetItem imageSrc={logoImage} name="Algorand" availability={true} />
      <AssetItem imageSrc={logoImage} name="Algorand" availability={false} />
      <AssetItem imageSrc={logoImage} name="Algorand" availability={false} />
      <AssetItem imageSrc={logoImage} name="Algorand" availability={false} />
      <AssetItem imageSrc={logoImage} name="Algorand" availability={true} />
      <AssetItem imageSrc={logoImage} name="Algorand" availability={true} />
      <AssetItem imageSrc={logoImage} name="Algorand" availability={false} />
      <AssetItem imageSrc={logoImage} name="Algorand" availability={false} />
      <AssetItem imageSrc={logoImage} name="Algorand" availability={true} />
      <AssetItem imageSrc={logoImage} name="Algorand" availability={false} />
    </div>
  );
};

export default Body;
