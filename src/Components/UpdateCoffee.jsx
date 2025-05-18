import { formatDate } from "date-fns";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

function UpdateCoffee() {
  const navigate = useNavigate();
  const coffee = useLoaderData();
  const { name, _id, category, chef, tasti, supplier, photo, details } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    fetch(`https://backend-cofee.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          Swal.fire({
            title: "Coffee Added Successfully!",
            icon: "success",
            draggable: true,
          });
          navigate("/");
        }
        console.log("update data clint", data);
      });
    console.log(updatedData);
  };
  return (
    <div className="md:w-8/12 mx-auto p-5 ">
      <div className="text-center ">
        <h1 className="text-3xl font-bold">Update Coffee</h1>
      </div>
      <form onSubmit={handleUpdateCoffee} className="mt-5">
        <div className="grid grid-cols-1  gap-5 md:grid-cols-2">
          <div>
            <legend className="fieldset-legend">Name</legend>
            <input
              defaultValue={name}
              name="name"
              type="text"
              placeholder="Name"
              className="input w-full bg-white"
            />
          </div>
          <div>
            <legend className="fieldset-legend">Chef</legend>
            <input
              defaultValue={chef}
              name="chef"
              type="text"
              placeholder="Chef"
              className="input w-full"
            />
          </div>
          <div>
            <legend className="fieldset-legend">Supplier</legend>
            <input
              defaultValue={supplier}
              name="supplier"
              type="text"
              placeholder="Supplier"
              className="input w-full"
            />
          </div>
          <div>
            <legend className="fieldset-legend">Tasti</legend>
            <input
              defaultValue={tasti}
              name="tasti"
              type="text"
              placeholder="Tasti"
              className="input w-full"
            />
          </div>
          <div>
            <legend className="fieldset-legend">Category</legend>
            <input
              defaultValue={category}
              name="category"
              type="text"
              placeholder="Category"
              className="input w-full"
            />
          </div>
          <div>
            <legend className="fieldset-legend">Details</legend>
            <input
              defaultValue={details}
              name="details"
              type="text"
              placeholder="Details"
              className="input w-full"
            />
          </div>
        </div>
        <div>
          <legend className="fieldset-legend">Photo URl</legend>
          <input
            defaultValue={photo}
            name="photo"
            type="text"
            placeholder="Photo URl"
            className="input w-full"
          />
        </div>

        <input
          className="w-full btn mt-5 bg-[#D2B48C]"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
}

export default UpdateCoffee;
