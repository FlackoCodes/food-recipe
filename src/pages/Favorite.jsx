import { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../components/RecipeItem";

export default function Favorite() {
  const { favoriteList } = useContext(GlobalContext);

  console.log(`${favoriteList} this` );

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length ? (
        favoriteList.map((item, index) => (
          <RecipeItem item={item} key={index} />
        ))
      ) : (
        <div className="text-center">
          <p className="text-black text-pretty font-extrabold text-xl lg:text-4xl capitalize">
            Nothing is added in favorite yet, please add recipe.
          </p>
        </div>
      )}
    </div>
  );
}
