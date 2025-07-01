//import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// calling from server
//const useGenres = () => useData<Genre>("/genres");

// calling static data
const useGenres =()=> ({ data: genres, isLoading: false, error: null });

export default useGenres;
