import { createBrowserRouter } from "react-router";
import mainlayout from "./mainlayout/mainlayout";
import Home from "./Components/Home";
import AddCoffee from "./Components/AddCoffee";
import CoffeeDetails from "./Components/CoffeeDetails";
import UpdateCoffee from "./Components/UpdateCoffee";
import Error from "./Components/Error";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Users from "./Components/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: mainlayout,
    children: [
      {
        index: true,
        loader: () => fetch("https://backend-cofee.vercel.app/coffee"),
        path: "/",
        Component: Home,
      },
      {
        path: "coffee",
        Component: AddCoffee,
      },
      {
        path: "coffee/:id",
        loader: ({ params }) =>
          fetch(`https://backend-cofee.vercel.app/coffee/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(`https://backend-cofee.vercel.app/coffee/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "users",
        loader: () => fetch("https://backend-cofee.vercel.app/users"),
        Component: Users,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
