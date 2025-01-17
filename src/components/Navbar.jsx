import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto  flex-col lg:flex-row gap-5 lg:gap-0">
      <NavLink to={"/"} className="text-2xl font-bold">
        FoodRecipe
      </NavLink>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter Items...."
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className="bg-white/75 p-3 px-8 outline-none rounded-full lg:w-96 shadow-lg shadow-gray-300 focus:shadow-gray-400"
        />
      </form>
      <ul className="flex gap-5 ">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
