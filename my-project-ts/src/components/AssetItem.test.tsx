import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ASA_LIST } from "../queries/asaListQuery";
import AssetItem from "./AssetItem";

const mocks = [
  {
    request: {
      query: ASA_LIST,
    },
    result: {
      data: {
        asalist: {
          results: [
            {
              assetId: "1",
              name: "ASA 1",
              available: true,
              logo: "https://www.asa.org/images/asa-logo.png",
            },
          ],
        },
      },
    },
  },
];

test("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AssetItem
        imageSrc="https://www.asa.org/images/asa-logo.png"
        name="ASA 1"
        available={true}
      />
    </MockedProvider>
  );
  expect(await screen.findByText("ASA 1")).toBeInTheDocument();
});
