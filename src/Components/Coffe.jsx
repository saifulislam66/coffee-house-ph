import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
// import image from "../assets/banner2.png";
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
    <div
      key={coffe.id}
      className="flex items-center justify-between bg-[#F5F4F1] p-4 rounded-lg shadow-md"
    >
      <img
        src={coffe.image}
        alt={coffe.name}
        className="w-24 h-24 object-contain"
      />
      <div className="flex-1 px-4">
        <p>
          <strong>Name:</strong> {coffe.name}
        </p>
        <p>
          <strong>Chef:</strong> {coffe.chef}
        </p>
        <p>
          <strong>Price:</strong> {coffe.price}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded"
          title="View"
        >
          <FaEye />
        </button>
        <button
          className="bg-amber-600 hover:bg-brown-700 text-white p-2 rounded"
          title="Edit"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-600 hover:bg-red-700 text-white p-2 rounded"
          title="Delete"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Coffe;
