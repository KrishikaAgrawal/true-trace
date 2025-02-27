import { createContext, useState } from "react";
import PropTypes from "prop-types";

// ✅ Create the context
export const SearchContext = createContext(null);

// ✅ Create and export the provider
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// ✅ Fix ESLint warning for missing prop validation
SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
