import { createClient } from 'contentful';
import { useEffect, useState } from "react";
import { createContext, useContext } from 'react';

const client = createClient({
  space: import.meta.env.VITE_SPACE_KEY,
  accessToken: import.meta.env.VITE_API_KEY,
});

const AppContext = createContext();


export const AppProvider = ({children}) => {
    //vars
    const [loading, setLoading] = useState(true)
    const [allMovies, setAllMovies] = useState([])
    const [movies, setMovies] = useState([])
    const [categories, setCategories] = useState([])



    const getData = async () => {
        setLoading(true);
        try {
            const response = await client.getEntries({content_type: 'movies'})
            const movieList = response.items.map((item)=> {
                const {title, category, rating, description, released, image} = item.fields
                const id = item.sys.id
                const img = image?.fields?.file?.url;
                return {title, category, rating, description, released, img}
            })
            const allCategories = [
              'all',
              ...new Set(movieList.map((item) => item.category)),
            ];
            setLoading(false)
            setMovies(movieList)
            setAllMovies(movieList)
            setCategories(allCategories)
            

        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    const filterItems = (item) => {
      if (item === 'all') {
        getData();
        return;
      }
        const newList = allMovies.filter((movie) => movie.category === item);
        setMovies(newList);
    };

          useEffect(() => {
            getData();
          }, []);



    return <AppContext.Provider value={{movies, categories, filterItems, getData}}>{children}</AppContext.Provider>

    }

export const useGlobalContext = () => useContext(AppContext);