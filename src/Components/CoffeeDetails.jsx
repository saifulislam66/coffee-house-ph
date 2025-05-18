import React from "react";
import { useLoaderData } from "react-router";

function CoffeeDetails() {
  const coffe = useLoaderData();
  const { name } = coffe;
  console.log(coffe);
  return (
    <div>
      <h1 className="text-4xl">{name}</h1>
    </div>
  );
}

export default CoffeeDetails;
