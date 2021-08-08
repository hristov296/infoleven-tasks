import { createContext } from "react";

const FetchedDataContext = createContext({
  fetchedData: [],
  // setFetchedData: () => {}
});

export default FetchedDataContext;