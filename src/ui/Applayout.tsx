import React from "react";
import Header from "./Header";
import { CartOverview } from "../features";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
const Applayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(navigation);
  console.log(isLoading);
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {isLoading && (
        <div className={"h-screen"}>{<Loader isLoading={isLoading} />}</div>
      )}

      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default Applayout;
