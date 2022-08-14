import React, { Suspense } from "react";
import LoadingSpinner from "./components/ui/LoadingSpinner";

const HomePage = React.lazy(() => import("./pages/HomePage"));

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomePage />
    </Suspense>
  );
}
