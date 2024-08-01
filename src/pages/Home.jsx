import { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../components/RecipeItem";

export default function Home() {
  const { loading, recipeList } = useContext(GlobalContext);

  console.log(loading);

  if (loading)
    return (
      <div className="text-black text-center text-2xl font-sans">
        data loading .... please wait
      </div>
    );
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length ? (
        recipeList.map((item, index) => <RecipeItem item={item} key={index} />)
      ) : (
        <div className="text-center">
          <p className="text-black text-pretty font-extrabold text-xl lg:text-4xl capitalize">
            no recipe to show, please search something
          </p>
        </div>
      )}
    </div>
  );
}
