import React from "react";
import "./index.css";

function QuotesTable({ quotes, handleOpen }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>symbol</th>
          <th>bestBidPrice</th>
          <th>bestAskPrice</th>
          <th>bestAskSize</th>
        </tr>
      </thead>
      <tbody>
        {quotes.map((quote) => (
          <tr onClick={() => handleOpen(quote)} key={quote.tradeId}>
            <td>{quote.symbol}</td>
            <td>{quote.bestBidPrice}</td>
            <td>{quote.bestAskPrice}</td>
            <td>{quote.bestAskSize}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default QuotesTable;
