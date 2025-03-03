import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

// Custom Hook
const useSearch = () => useContext(SearchContext);

export default useSearch;
