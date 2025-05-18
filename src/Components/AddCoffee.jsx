import React from "react";
import Swal from "sweetalert2";

function AddCoffee() {
  const handleCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());

    // send data backend use api
    fetch("https://backend-cofee.vercel.app/coffee", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully!",
            icon: "success",
            draggable: true,
          });
        }
        // console.log("claint site user data ", data);
      });
  };
  return (
    <div className=" md:w-8/12 mx-auto p-5 ">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Add Coffee</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore
          nesciunt iure voluptatibus, inventore cum debitis nihil quam.
          Voluptatem dolorem blanditiis id nesciunt. Assumenda, repellendus.
        </p>
      </div>
      <form onSubmit={handleCoffee} className="mt-5">
        <div className="grid grid-cols-1  gap-5 md:grid-cols-2">
          <div>
            <legend className="fieldset-legend">Name</legend>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input w-full bg-white"
            />
          </div>
          <div>
            <legend className="fieldset-legend">Chef</legend>
            <input
              name="chef"
              type="text"
              placeholder="Chef"
              className="input w-full"
            />
          </div>
          <div>
            <legend className="fieldset-legend">Supplier</legend>
            <input
              name="supplier"
              type="text"
              placeholder="Supplier"
              className="input w-full"
            />
          </div>
          <div>
            <legend className="fieldset-legend">Tasti</legend>
            <input
              name="tasti"
              type="text"
              placeholder="Tasti"
              className="input w-full"
            />
          </div>
          <div>
            <legend className="fieldset-legend">Category</legend>
            <input
              name="category"
              type="text"
              placeholder="Category"
              className="input w-full"
            />
          </div>
          <div>
            <legend className="fieldset-legend">Details</legend>
            <input
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

export default AddCoffee;
