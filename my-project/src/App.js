import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const HomePage = React.lazy(() => import("./pages/HomePage"));

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomePage />
    </Suspense>
  );
}
