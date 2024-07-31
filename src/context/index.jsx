/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      console.log(data);
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
      console.log(recipeList);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }
  return (
    <GlobalContext.Provider
      value={{ searchParam, loading, recipeList, setSearchParam, handleSubmit, recipeDetailsData, setRecipeDetailsData }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
