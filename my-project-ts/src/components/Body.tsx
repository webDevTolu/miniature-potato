import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { ASA_LIST } from "../queries/asaListQuery";
import AssetItem from "./AssetItem";
import ErrorNotification from "./ui/ErrorNotification";
import LoadingSpinner from "./ui/LoadingSpinner";
import logoImage from "../assets/images/placeholderLogo.svg";

interface AsaList {
  assetId: string;
  name: string;
  available: boolean;
  logo: string;
}

interface AsaListData {
  asalist: {
    results: AsaList[];
  };
}

const Body = () => {
  const { loading, error, data } = useQuery<AsaListData>(ASA_LIST);
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorNotification />;

  console.log(data);

  return (
    <div className="p-16 w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {!loading && !error && data && (
        <Fragment>
          {data.asalist.results.map((asset) => (
            <AssetItem
              key={asset.assetId}
              imageSrc={asset.logo ? asset.logo : logoImage}
              name={asset.name}
              available={asset.available}
            />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default Body;
