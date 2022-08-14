interface AsaList {
  assetId: string;
  name: string;
  available: boolean;
  logo: string;
}

export default interface AsaListData {
  asalist: {
    results: AsaList[];
  };
}
