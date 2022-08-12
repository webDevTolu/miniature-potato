import { Fragment } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

export default function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Body />
      </main>
    </Fragment>
  );
}
