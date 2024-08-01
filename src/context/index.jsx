/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

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
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  function addToFavorite(currentItem) {
    console.log(currentItem);
    let favoriteListCopy = [...favoriteList];
    const index = favoriteListCopy.findIndex(
      (item) => item.id === currentItem.id
    ); // findIndex in Js of -1 --> element is not present in the array
    if (index === -1) {
      favoriteListCopy.push(currentItem);
    } else {
      favoriteListCopy.splice(index);
    }
    setFavoriteList(favoriteListCopy);
  }
  console.log(favoriteList);
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        addToFavorite,
        favoriteList,
        setFavoriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
