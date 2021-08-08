import React, { useState } from "react";
import DisplayResults from "./DisplayResults";
import FetchedDataContext from "../FetchedDataContext";
import RecentSearches from "./RecentSearches";

export default () => {
  const [symblsInput, setSymbolsInput] = useState('');
  const [fetchedData, setFetchedData] = useState();

  const onInputChange = e => {
    setSymbolsInput(e.target.value)
  }

  const onSymbolsSubmit = (e) => {
    e.preventDefault()

    const symbolsParam = symblsInput.split(',').map(el => el.trim()).join(',')

    fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${encodeURIComponent(symbolsParam)}`, {
      headers: {
        'x-rapidapi-key': 'cb63c118a8mshc4c1bb663e99478p191f01jsn226e6b8ce5e3',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(data => {
        if (data.quoteResponse.error) throw data.quoteResponse.error;
        setFetchedData(data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <FetchedDataContext.Provider value={{ fetchedData }}>
      <>
        <form style={{ textAlign: 'center' }} onSubmit={onSymbolsSubmit}>
          <p>Type a symbol, or a comma-separated list of symbols.</p>
          <p>(AMZN,AMD,AAPL,GME,ZYNGA,NIO,ITUB,EEM,SLV,PBR,DKNG,PLUG,WFC,XELA,QQQ)</p>
          <input type="text" name="symbols" onChange={onInputChange} />
          <input type="submit" value="Submit" />
        </form>

        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gridGap: '35px' }}>
          <DisplayResults results={fetchedData ? fetchedData.quoteResponse.result : []} />
          <RecentSearches />
        </div>
      </>
    </FetchedDataContext.Provider>
  )

}