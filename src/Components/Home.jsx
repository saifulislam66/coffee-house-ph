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
    <div className="p-6 md:p-12">
      <h2 className="text-center text-xl text-gray-500 mb-2">
        --- Sip & Savor ---
      </h2>
      <h1 className="text-center text-4xl font-bold text-brown-800 mb-6">
        Our Coffes
      </h1>
      <div className="text-center mb-8">
        <button className="bg-amber-800 hover:bg-yellow-700 text-white font-medium px-5 py-2 rounded">
          Coffee Item {remainig.length} ☕
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {remainig.map((coffee) => (
          <Coffe
            key={coffee._id}
            coffe={coffee}
            filterCofee={filterCofee}
          ></Coffe>
        ))}
      </div>
    </div>
    // <div>
    //   <h1 className="text-center text-4xl ">Coffee</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
    //     {remainig.map((coffe) => (
    //       <Coffe
    //         key={coffe._id}
    //         coffe={coffe}
    //         filterCofee={filterCofee}
    //       ></Coffe>
    //     ))}
    //   </div>
    // </div>
  );
}

export default Home;
