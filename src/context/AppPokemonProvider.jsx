/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AppPokeContext = createContext();

export default function AppPokemonProvider({ children }) {
  const [currentUsername, setCurrentUsername] = useLocalStorage("usurname", "");
  const isActive = currentUsername !== "" ? true : false;
  const [favoritePoke, setFavoritePoke] = useState([]);
  const [nextCall, setNextCall] = useState(0);

  function resetData() {
    setNextCall(nextCall + 1);
  }

  function clearData() {
    const options = {
      method: "POST",
    };

    fetch(
      `https://poke-collection-lite-production.up.railway.app/api/${currentUsername}/reset`,
      options
    )
      .then((response) => resetData())
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    if (currentUsername !== "") {
      fetch(
        `https://poke-collection-lite-production.up.railway.app/api/${currentUsername}/favorites`
      )
        .then((response) => response.json())
        .then((data) => {
          setFavoritePoke(data.data);
          console.log(data.data);
        })
        .catch((err) => console.error(err));
    }
  }, [currentUsername, nextCall]);

  return (
    <AppPokeContext.Provider
      value={{
        currentUsername,
        isActive,
        setCurrentUsername,
        favoritePoke,
        resetData,
        clearData
      }}
    >
      {children}
    </AppPokeContext.Provider>
  );
}
