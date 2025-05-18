import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Coffe from "./Coffe";

function Home() {
  const initialCoffee = useLoaderData();

  const [remainig, setRemaining] = useState(initialCoffee);

  const filterCofee = (id) => {
    console.log(id);
    const filteredData = remainig.filter((cofe) => cofe._id !== id);
    setRemaining(filteredData);
  };
  return (
    <div>
      <h1 className="text-center text-4xl ">Coffee</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {remainig.map((coffe) => (
          <Coffe
            key={coffe._id}
            coffe={coffe}
            filterCofee={filterCofee}
          ></Coffe>
        ))}
      </div>
    </div>
  );
}

export default Home;
