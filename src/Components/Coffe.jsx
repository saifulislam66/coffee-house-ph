import React from "react";
import image from "../assets/banner2.png";
import Swal from "sweetalert2";
import { Link } from "react-router";

function Coffe({ coffe, filterCofee }) {
  const { name, _id } = coffe;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        filterCofee(id);
        // send coffee id
        fetch(`https://backend-cofee.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="border-1 border-gray-900 rounded-sm p-5 flex items-center justify-between">
      <div className="bg-red-300 w-1/3">
        <img src={image} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
      </div>
      <div className="flex flex-col ">
        <Link to={`/coffee/${_id}`}>
          <button>view</button>
        </Link>
        <Link to={`/update/${_id}`}>
          <button>edit</button>
        </Link>
        <button onClick={() => handleDelete(_id)}>X</button>
      </div>
    </div>
  );
}

export default Coffe;
