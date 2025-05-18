import React, { use } from "react";
import { useLoaderData } from "react-router";
import User from "./User";

function Users() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="mt-5">
      <div className="overflow-x-auto">
        <h2 className="text-3xl text-center my-3 font-bold  text-amber-800 ">
          All Users
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Sing In Date</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {data.map((us) => (
              <User us={us}></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
