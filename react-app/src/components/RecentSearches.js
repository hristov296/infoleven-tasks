import React, { useContext, useEffect, useState } from "react";
import FetchedDataContext from "../FetchedDataContext";

const DisplayRecent = React.memo(({ recent }) => (
  <>
    {recent.slice(0, 10).map((el, i) => (
      <div key={el.symbol}>
        <p><b>{el.symbol}</b> - {el.shortName}</p>
      </div>
    ))}
  </>
));

export default () => {
  const [recentSearches, setRecentSearches] = useState([]);
  const { fetchedData } = useContext(FetchedDataContext)

  useEffect(() => {

    if (!fetchedData) return;
    if (fetchedData.quoteResponse.error) return;
    const { result } = fetchedData.quoteResponse;
    const filteredSearches = recentSearches.filter(el => result.map(el => el.symbol).indexOf(el.symbol) === -1);
    setRecentSearches([...result, ...filteredSearches]);
  }, [fetchedData])

  return (
    <div style={{ paddingTop: '35px' }}>
      <h3>10 most recent searches:</h3>
      <DisplayRecent recent={recentSearches} />
    </div>
  )
}