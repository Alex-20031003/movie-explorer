import { queries } from "@testing-library/dom";

const API_KEY = process.env.REACT_APPOMDB_API_KEY;

export const searchMovies = async (query) => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await res.json();
    return data.Search || [];
};