import AssetItem from "./AssetItem";
import logoImage from "../assets/images/placeholderLogo.svg";
import { ASA_LIST } from "../queries/asaListQuery";
import { useQuery } from "@apollo/client";
import LoadingSpinner from "./UI/LoadingSpinner";
import ErrorNotification from "./UI/ErrorNotification";
import { Fragment } from "react";

const Body = () => {
  const { loading, error, data } = useQuery(ASA_LIST);
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorNotification />;

  return (
    <div className="p-16 w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {!loading && !error && (
        <Fragment>
          {data.asalist.results.map((asset) => (
            <AssetItem
              key={asset.assetId}
              imageSrc={asset.logo ? asset.logo : logoImage}
              name={asset.name}
              availability={asset.available}
            />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default Body;
