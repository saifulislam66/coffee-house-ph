import React from "react";

function User({ us }) {
  const { name, email, photourl, lastSignInTime } = us;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={photourl && photourl}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {email && email}
        <br />
        <span className="badge badge-ghost badge-sm">
          {lastSignInTime && lastSignInTime}
        </span>
      </td>
      <td>Purple</td>
      <th>
        <div className="flex gap-2 justify-center items-center">
          <button className="btn btn-ghost btn-xs">See</button>
          <button className="btn btn-ghost btn-xs">Edit</button>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </div>
      </th>
    </tr>
  );
}

export default User;
