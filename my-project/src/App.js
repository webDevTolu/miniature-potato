import { Fragment } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

export default function App() {
  return (
    <Fragment>
      <Header />
      <main className="font-read flex flex-col items-center gap-y-10 w-full mt-4">
        <h2 className="text-4xl font-medium w-[45%] text-center">
          List of Algorand Standard Assets on ASAlytics
        </h2>
        <Body />
      </main>
    </Fragment>
  );
}
