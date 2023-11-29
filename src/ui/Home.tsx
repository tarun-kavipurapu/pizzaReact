import React from "react";
import { CreateUser } from "../features";

const Home = () => {
  return (
    <div>
      <h1 className=" text-xl text-center my-9">
        The best pizza.
        <br />
        <h1 className="text-orange-600 text-xl p-2">
          Straight out of the oven, straight to
          <br />
          you.
        </h1>
        <CreateUser />
      </h1>
    </div>
  );
};

export default Home;
