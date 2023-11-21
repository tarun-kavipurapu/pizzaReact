import React from "react";
import { CreateUser } from "../features";

const Home = () => {
  return (
    <div>
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      <CreateUser/>
    </div>
  );
};

export default Home;
