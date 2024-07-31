import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col p-5 shadow-lg w-80 overflow-hidden bg-white/75 gap-5 border-2 rounded-xl border-white">
      <div className="h-40 flex justify-center items-center overflow-hidden">
        <img src={item.image_url} className="cursor-pointer" />
      </div>
      <div className="text-start">
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm px-8 p-3 rounded-lg uppercase font-medium inline-block shadow-medium bg-black text-white m-5 tracking-wider"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
