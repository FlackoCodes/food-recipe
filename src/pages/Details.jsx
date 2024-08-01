import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { GlobalContext } from "../context";

export default function Details() {
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    addToFavorite,
    favoriteList,
  } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      if (data?.data?.recipe) {
        setRecipeDetailsData(data?.data?.recipe);
      }
    }
    fetchDetails();
  }, []);

  return (
    <div className="container w-5/6 mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.image_url}
            className="w-full h-full block group-hover:scale-105 duration-300"
            alt="recipeImage"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-cyan-600">
          {recipeDetailsData?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetailsData?.title}
        </h3>
        <div>
          <button
            onClick={() => addToFavorite(recipeDetailsData)}
            className="capitalize p-3 px-3 border-none bg-gray-900 rounded-md text-white font-medium tracking-wide inline-block shadow-medium"
          >
            {favoriteList.findIndex(
              (item) => item.id === recipeDetailsData.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="text-2xl  text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold font-serif text-black mx-1">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
