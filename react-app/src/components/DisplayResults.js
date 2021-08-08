import React from "react";

export default React.memo(({ results }) => (
  <div style={{ paddingTop: '35px' }}>
    <h3>Results:</h3>
    <div style={{ display: 'grid', gridGap: '35px', gridTemplateColumns: 'repeat(3,1fr)' }}>
      {results.map((el, i) =>
        <div key={el.symbol}>
          <p><b>Symbol: </b>{el.symbol}</p>
          <p><b>Name: </b>{el.shortName}</p>
          <p><b>Quote Type: </b>{el.quoteType}</p>
          <p><b>Ask: </b>{el.ask}</p>
          <p><b>Market State: </b>{el.marketState}</p>
          <p><b>Previous Close: </b>{el.regularMarketPreviousClose}</p>
        </div>
      )}
    </div>
  </div>
))