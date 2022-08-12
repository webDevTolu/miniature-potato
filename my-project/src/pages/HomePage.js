import { Fragment } from "react"
import Header from '../components/Header';
import Body from "../components/Body";


const HomePage = () => {
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

export default HomePage